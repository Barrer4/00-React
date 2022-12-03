import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function Rating(props) {
  return (
    <div className="star">
      <span>
        {props.rating >= 1 ? (
          <BsStarFill />
        ) : props.rating >= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {props.rating >= 2 ? (
          <BsStarFill />
        ) : props.rating >= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {props.rating >= 3 ? (
          <BsStarFill />
        ) : props.rating >= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {props.rating >= 4 ? (
          <BsStarFill />
        ) : props.rating >= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {props.rating >= 5 ? (
          <BsStarFill />
        ) : props.rating >= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    </div>
  );
}

export default Rating;
