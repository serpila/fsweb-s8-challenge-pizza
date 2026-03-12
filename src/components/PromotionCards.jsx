import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './PromotionCards.css';

export default function PromotionCards() {
  return (
    <div className="cards wrapper">
      <div className="card-red">
        <img src="../images/iteration-2-images/cta/kart-1.png" alt="" />
        <div className="content">
          <h2>Özel <br />Lezzetus</h2>
          <p>Position: Absolute Acı Burger</p>
          <Link to="/order">
            <button className="btn-card">SİPARİŞ VER</button>
          </Link>
        </div>
      </div>
      <div className="card-wb">
        <div className="card-top">
          <img src="../images/iteration-2-images/cta/kart-2.png" alt="" />
          <div className="content">
            <h3>Hackathlon <br />Burger Menü</h3>
            <Link to="/order">
              <button className="btn-card">SİPARİŞ VER</button>
            </Link>
          </div>
        </div>
        <div className="card-bottom">
          <img src="../images/iteration-2-images/cta/kart-3.png" alt="" />
          <div className="content">
            <h3><span>Çoooook </span>hızlı <br />npm gibi kurye</h3>
            <Link to="/order">
              <button className="btn-card">SİPARİŞ VER</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}