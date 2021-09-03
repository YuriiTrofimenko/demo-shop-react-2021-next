import React from 'react'

function App() {
  return (
    <>
      <div id="back-on-top"></div>
      <div className="modal-window-hidden hide-modal-window">
        <div className="modal-window-hidden__cart-wrap">
          <div className="modal-window-hidden__cart">
            <div className="modal-window-hidden__header">A gift for you!</div>
            <div className="modal-window-hidden__content">
              Subscribe to our newsletter!
            </div>
            <div className="modal-winfdow-hidden__icon-warp">
              <img
                src="assets/icons/gift.svg"
                alt=""
                className="modal-window-hidden__icon"
              />
            </div>

            <div className="modal-window-hidden__subscribe">Subscribe</div>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <div className="burger-menu" id="nav-burger">
            <div className="burger__icon--close" id="burgerClose">
              <i className="fas fa-times"></i>
            </div>
            <ul className="burger-menu__items">
              <li><a href="#">Main</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Profile</a></li>
            </ul>
          </div>
          <div className="header__content">
            <div className="logo">
              <img className="logo__img" src="assets/logo/logo.svg" alt="" />
            </div>
            <div className="burger-icon__wrap--open" id="burgerOpen">
              <img
                className="burger-icon--open"
                src="assets/icons/humburger-menu.svg"
                alt=""
              />
            </div>
            <nav>
              <ul className="header__menu">
                <li>
                  <a href="#">Main</a>
                </li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Profile</a></li>
              </ul>
            </nav>

            <div className="header__slogan">
              <span>Get your pair of shoes!</span>
              <div>Bay it now!</div>
            </div>
            <div className="header__shopping-cart">
              <div className="header__shopping-cart-products-on-cart"></div>
            </div>
          </div>
          <div className="header__tittle" id="mainTittle"></div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="navigation-bar__top">
            <div className="sort-by">
              <span>Sort by:</span>
              <div className="sort-by__price" id="sort-by-price" data-filter="price">
                Price
                <div id="by-price-chevron" className="fas fa-chevron-down"></div>
              </div>

              <div
                className="sort-by__rating"
                id="sort-by-rating"
                data-filter="rating"
              >
                Rating

                <div id="by-rating-chevron" className="fas fa-chevron-down"></div>
              </div>
              <div className="sort-by--reset-all">Reset all filters</div>
            </div>

            <div className="modal-window__button">Get your gift!</div>
          </div>

          <div id="products-list"></div>
          <div className="load-more" id="load-more">
            <span>Load another 20 items</span>
            <br />
            <div className="load-more__items-left">so</div>
          </div>
          <section className="promo">
            <div className="promo__title">
              <h1>Hurry up to buy!</h1>
              <p>Subscribe now <br />and get all promotions!</p>
            </div>
            <div className="promo__form">
              <form action="" id="form">
                <input
                  className="promo__form-email"
                  type="email"
                  placeholder="Email"
                  id="email"
                />
                <input
                  className="promo__form-button"
                  type="submit"
                  value="Subscribe"
                  id="submit"
                />

                <div className="promo__form-subscribe">
                  <input type="checkbox" id="news" />
                  <label htmlFor="news">Subscribe for the news latters</label>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div></div>
      </main>
      <a href="#back-on-top">
        <div className="to-top">
          <i className="fas fa-chevron-up"></i>
        </div>
      </a>
      <div className="toaster--hidden">
        <div className="toaster__header">Item added to cart!</div>
      </div>
    </>
  )
}

export default App
