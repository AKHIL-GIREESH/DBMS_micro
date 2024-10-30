const express = require('express');
const genRouter = require('./routes/generalRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/auth/", genRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
