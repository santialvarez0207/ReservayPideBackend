const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    product: [{
      price: {
        type: Number,
      },
      count: {
        type: Number,
      },
      name: {
        type: String,
      },
    }],

    iduser: {
      type: String,
    },
    nameuser: {
      type: String,
    },
    total: {
      type: String,
      
    },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Shop || mongoose.model("Shop", StorageScheme);