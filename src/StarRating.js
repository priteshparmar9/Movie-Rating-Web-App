import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import {FaStar} from "react-icons/fa";
import swal from "sweetalert";


const StarRating = (props) => {
    const[rating, setRating] = useState(null);
    const[review, setReview] = useState('');
    const[hover, setHover] = useState(null);
    const[responseStatus, setResponseStatus] = useState('loading');

    const username = window.localStorage.getItem('username');
    const id = props.movie;
    console.log(id);

    let submitReview = async () => {
      let obj = {
        mov: id,
        review: review,
        rating: rating,
        username: username
      }
      if(!rating){
        return (
          swal('Please select atleast one star...')
        )
      }
      if(!review){
        return (
          swal('Please write something as review...')
        )
      }

      try{
        const {username, id, review, rating} = obj  
        const url = 'http://localhost:9000/review/';
        await axios.post(url, obj).then(res=>setResponseStatus(res.data));
        console.log(responseStatus);
      }
      catch(e){
        return swal('Opps!!', e.message, 'warning');
      }
      swal('Hi');


    } 

    function changeReview(event){
      setReview(event.target.value);
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
                       size={100} 
                       onMouseEnter ={()=>setHover(ratingValue)} 
                       onMouseLeave={()=>setHover(null)}
                    />
                </label>
              );
            })} 
            <textarea name="review" value={review} onChange={changeReview}/>
            <input type='submit' value='Rate' onClick={submitReview}/>
        </div>
    ); 
};

export default StarRating;