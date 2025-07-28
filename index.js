const express = require("express");
const app = express();
const dotenv = require("dotenv");
const usersRoutes = require("./routes/users");

dotenv.config();
app.use(express.json());

app.use("/users", usersRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
