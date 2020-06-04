import React, { Component } from "react";
import github from "../images/github.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          Samuel David <br />
          Copyright 2019 - All rights reserved
        </p>
        <a
          href="https://www.facebook.com/samueldavid.roncancio.bohorquez"
          target="_blank"
        >
          <img src={facebook} alt="icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/samuel-roncancio-bohorquez-324488198/"
          target="_blank"
        >
          <img src={linkedin} alt="icon" />
        </a>
        <a href="https://github.com/samdycode" target="_blank">
          <img src={github} alt="icon" />
        </a>

        <div>
          <p>
            Icon design by:
            <a
              href="https://www.flaticon.es/autores/google"
              title="Google"
              target="_blank"
            >
              Google
            </a>
          </p>
          <p>
            from:
            <a href="https://www.flaticon.es/" title="Flaticon" target="_blank">
              www.flaticon.es
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
