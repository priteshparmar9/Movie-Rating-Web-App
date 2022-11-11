import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import {FaStar} from "react-icons/fa";
import swal from "sweetalert";


const StarRating = (props) => {
    const movieId = props.id;
    console.log(movieId);
    const[rating, setRating] = useState(0);
    const[review, setReview] = useState('');
    const[hover, setHover] = useState(null);
    const [ResponseStatus, setResponseStatus] = useState();

    function handler(event){
      setReview(event.target.value);
      console.log(review);
    }

    console.log(window.localStorage.getItem('username') + rating+ ' ' + movieId + review)
    let giveReview = async () => {
      let REV = {
        username: window.localStorage.getItem('username'),
        mov: movieId,
        rating: rating,
        review: review
      }
      let url = "http://localhost:9000/review/";
      // const {username, mov, rating, review } = REV;
      await axios.post(url, REV).then(res=>setResponseStatus(res.data));
      swal('Yay!!', 'Your rating/review has been received!', 'success');
    }

    return (
        <div>
            {[...Array(10)].map((star, i) => {
              const ratingValue = i + 1;
              return( 
                <label>
                    <input 
                      type="radio" 
                      name="rating" 
                      value={ratingValue} 
                      onClick={()=>setRating(ratingValue)}  
                    />
                    <FaStar 
                       className="star" 
                       color={ratingValue <= (hover || rating ) ? "#ffc107" : "#e4e5e9" } 
                       size={50} 
                       onMouseEnter ={()=>setHover(ratingValue)} 
                       onMouseLeave={()=>setHover(null)}
                    />
                </label>
              );
            })}
           
            <div>
              <textarea id="review" value={review} onChange={handler}>
              </textarea>
            </div>
            <button onClick={giveReview} style={{color:'white'}}>Rate</button>
        </div>
    ); 
};

export default StarRating;