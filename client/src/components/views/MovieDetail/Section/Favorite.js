import React, { useEffect, useState } from "react";
import axios from "axios";

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movie.title;
  const moviePost = props.movie.backdrop_path;
  const movieRuntime = props.movie.runtime;

  const [favoriteNum, setfavoriteNum] = useState(0);
  const [favorited, setfavorited] = useState(false);

  useEffect(() => {
    let variables = {
      userFrom,
      movieId,
    };
    axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      if (response.data.success) {
        setfavoriteNum(response.data.favoriteMany);
      } else {
        alert("숫자 정보를 가져오는데 실패했습니다.");
      }
    });

    axios.post("/api/favorite/favorited", variables).then((response) => {
      if (response.data.success) {
        setfavorited(response.data.favorited);
      } else {
        alert("정보를 가져오는데 실패했습니다.");
      }
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button>
        {favorited ? "Not Favorite" : "Add to Favorite"} {favoriteNum}
      </button>
    </div>
  );
}

export default Favorite;
