import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

export default function Navbar() {
  const [state, setState] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      { id: 1, path: "/", text: "home" },
      { id: 2, path: "/about", text: "about" },
    ],
  })
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  // const navbarHandler = () => {
  //   isOpen
  //     ? setIsOpen({ false, css: "collapse navbar-collapse" })
  //     : setState(prevState => ({
  //         navbarOpen: true,
  //         css: "collapse navbar-collapse show",
  //       }))
  // }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggle}>
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={
          isOpen ? "collapse navbar-collapse" : "collapse navbar-collapse show"
        }
      >
        <ul className="navbar-nav mx-auto">
          {state.links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
