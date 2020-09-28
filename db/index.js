module.exports = require("mongoose").connect(
  process.env.MONGODB_URI || "mongodb://localhost/react_portfolio",
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
