import React from "react";
import marvel from "../../assets/marvel.svg";
import "./Menu.css";

import { Link } from "react-router-dom";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <div class="box">
        <div>
          <img src={marvel} alt="Marvel" />
        </div>
      </div>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/naoexiste">Não existe</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
