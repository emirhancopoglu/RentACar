import React from "react";
import "../Styles/ContactStyle.css";

const ContactHero = () => {
  return (
    <div className="container">
      <div className="contact-div">
        <div className="contactinformation">
          <h5 id="detailsh5">Ek bilgiyemi ihtiyacınız var?</h5>
          <p>
            15 yıldan daha fazla deneyimimizle yanınızdayız. Türkiye'nin en
            güvenilir en uygun fiyatlı araba kiralama firması.
          </p>
          <a href="/">0535 456 98 32</a>
          <a href="/">carrental@gmail.com</a>
          <a href="/"> İstanbul </a>
        </div>
        <div className="contactformcontainer">
          <form>
            <label>Adınız </label>
            <input type="text" required></input>
            <label>Email</label>
            <input type="text" required></input>
            <label>Açıklamanız</label>
            <textarea id="textarea"></textarea>
            <button>Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
