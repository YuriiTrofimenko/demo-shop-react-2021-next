const header: React.FC = () => (
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
)

export default header