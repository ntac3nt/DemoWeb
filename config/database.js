const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.Url_db);
    console.log("Connect Success");
  } catch (error) {
    console.log("Connect Fail");
  }
};
