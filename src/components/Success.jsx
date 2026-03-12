import './Success.css';
import Footer from "./Footer";

export default function Success({ orderData }) {
    return (
        <>
        <div className="success-wrapper">
            <img src="./images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" className="logo" />
            <div className="thanks">
                
                <p className='slogan-success'>lezzetin yolda</p>
                <h1 className='mobile-h1'>TEBRİKLER!</h1>
                <h1>SİPARİŞİNİZ<br className="mediabreak" /> ALINDI!</h1>
               

                {orderData && (
                    <div className='orderSum'>
                        <p className='pizza-isim'>Position Absolute Acı Pizza</p>
                                             
                        <div className='orderSum-row-info'>
                            <span className='desc'>Boyut: </span>
                            <span>{orderData.boyut}</span>
                        </div>

                        <div className='orderSum-row-info'>
                            <span className='desc'>Hamur: </span>
                            <span>{orderData.hamur}</span>
                        </div>

                        <div className='orderSum-row-info'>
                            <span className='desc'>Malzemeler: </span>
                            <span>{orderData.malzemeler?.join(",")}</span>
                        </div>

                        <div className='order-price'>
                        <p>Sipariş Toplamı</p>
                        <div className='orderSum-row'>
                                <span>Seçimler </span>
                                <span>{orderData.secimFiyati.toFixed(2)}₺</span>
                        </div>
                       
                        <div className='orderSum-row'>
                            <span>Toplam </span>
                            <span>{orderData.toplam.toFixed(2)}₺</span>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
         <Footer/>
        </>
    );
}