import './MenuSection.css';

export default function MenuSection() {
    return (
        <>
            <div className="slogan2">
                <p>en çok paketlenen menüler</p>
                <h3>Acıktıran <br className="mediabreak" />Kodlara Doyuran <br className="mediabreak" />Lezzetler</h3>
            </div>
            <nav className="menu wrapper">
                <a href=""><img src="../images/iteration-2-images/icons/1.svg" alt="" /><span>Ramen</span></a>
                <a href=""><img src="../images/iteration-2-images/icons/2.svg" alt="" /><span>Pizza</span></a>
                <a href=""><img src="../images/iteration-2-images/icons/3.svg" alt="" /><span>Burger</span></a>
                <a href=""><img src="../images/iteration-2-images/icons/4.svg" alt="" /><span>French Fries</span></a>
                <a href=""><img src="../images/iteration-2-images/icons/5.svg" alt="" /><span>Fast food</span></a>
                <a href=""><img src="../images/iteration-2-images/icons/6.svg" alt="" /><span>Soft Drinks</span></a>
            </nav><div className="products wrapper">
                <div className="product-item">
                    <img src="../images/iteration-2-images/pictures/food-1.png" alt="" />
                    <h3>Terminal Pizza</h3>
                    <div className="item-info">
                        <span>4.9</span>
                        <span>(200)</span>
                        <span className="price">60₺</span>
                    </div>
                </div>
                <div className="product-item">
                    <img src="../images/iteration-2-images/pictures/food-2.png" alt="" />
                    <h3>Position Absolute Acı Pizza</h3>
                    <div className="item-info">
                        <span>4.9</span>
                        <span>(200)</span>
                        <span className="price">60₺</span>
                    </div>
                </div>
                <div className="product-item">
                    <img src="../images/iteration-2-images/pictures/food-3.png" alt="" />
                    <h3>useEffect Tavuklu Burger</h3>
                    <div className="item-info">
                        <span>4.9</span>
                        <span>(200)</span>
                        <span className="price">60₺</span>
                    </div>
                </div>
            </div></>
    );
}