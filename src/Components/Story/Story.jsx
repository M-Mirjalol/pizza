
import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <section className="story" id="story">
      <div className="container">
        <div className="story__container">
          <div className="story__visual">
            <div className="story__image">
              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85"
                alt="Freshly baked artisan pizza"
              />

              <div className="story__image-overlay"></div>

              <div className="story__image-label">
                <span className="story__flame">🔥</span>
                <div>
                  <strong>CRAFTED WITH FIRE</strong>
                  <small>Since day one</small>
                </div>
              </div>

              <div className="story__image-number">01</div>
            </div>

            <div className="story__decor"></div>
          </div>

          <div className="story__content">
            <span className="story__eyebrow">
              ✦ OUR STORY
            </span>

            <h2 className="story__title">
              BORN FROM
              <br />
              THE <span>FLAMES.</span>
            </h2>

            <div className="story__line"></div>

            <p className="story__text">
              FIERY PIZZA started with a simple passion: creating
              unforgettable pizza using traditional Italian
              wood-fired baking techniques.
            </p>

            <p className="story__text story__text--muted">
              Every pizza is handcrafted with carefully selected
              ingredients, slow-fermented dough, and the perfect
              balance of crispy crust, rich sauce, and melted
              cheese. Every bite brings the heat, flavor, and
              soul of authentic pizza craftsmanship.
            </p>

            <div className="story__features">
              <div className="story__feature">
                <span className="story__feature-icon">🍕</span>
                <div>
                  <strong>HANDCRAFTED</strong>
                  <small>Made fresh with care</small>
                </div>
              </div>

              <div className="story__feature">
                <span className="story__feature-icon">🔥</span>
                <div>
                  <strong>FIRE BAKED</strong>
                  <small>Golden, crispy perfection</small>
                </div>
              </div>
            </div>

            <a className="story__button" href="#menu">
              EXPLORE OUR MENU
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;