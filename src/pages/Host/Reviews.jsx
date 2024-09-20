import React from "react";

export default function Reviews(){
    return(
        <div className="reviews-section">
        <h2>Your reviews <span className="time-range">last 30 days</span></h2>
        <div className="overall-rating">
          <h1>5.0 <span className="star">★</span></h1>
          <p>overall rating</p>
        </div>
  
        <div className="rating-bars">
          <div className="rating-bar">
            <span>5 stars</span>
            <div className="bar orange" style={{ width: '100%' }}></div>
            <span>100%</span>
          </div>
          <div className="rating-bar">
            <span>4 stars</span>
            <div className="bar gray" style={{ width: '0%' }}></div>
            <span>0%</span>
          </div>
          <div className="rating-bar">
            <span>3 stars</span>
            <div className="bar gray" style={{ width: '0%' }}></div>
            <span>0%</span>
          </div>
          <div className="rating-bar">
            <span>2 stars</span>
            <div className="bar gray" style={{ width: '0%' }}></div>
            <span>0%</span>
          </div>
          <div className="rating-bar">
            <span>1 star</span>
            <div className="bar gray" style={{ width: '0%' }}></div>
            <span>0%</span>
          </div>
        </div>
  
        <h2>Reviews (2)</h2>
  
        <div className="review">
          <div className="stars">★★★★★</div>
          <h4>Elliot <span className="date">December 1, 2022</span></h4>
          <p>The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
        </div>
  
        <div className="review">
          <div className="stars">★★★★★</div>
          <h4>Sandy <span className="date">November 23, 2022</span></h4>
          <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
        </div>
      </div>
    )
}