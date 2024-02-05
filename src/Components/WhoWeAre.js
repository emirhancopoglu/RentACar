import React from "react";
import "../Styles/WhoWeAreStyle.css";
import companyface1 from "../Assets/companyface1.jpg";
import withcustomer from "../Assets/withcustomer.jpg";

const WhoWeAre = () => {
  return (
    <div className="aboutmaincontainer">
      <div className="aboutcontainer">
        <div className="about">
          <img src={companyface1} alt="Company Face"></img>
          <div className="aboutcontainer-text">
            <h3>Biz Kimiz?</h3>
            <h5>
              Rent A Car, müşterilerine güvenilir, konforlu ve özel bir araç
              kiralama deneyimi sunan öncü bir şirkettir. Rent A Car sektördeki
              uzmanlığı ve müşteri odaklı hizmet anlayışıyla bilinir. {<br />}
              {<br />}
              <h5 id="alt-text">
                Sektörde lider bir araç kiralama markası olma hedefiyle, müşteri
                beklentilerini aşan kaliteli hizmetler sunarak, sürekli
                gelişmeyi ve yeniliği benimsemekteyiz. Rent A Car, müşteri
                odaklı yaklaşımıyla sektörde öncü olmayı sürdürecek ve
                müşterilerine değer katmaya devam edecektir.
              </h5>
            </h5>
          </div>
        </div>
      </div>
      <div className="aboutcontainer">
        <div className="about">
          <img src={withcustomer} alt="Customer"></img>
          <div className="aboutcontainer-text">
            <h3>Gezini şimdi planla</h3>
            <h5>
              Müşteri memnuniyetini en üst düzeye çıkarmak ve her bir
              müşterimize özel bir araç kiralama deneyimi sunmak için buradayız.
              Rent A Car, her müşterisinin ihtiyaçlarına özel çözümler sunarak,
              seyahatlerini daha keyifli ve sorunsuz hale getirmeyi
              amaçlamaktadır. {<br />}
              {<br />}
              <h5 id="alt-text">
                <ul>
                  <li>Güvenilir ve profesyonel hizmet anlayışı</li>
                  <li>Geniş ve çeşitli araç filosu</li>
                  <li>Rekabetçi fiyatlar ve esnek ödeme seçenekleri</li>
                  <li>7/24 müşteri destek hizmeti</li>
                </ul>
              </h5>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
