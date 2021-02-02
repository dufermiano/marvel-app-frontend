import React from 'react';
import marvel from '../../assets/marvel.svg';
import './Menu.css';

import { Link } from 'react-router-dom';

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <div className="box">
        <div>
          <img src={marvel} alt="Marvel" />
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/comics">Comics</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/favoritos">Meus favoritos</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
