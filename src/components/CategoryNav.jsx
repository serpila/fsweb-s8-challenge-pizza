import './CategoryNav.css';

export default function CategoryNav() {
  return (
    <section>
      <div className="main-sec">
        <nav className="main-section wrapper">
          <a href=""><img src="../images/iteration-2-images/icons/1.svg" alt="" /><span>YENİ! Kore</span></a>
          <a href=""><img src="../images/iteration-2-images/icons/2.svg" alt="" /><span>Pizza</span></a>
          <a href=""><img src="../images/iteration-2-images/icons/3.svg" alt="" /><span>Burger</span></a>
          <a href=""><img src="../images/iteration-2-images/icons/4.svg" alt="" /><span>Kızartmalar</span></a>
          <a href=""><img src="../images/iteration-2-images/icons/5.svg" alt="" /><span>Fast food</span></a>
          <a href=""><img src="../images/iteration-2-images/icons/6.svg" alt="" /><span>Gazlı İçecek</span></a>
        </nav>
      </div>
    </section>
  );
}