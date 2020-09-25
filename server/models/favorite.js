const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema(
  {
    userForm: {
      //user.js에 있는 User 정보를 가져올 수 있는 기능
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    movieId: {
      type: String,
    },
    movieTitle: {
      type: String,
    },
    movieHost: {
      type: String,
    },
    movieRuntime: {
      type: String,
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = { Favorite };
