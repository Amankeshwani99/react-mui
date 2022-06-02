import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [rating, setRating] = useState(null);
  const changeRatingHanlder = (_event, updatedRating) => {
    setRating(updatedRating);
  };
  console.log("here is the rating", rating);
  return (
    <Stack>
      <Rating
        value={rating}
        onChange={changeRatingHanlder}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
