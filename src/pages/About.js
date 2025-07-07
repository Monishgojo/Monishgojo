import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
         The greatest distress, troublesome people either pretend or avoid consequences of pleasures. The excess of things causes harm, and no one wants pain for its own sake, but because sometimes circumstances arise in which toil and pain can procure great pleasure.

There are those who seek pleasure rationally. They may reject easy options in favor of more meaningful ones. Some troubles are willingly taken on for greater long-term benefit.

One must provide real reasons why someone might avoid discomfort. Truthfully, no one hates or avoids pleasure itself. Pain may be acceptable if it leads to something better.

The wise choose wisely, distinguishing between fleeting joys and deeper value. They understand the balance between gain and sacrifice, knowing how to endure difficulty for lasting satisfaction."
        </p>
      </div>
    </div>
  );
}

export default About;
