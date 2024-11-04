const express = require('express');
const genRouter = require('./routes/generalRoutes');
const authRouter = require('./routes/authRoutes')
const movieRouter = require("./routes/movie")
const mgrAuthRouter = require("./routes/mgrAuth")
const cors = require("cors")

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

app.use("/api/v1/gen/", genRouter);
app.use("/api/v1/auth/",authRouter);
app.use("/api/v1/movie/",movieRouter)
app.use("/api/v1/auth/mgr/",mgrAuthRouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
