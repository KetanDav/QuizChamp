const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 5000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// MongoDB Connection
mongoose.connect("mongodb://ketan:ketandav@ac-onbh1ga-shard-00-00.6qmr4qa.mongodb.net:27017,ac-onbh1ga-shard-00-01.6qmr4qa.mongodb.net:27017,ac-onbh1ga-shard-00-02.6qmr4qa.mongodb.net:27017/?replicaSet=atlas-mggij2-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,  
    solvedQuiz: Array,
    correctQuiz: Number,    
    lastQdate: Number,
    streak: Number,
    streakDate: String,
    exp: String,
    loc: String,
    contact: Number,
    bookmark: Array
});

const User = mongoose.model("User", userSchema);

// ---------------------- API Endpoints ----------------------
const hashPassword = async (pwd) => btoa(String.fromCharCode(...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pwd)))));
// ✅ **Register User**
app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    console.log(password)
    const hashed = await hashPassword(password);
    console.log(hashed)
    try {

        const newUser = new User({
            username,
            email,
            password: hashed,  
            solvedQuiz: [],
            correctQuiz: 0,
            lastQdate: 0,
            streak: 0,
            streakDate: new Date().toLocaleDateString(),
            exp: "",
            loc: "",
            contact: 0,
            bookmark: []
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// ✅ **Get All Users**
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// ✅ **Get User by Email**
app.get("/user/:email", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});


const SECRET_KEY = process.env.SECRET_KEY || "supersecret";

// ✅ Secure Login Route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const hashedP =await hashPassword(password)
    console.log(password,hashedP,user.password)
    if (!user || hashedP!==user.password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.cookie("token", token, { httpOnly: true, secure: false }).json({ message: "Login successful" });
});


// ✅ Fetch Profile (Authenticated User Only)
app.get("/profile", async (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded.userId).select("-password");
        res.json(user);
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
});




// ✅ **Delete User**
app.delete("/user/:email", async (req, res) => {
    try {
        await User.findOneAndDelete({ email: req.params.email });
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// ✅ **Replace Entire User Document (Using JWT)**
app.put("/user/update", async (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const userId = decoded.userId;

        const newUserData = req.body; // Entire new user data

        // Ensure _id and password are not modified
        delete newUserData._id;
        delete newUserData.password;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            newUserData,
            { new: true } // Return the updated document
        );

        if (!updatedUser) return res.status(404).json({ error: "User not found" });

        res.json({ message: "User details updated successfully", updatedUser });
    } catch (error) {
        res.status(401).json({ message: "Invalid token" }); 
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
