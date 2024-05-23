const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      
    },
    rol: {
      type: String,
      
    },
    address: {
      type: String,
      
    },
    phone: {
      type: String,
    },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Users || mongoose.model("Users", StorageScheme);