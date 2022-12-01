import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";


const StarRating = (props) => {
  const movieId = props.id;
  console.log(movieId);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [hover, setHover] = useState(null);
  const [ResponseStatus, setResponseStatus] = useState();

  function handler(event) {
    setReview(event.target.value);
    console.log(review);
  }

  console.log(window.localStorage.getItem('username') + rating + ' ' + movieId + review)
  let giveReview = async () => {
    let REV = {
      username: window.localStorage.getItem('username'),
      mov: movieId,
      rating: rating,
      review: review
    }
    let url = "https://moviebackend.onrender.com/review/";
    // const {username, mov, rating, review } = REV;
    await axios.post(url, REV).then(res => setResponseStatus(res.data));
    swal({
      title: "Thankyou!",
      text: "Your review has been received! Please refresh page to see the review.",
      icon: "success",
      onClick: ()=>{
        window.location.reload()
      }
    });
    let url1 = "/movie" + movieId;
    
  }

  return (
    <div>
      <h1 style={{
        textAlign: "center"
      }}>
        Give Rating
      </h1>
      <div className="container" style={{
        marginLeft: "8rem"
      }}>

        {[...Array(10)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <div>

                <FaStar
                  className="star"
                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  size={50}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </div>
            </label>
          );
        })}
      </div>
      <div>

        <textarea id="review" value={review} onChange={handler} placeholder="Write Review" style={{
          marginTop: "2rem",
          height: "20rem",
          width: "50rem",
        }}>
        </textarea>
      </div>
      <div className="container" style={{
        marginLeft: "14rem",
        marginTop: "1rem"
      }}>

        <button onClick={giveReview} style={{ color: 'white', marginBottom: '3rem' }}>Rate</button>
      </div>
    </div>
  );
};

export default StarRating;