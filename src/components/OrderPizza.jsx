import { useState } from 'react';
import './OrderPizza.css';
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function OrderPizza({ setOrderData }) {
    const [boyut, setBoyut] = useState("");
    const [hamur, setHamur] = useState("");
    const [ekMalzeme, setEkMalzeme] = useState([]);
    const [not, setNot] = useState("");
    const [adet, setAdet] = useState(1);
    const [isim, setIsim] = useState("");
    const [errors, setErrors] = useState({ isim: "", boyut: "", hamur: "", malzeme: "" });

    const history = useHistory();

    const gecerliForm = !errors.isim && !errors.boyut && !errors.hamur && !errors.malzeme && isim && boyut && hamur && ekMalzeme.length >= 4;


    const addProducts = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Jalapeno",
        "Sarımsak",
        "Biber",
        "Suda",
        "Ananas",
        "Kabak",
    ];
    function handleIsim(event) {
        const value = event.target.value;
        setIsim(value);
        setErrors({ ...errors, isim: value.trim().length < 3 ? "İsim en az 3 karakter olmalıdır!" : "" });
    }

    function handleBoyut(event) {
        const value = event.target.value;
        setBoyut(value);
        setErrors({ ...errors, boyut: value ? "" : "Pizza boyutu seçiniz!" });
    }
    function handleHamur(event) {
        const value = event.target.value;
        setHamur(value);
        setErrors({ ...errors, hamur: value ? "" : "Pizza hamuru seçiniz!" });
    }

    function handleMalzeme(product) {
        let yeniMalzeme;
        if (ekMalzeme.includes(product)) {
            yeniMalzeme = ekMalzeme.filter((e) => e !== product)
        }
        else {
            if (ekMalzeme.length < 10) {
                yeniMalzeme = [...ekMalzeme, product]
            }
            else {
                return;
            }
        }
        setEkMalzeme(yeniMalzeme);
        setErrors({ ...errors, malzeme: yeniMalzeme.length < 4 ? "En az 4 malzeme seçimelisiniz!" : "" });
    }

    const sabitFiyat = 85.5;
    const ekMalzemeFiyat = ekMalzeme.length * 5;
    const toplamFiyat = (sabitFiyat + ekMalzemeFiyat) * adet;

    function handleSubmit(event) {
        event.preventDefault();

        if (!gecerliForm) {
            console.log("Form eksik veya hatalı.");
            return;
        }

        const orderData = {
            isim: isim,
            boyut: boyut,
            hamur: hamur,
            malzemeler: ekMalzeme,
            not: not,
            adet: adet,
            secimFiyati: ekMalzemeFiyat,
            toplam: toplamFiyat
        };
        axios.post("https://reqres.in/api/pizza", orderData, {
            headers: {
                "x-api-key": "reqres_32dd8eba20ec47608b5cf5e54efb9a9d",
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                console.log("Sipariş başarıyla gönderildi.");
                const ozet = response.data;
                console.log(`Sipariş Özeti\n---------------\nSipariş ID: ${ozet.id}\nTarih: ${ozet.createdAt}\nİsim: ${ozet.isim}\nBoyut: ${ozet.boyut}\nHamur: ${ozet.hamur}\nMalzemeler: ${ozet.malzemeler?.join(", ")}\nAdet: ${ozet.adet}\nSeçim Fiyatı: ${ozet.secimFiyati}₺\nToplam: ${ozet.toplam}₺\nNot: ${ozet.not || "Yok"}\n---------------`)
                setOrderData(ozet);
                history.push("/success");
            })
            .catch((error) => { console.log("Hata oluştu.", error) })

    }

    return (
        <div className='order-page'>
            <header className='header'>
                <img src="./images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" className="logo" />
                <p>Anasayfa - <span style={{ fontWeight: "bold" }}>Sipariş Oluştur</span></p>
            </header>
            <form className="pizza-container" onSubmit={handleSubmit}>
                <h3>Position Absolute Acı Pizza</h3>
                <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu acı pizza tam
                    sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
                    malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
                    fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
                    düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
                    lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                <div className="item-info">
                    <span className="price">85.50₺</span>
                    <span>4.9</span>
                    <span>(200)</span>
                </div>

                <div className='options'>
                    <div className='radio-opt'>
                        <h4>Boyut Seç <span style={{ color: "red" }}>*</span></h4>
                        <label htmlFor="kucuk">
                            <input type="radio" id='kucuk' name='boyut' value='Küçük' onChange={handleBoyut} />
                            Küçük</label>

                        <label htmlFor="orta">
                            <input type="radio" id='orta' name='boyut' value='Orta' onChange={handleBoyut} />
                            Orta</label>

                        <label htmlFor="buyuk">
                            <input type="radio" id='buyuk' name='boyut' value='Büyük' onChange={handleBoyut} />
                            Büyük</label>
                    </div>

                    <div className='select-opt'>
                        <h4>Hamur Seç <span style={{ color: "red" }}>*</span></h4>
                        <select value={hamur} onChange={handleHamur}>
                            <option value="" disabled>Hamur Kalınlığı</option>
                            <option value="İnce">İnce</option>
                            <option value="Orta">Orta</option>
                            <option value="Kalin">Kalın</option>
                        </select>
                    </div>
                </div>

                <div className='additional-products'>
                    <h4>Ek Malzemeler</h4>
                    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    {addProducts.map((product) => (
                        <label key={product}>
                            <input
                                type='checkbox'
                                checked={ekMalzeme.includes(product)}
                                onChange={() => handleMalzeme(product)}
                            />
                            {product}</label>
                    ))}
                    {ekMalzeme.length > 0 && errors.malzeme && (
                        <p className='error'>{errors.malzeme}</p>
                    )}
                </div>

                <div className="name-input">
                    <label htmlFor="isim">İsim</label>
                    <input
                        id="isim"
                        type="text"
                        placeholder="İsminizi girin"
                        value={isim}
                        onChange={handleIsim}
                    />
                    {isim.length > 0 && errors.isim && (
                        <p className='error'>{errors.isim}</p>
                    )}
                </div>

                <div className='notes'>
                    <label htmlFor="not">Sipariş Notu</label>
                    <textarea id="not"
                        value={not}
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                        onChange={(e) => setNot(e.target.value)}
                    />
                </div>

                <div className='order'>
                    <div className='total'>
                        <div className='total-info'>
                            <h4>Sipariş Toplamı</h4>
                            <div className='secimler'>
                                <span>Seçimler:</span>
                                <span>{ekMalzemeFiyat}₺</span>
                            </div>
                            <div className='toplam'>
                                <span>Toplam: </span>
                                <span>{toplamFiyat.toFixed(2)}₺</span>
                            </div>
                        </div>
                        <button className="order-btn desktop-btn" disabled={!gecerliForm}>SİPARİŞ VER</button>
                    </div>

                    <div className='amount-all'>
                        <div className='amount'>
                            <button type='button' onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}>-</button>
                            <span>{adet}</span>
                            <button type='button' onClick={() => setAdet(adet + 1)}>+</button>
                        </div>
                        <button className="order-btn mobile-btn" disabled={!gecerliForm}>SİPARİŞ VER</button>
                    </div>
                </div>

            </form>
        </div>
    );
}