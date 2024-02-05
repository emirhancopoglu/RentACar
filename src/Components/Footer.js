import React from "react";
import "../Styles/FooterStyle.css";
const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footercontent">
        <ul className="footerul">
          <li>
            <h4>Car Rental</h4>
          </li>
          <li className="carrentalp">
            İhtiyaçlarınızı karşılayacak geniş filomuz ve uygun fiyatlarımızla
            istediğin aracı kirala , gezini şimdi planla!
          </li>
          <li className="footercontact">
            <a href="tel:123456789">0530 123 45 67</a>
          </li>
          <li className="footercontact">
            <a href="mailto: copogluemirhan@outlook.com">
              copogluemirhan@outlook.com
            </a>
          </li>
        </ul>
        <ul className="footercontent2">
          <li className="footercompanyname">Şirket</li>
          <li>
            <a href="/"> İstanbul</a>
          </li>
          <li>
            <a href="/">Hakkımızda</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
        <ul className="footercontent3">
          <li className="footerworkhours">Çalışma Saatleri</li>
          <li>Pazartesi - 07:00 - 22:00</li>
          <li>Salı - 07:00 - 23:00</li>
          <li>Çarşamba - 07:00 - 00:00</li>
          <li>Perşembe - 07:00 - 22:00</li>
          <li>Cuma - 07:00 - 21:00</li>
          <li>Cumartesi - 07:00 - 01:00</li>
        </ul>
        <ul className="footercontent3">
          <li className="footersubscribe">Abonelik</li>
          <li>
            <li className="footersubscribep">
              Email adresini yazıp indirim ve güncellemelerin bilgilerini mail
              olarak alabilirsin.
            </li>
          </li>
          <li>
            <input className="footeremail" type="email" placeholder=" Email" />
          </li>
          <li>
            <button className="submit-email">Gönder</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
