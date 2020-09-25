import React, { useEffect } from "react";
import axios from "axios";

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movie.title;
  const moviePost = props.movie.backdrop_path;
  const movieRuntime = props.movie.runtime;

  useEffect(() => {
    let variables = {
      userFrom,
      movieId,
    };
    axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      if (response.data.success) {
      } else {
        alert("숫자 정보를 가져오는데 실패했습니다.");
      }
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button>Favorite</button>
    </div>
  );
}

export default Favorite;
