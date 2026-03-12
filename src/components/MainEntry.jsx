import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './MainEntry.css';

export default function MainEntry() {
    return (
        <section className="main-entry">
            <img src="./images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" className="logo" />
            <div className="slogan">
                <p>fırsatı kaçırma</p>
                <h1>KOD <br className="mediabreak" />ACIKTIRIR <br /> PIZZA,<br className="mediabreak" /> DOYURUR</h1>
            </div>
            <Link to="/order">
                <button className="btn">ACIKTIM</button>
            </Link>
        </section>
    );
}