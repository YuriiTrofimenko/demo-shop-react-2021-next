import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStore } from '../../../../stores/Store'
import logo from '../../../../assets/logo/logo.svg'
import routes from '../../../../routes'
import React from 'react'
import { NavLink } from 'react-router-dom'
const header: React.FC = observer(() => {
  const {productStore} = useStore()
  const mainTittle = (
    <div className="header__tittle">
      <h1>{productStore.sourceProductsTotalCount} shoes were found</h1>
    </div>
  )
  return (
    <header className="header">
      <div className="container">
        <div className="burger-menu" id="nav-burger">
          <div className="burger__icon--close" id="burgerClose">
            {/* <i className="fas fa-times"></i> */}
            <FontAwesomeIcon icon={['fas', 'times']} />
          </div>
          <ul className="burger-menu__items">
            {routes.map(route => (
                <NavLink
                    key={route.path}
                    to={route.path}
                    activeClassName="active"
                    exact
                >
                    {route.name}
                </NavLink>
            ))}
          </ul>
        </div>
        <div className="header__content">
          <div className="logo">
            <img className="logo__img" src={logo} alt="" />
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
              {routes.map(route => (
                <NavLink
                    key={route.path}
                    to={route.path}
                    activeClassName="active"
                    exact
                >
                    {route.name}
                </NavLink>
              ))}
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
        {mainTittle}
      </div>
    </header>
  )
})

export default header