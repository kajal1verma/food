import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import Menu from '../components/Menu'
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Our Caffe is an indian style cafe that serves simple, natural food – including Vegan and Gluten Free options – accompanied by authentic espresso coffee. Most coffee shops in the United States don’t do much with food and most restaurants don’t worry about coffee. The Australian café is a hybrid combining a strong coffee culture and a robust food culture under one roof in a welcoming, cozy and comfortable neighborhood café.Our Coffee – We serve a range of espresso coffees made from the finest coffee beans, roasted right here in Cape Coral, and our baristas really know their beans. With their superior technical knowledge and a passion for making amazing coffee they will make you the perfect cuppa.
            </p>
          
            <Link to={'/Menu'}
            
            >
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div> 
        </div>
      </section>
    </>
  );
};

export default About;
