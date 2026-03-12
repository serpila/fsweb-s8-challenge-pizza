import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="contact">
          <img src="../images/iteration-2-images/footer/logo-footer.svg" alt="" />
          <div className="contact-item"><img src="../images/iteration-2-images/footer/icons/icon-1.png" alt="" /><span>341 Londonderry Road, <br />Istanbul Türkiye</span>
          </div>
          <div className="contact-item"><img src="../images/iteration-2-images/footer/icons/icon-2.png" alt="" /><span>aciktim@teknolojikyemekler.com</span>
          </div>
          <div className="contact-item"><img src="../images/iteration-2-images/footer/icons/icon-3.png" alt="" /><span>+90 216 123 45 67</span>
          </div>
        </div>
        <div className="footer-menu">
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz  Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="social">
          <h3>Instagram</h3>
          <div className="social-pic">
            <img src="../images/iteration-2-images/footer/insta/li-0.png" alt="" />
            <img src="../images/iteration-2-images/footer/insta/li-1.png" alt="" />
            <img src="../images/iteration-2-images/footer/insta/li-2.png" alt="" />

            <img src="../images/iteration-2-images/footer/insta/li-3.png" alt="" />
            <img src="../images/iteration-2-images/footer/insta/li-4.png" alt="" />
            <img src="../images/iteration-2-images/footer/insta/li-5.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content wrapper">
          <p>© 2023 Teknolojik Yemekler.</p>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}