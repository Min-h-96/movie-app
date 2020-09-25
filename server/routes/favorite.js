const express = require("express");
const router = express.Router();
const { Favorite } = require("../models/favorite");
const { auth } = require("../middleware/auth");

/* ==============================
            Favorite
================================*/

router.post("/favoriteNumber", (req, res) => {
  // mongoDB에서 favorite 숫자 가져오기
  Favorite.find({ movieId: req.body.movieId }).exec((err, info) => {
    if (err) return res.status(400);
    // 프론트에 다시 숫자 정보 보내주기
    res.status(200).json({ success: true, favoriteMany: info.length });
  });
});

router.post("/favorited", (req, res) => {
  // User의 Favorite list에 현재 영화가 있는지 정보를 DB에서 가져오기
  Favorite.find({ movieId: req.body.movieId, userFrom: req.body.userFrom }).exec((err, info) => {
    if (err) return res.status(400);
    let result = false;
    if (info.length !== 0) {
      result = true;
    }
    res.status(200).json({ success: true, favorited: result });
  });
});

module.exports = router;
