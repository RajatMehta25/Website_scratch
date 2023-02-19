import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Card.css";
const Card = (ele) => {
  const sanitizeRating = (rating) => {
    let newrating = Math.floor(rating);
    let nextRating = Math.floor(newrating / 10);
    return nextRating;
  };
  const sanitizeSummay = (summary) => {
    if (summary.length > 30) {
      return summary.slice(0, 80) + "...";
    }
    return summary;
  };
  const sanitizeDate = (date) => {
    let newDate = new Date(date);
    return newDate.toISOString().split("T")[0];
  };
  console.log(ele);
  const { name, rating, summary, first_release_date, id } = ele.data;
  return (
    <div className="CardContainer">
      <div className="CardImage"></div>
      <div className="CardContent">
        <div className="Title">{name}</div>
        <div className="Date">Release Date :&nbsp;{sanitizeDate(first_release_date)}</div>
        <div className="Description">{sanitizeSummay(summary)}</div>
      </div>
      <div className="CardRating">
        <div className="CardRatingInner">{sanitizeRating(rating)}</div>
      </div>
    </div>
  );
};

export default Card;
