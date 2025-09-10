const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Render will set this automatically

// Serve static files from the "public" folder
app.use(express.static("public"));

// Default route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
