import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom" 



// export default function Navbar({about , home})
export default function Navbar(props) {

  return (
    <>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode} `}>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              className={`nav-link text-${props.mode === 'light'?"dark":"light " } title`}
              to="/">{props.title}</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode === 'light'?"dark":"light "}`} to="/">
              {props.home}
            </Link>{" "}
            {/* using prop*/}
            {/* <a className="nav-link" href="/">{home}</a>  destructuing*/}
          </li>
          <li className="nav-item" >
            <Link className={`nav-link text-${props.mode === 'light'?"dark":"light "}`} to="/About">
              {props.about}
            </Link>{" "}
            {/* using prop*/}
            {/* <a className="nav-link" href="/">{about}</a> destructuing */}
          </li>
          <li className="nav-item">
            <Link className={`nav-link text-${props.mode === 'light'?"dark":"light "}`} to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
          <div className={`form-check form-switch my-2 md-10`}>
              <input className="form-check-input" type="checkbox" onClick={props.handleMode} id="fl   exSwitchCheckDefault" aria-checked/>
              <label className={`form-check-label text-${props.mode === 'light'?"dark":"light "}`}  htmlFor="flexSwitchCheckDefault"> Dark Mode</label>
            </div>
      </nav>
    </>
  );
}

//set prototype of props
Navbar.prototype = {
  title: PropTypes.string,
};

//default props
Navbar.defaultProps = {
  title: "AKS",
  home: "HOME",
};