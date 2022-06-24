import React from "react";
import Rating from "react-rating";
import { RatingData } from "../CardMovie";
const RatingMain = ({ value }) => {
  const getScore = () => {};
  return (
    <>
    <RatingData margin="10px 0" style={{
        color: "var(--secondary)"
    }}>

      <Rating
        emptySymbol={
          <i
            className="bx bxs-star-half"
            style={{
              color: "var(--secondary)",
              fontSize/*  */: 18,
            }}
          ></i>
        }
        fullSymbol={
          <i
            className="bx bxs-star"
            style={{
              color: "var(--secondary)",
              fontSize: 18,
            }}
          ></i>
        }
        initialRating={value / 2}
        readonly
      />
      {value}
    </RatingData>
    </>
  );
};

export default RatingMain;
