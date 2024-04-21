import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Sapori autentici e radici biologiche" />
      <h1 className="app__header-h1">La chiave per una cucina raffinata</h1>
      {/* <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Ristorante con cucina eritrea ed etiope
      </p> */}
      <button type="button" className="custom__button">
        esplora il menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.homeScreen} alt="header_img" />
    </div>
  </div>
);

export default Header;
