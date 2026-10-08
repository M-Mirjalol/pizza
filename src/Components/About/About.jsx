
import React from "react";
import "./About.css";

import rasm from "./images/1.jpg";
import rasm2 from "./images/2.jpeg";
import rasm3 from "./images/3.jpg";

const pizzas = [
  {
    id: 1,
    image: rasm,
    name: "Fiery Pepperoni Special",
    description:
      "Double pepperoni, smoked chili mozzarella, fresh basil & hot honey.",
    price: "$18.99",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    image: rasm2,
    name: "Smoky Flame Margherita",
    description:
      "Fresh mozzarella, juicy tomatoes, aromatic basil & smoky tomato sauce.",
    price: "$16.50",
    tag: "CLASSIC",
  },
  {
    id: 3,
    image: rasm3,
    name: "Volcano Inferno Feast",
    description:
      "Spicy sausage, roasted peppers, melted cheese & our signature hot sauce.",
    price: "$21.00",
    tag: "SPICY 🔥",
  },
];

const About = () => {
  return (
    <section className="about" id="menu">
      <div className="container">
        <div className="about__container">
          <div className="about__heading">
            <span className="about__eyebrow">
              ✦ MADE WITH PASSION
            </span>

            <h2 className="about__title">
              OUR <span>FIRE MENU</span>
            </h2>

            <p className="about__text">
              Deliciously crafted wood-fired pizzas, made fresh
              with premium ingredients and a touch of fire.
            </p>
          </div>

          <ul className="about__list">
            {pizzas.map((pizza) => (
              <li className="about__card" key={pizza.id}>
                <div className="about__image-wrap">
                  <img
                    className="about__image"
                    src={pizza.image}
                    alt={pizza.name}
                  />

                  <span className="about__tag">{pizza.tag}</span>

                  <span className="about__image-number">
                    0{pizza.id}
                  </span>
                </div>

                <div className="about__card-content">
                  <h3 className="about__title2">{pizza.name}</h3>

                  <p className="about__text2">
                    {pizza.description}
                  </p>

                  <div className="about__card-bottom">
                    <div className="about__price">
                      <small>PRICE</small>
                      <strong>{pizza.price}</strong>
                    </div>

                    <a
                      className="about__button"
                      href="#order"
                      aria-label={`Order ${pizza.name}`}
                    >
                      Order Now
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="about__footer">
            <span>🔥</span>
            FRESH FROM THE OVEN. STRAIGHT TO YOUR TABLE.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;