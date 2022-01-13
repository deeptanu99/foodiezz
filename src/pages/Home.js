import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/FoodBlog.jpg";
 import "../styles/Home.css";
 
//Home page of the food wesite
 function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Background})` }}>
      <div className="headerContainer">
        <h1> Online Food Delivery</h1>
        <p> THE MOST ESSENTIAL PART OF LIFE </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
  }

export default Home;