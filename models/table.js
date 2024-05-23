const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    count: {
      type: Number,
    },
    status: {
      type: String,
    },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Tables || mongoose.model("Tables", StorageScheme);