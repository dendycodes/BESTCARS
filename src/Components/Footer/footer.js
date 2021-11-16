import React from "react";
import "./footer.scss";
import Icon from "@mdi/react";
import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiPinterest } from "@mdi/js";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div id="footer-catcher">
          <div className="content">
            <h2>BESTCARS</h2>
            <p>
              {" "}
              Bestcars.bg is an online store offering a full range of high
              quality parts <br /> and accessories for a wide range of cars.
            </p>
            <div className="social-networks">
              <div className="network">
                {" "}
                <Icon
                  className="icons"
                  path={mdiFacebook}
                  title="Facebook"
                  size={1.2}
                  color="white"
                />
              </div>
              <div className="network">
                {" "}
                <Icon
                  className="icons"
                  path={mdiTwitter}
                  title="Twitter"
                  size={1.2}
                  color="white"
                />
              </div>
              <div className="network">
                {" "}
                <Icon
                  className="icons"
                  path={mdiPinterest}
                  title="Facebook"
                  size={1.2}
                  color="white"
                />
              </div>
              <div className="network">
                <Icon
                  className="icons"
                  path={mdiLinkedin}
                  title="Linkedin"
                  size={1.2}
                  color="white"
                />
              </div>
            </div>
          </div>
          <div className="content">
            <h2>Customer Services</h2>
            <ul className="list">
              <li>Contact Us</li>
              <li> Terms And Conditions </li>
              <li>About Us</li>
              <li> FAQ </li>
              <li>Delivery Information</li>
            </ul>
          </div>
          <div className="content">
            <h2>Recent Posts</h2>
            <div className="posts">
              <img
                alt=""
                src="https://media.wired.com/photos/5e162edea92128000841255c/master/w_2300,h_1533,c_limit/Transpo_inline3.jpg"
              ></img>
              <p>Electric cars aren't pollution-free; the</p>
            </div>
            <div className="posts">
              <img
                alt=""
                src="https://www.renderhub.com/creative-idea-studio/tesla-logo/tesla-logo-01.jpg"
              ></img>
              <p>You can know or not know how a car runs</p>
            </div>
          </div>
          <div className="content">
            <div className="subscribe">
              <h2>Newsletter</h2>
              <p>
                {" "}
                Subscribe to our Newsletter and get bonusses for the next
                purchase
              </p>
              <input
                id="in-text"
                placeholder="Your email address"
                type="text"
              />
              <input id="in-submit" type="submit" value="Sign-up" />
            </div>
          </div>
        </div>
      </div>
      <div className="end">Copyright © 2021 | BESTCARS</div>
    </div>
  );
}
