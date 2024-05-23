const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    iduser: {
      type: String,
    },
    idtable: {
      type: String,
    },
    date: {
      type: String,
    },
    hourstart: {
      type: String,
    },
    hourend: {
      type: String,
    },
    count: {
      type: Number,
    },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Reserves || mongoose.model("Reserves", StorageScheme);