const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      
    },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Plates || mongoose.model("Plates", StorageScheme);