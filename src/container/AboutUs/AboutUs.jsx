import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Chi siamo</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Ristorante con cucina eritrea ed etiope a due passi dalla Stazione
          Centrale e dalla metropolitana gialla (Repubblica) e verde (Centrale)
          e Rossa (Porta Venezia). Tra le nostre specialità sia piatti
          vegetariani (zighinì) e di carne (zighinì, kifto, gored, spriss).
          Locale accogliente, ideale per pranzi di lavoro e cene in compagnia.
        </p>
        <button type="button" className="custom__button">
          Scopri di più
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">La nostra storia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom__button">
          Scopri di più
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
