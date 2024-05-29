const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  telephone: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: true,
  },
},{ 
    timestamps: true 
});

module.exports = mongoose.model("user_collection", userSchema);
