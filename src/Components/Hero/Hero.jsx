import React from 'react'
import './Hero.css'
import pizza from './images/pizza.jpg' // o'zingning rasming

const Hero = () => {
  return (
    <section className="hero">
      {/* Soft light rays */}
      <div className="hero__rays"></div>
      
      {/* Overlay */}
      <div className="hero__overlay"></div>

      {/* Floating particles */}
      <div className="hero__particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <div className="hero__content">
          
          {/* Left Text */}
          <div className="hero__text-block">
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              AUTHENTIC WOOD-FIRED PIZZERIA
            </div>

            <h1 className="hero__title">
              BAKED IN
              <span className="hero__title-gradient">PURE FLAMES</span>
            </h1>

            <p className="hero__description">
              Step into our rustic pizzeria ambience and savor authentic
              wood-fired pizzas baked in 900°F brick ovens with fresh
              toppings & melted mozzarella.
            </p>

            <div className="hero__actions">
              <button className="hero__btn">
                <span>Explore Menu</span>
                <div className="hero__btn-shine"></div>
              </button>
            </div>
          </div>

          {/* Right Pizza */}
          <div className="hero__image-block">
            <div className="hero__pizza-ring">
              <div className="hero__pizza-glow"></div>
              <div className="hero__pizza-inner">
                <img 
                  src={pizza} 
                  alt="Wood-fired pizza" 
                  className="hero__pizza-img"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero