import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = process.env.PORT || 3000;

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import { criminals, admins } from './database.js'

// all pages 
app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get("/add-criminal", async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'add_criminal.html'));
});

app.get("/view-records", async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'view_records.html'));
});

app.get("/criminal-Profile/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const criminal = criminals.find(criminal => criminal.id == id);

        if (!criminal) {
            return res.status(404).send("Criminal profile not found.");
        }

        // Sending data along with the profile page
        res.send(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criminal Profile</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        header {
            background-color: #0078FF;
            color: #fff;
            text-align: center;
            padding: 1rem 0;
        }
        nav a {
            color: #fff;
            margin: 0 15px;
            text-decoration: none;
            font-weight: bold;
        }
        main {
            padding: 20px;
        }
        .profile-header {
            text-align: center;
            margin-bottom: 20px;
        }
        .highlight {
            font-weight: bold;
            color: #0078FF;
        }
        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            background-color: #0078FF;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Criminal Record System</h1>
        <nav>
          <a href="/">Dashboard</a>
          <a href="/add-criminal">Add Criminal</a>
          <a href="/view-records">View Records</a>
        </nav>
    </header>

    <main>
        <section class="profile-container">
            <div class="profile-info">
                <p><span class="highlight">id:</span> ${criminal.id}</p>
                <p><span class="highlight">Name:</span> ${criminal.name}</p>
                <p><span class="highlight">Age:</span> ${criminal.age}</p>
                <p><span class="highlight">Case Number:</span> ${criminal.caseNumber}</p>
                <p><span class="highlight">Crime Type:</span> ${criminal.crimeType}</p>
                <p><span class="highlight">Status:</span> ${criminal.status}</p>
                <p><span class="highlight">Description:</span> ${criminal.description}</p>
                <p><span class="highlight">Arrest Date:</span> ${new Date(criminal.arrestDate).toLocaleDateString()}</p>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Criminal Record System. Visit <a href="https://www.xhamstar.com" target="_blank"> IT services</a></p>
    </footer>
</body>
</html>

        `);
    } catch (error) {
        console.error("Error fetching criminal profile:", error);
        res.status(500).send("Internal server error.");
    }
});

app.get("/login", async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'login.html'));
});


// API Endpoints

app.post("/login", async (req, res) => {
    const admin = admins.find(admin => admin.contact === req.body.email && admin.password === req.body.password)
    if (!admin) return res.send("Invalid Credentials please go back and login again ")
    res.redirect("/")
})

app.post("/add-criminal", async (req, res) => {
    const newCriminal = {
        id: criminals.length + 1,
        caseNumber : req.body.caseNumber,
        name: req.body.name,
        age: req.body.age,
        crimeType: req.body.crimeType || "i don't know",
        status: req.body.status,
        arrestDate: req.body.arrestDate,
        description: req.body.description,
        profilepic: "not found"
    };
    criminals.push(newCriminal);
    // console.log("New criminal added:", newCriminal);
    res.redirect(`criminal-Profile/${newCriminal.id}`);
});

app.get("/api/recent-criminals", async (req, res) => {
    const lastCriminalRecords = criminals.slice(-10).reverse(); // Get the last 10 records
    res.json({
        success: true,
        data: lastCriminalRecords
    });
});

app.get("/api/all-criminals", async (req, res) => {
    res.json({
        success: true,
        data: criminals
    });
});

//app listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
