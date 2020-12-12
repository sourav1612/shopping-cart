import React from "react";

const Footer = () => {
  return (
    <footer class="main-footer">
      <div class="container main-footer-container">
        <h3 class="band-name">The Generics</h3>
        <ul class="nav footer-nav">
          <li>
            <a href="https://www.youtube.com" target="_blank">
              <img src={"../img/u tube.jpg"} />
            </a>
          </li>
          <li>
            <a href="https://www.spotify.com" target="_blank">
              <img src={"../img/spotify.jpg"} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <img src={"../img/fb.jpg"} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer