import express from "express";

const app = express();

const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
