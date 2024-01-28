import React, { useState } from "react";
import FaqStyle from "../Styles/FaqStyle.css";

const Faq = () => {
  const accordionData = [
    {
      title: "1. Araç kiralamak için gerekli gereksinimler nelerdir?",
      content: `Araç Kiralamak için en az 21 yaşını doldurmuş olmanız ve en az 1 yıllık B grubu ehliyet sahibi olmanız gerekmektedir.`,
    },
    {
      title: "2. Araç kiralama süreleri nelerdir?",
      content: `Araç kiralama minimum süresi günlük kiralamalarda 24 saat, aylık kiralamalarda ise 30 gündür.`,
    },

    {
      title: "3. Araç iade süresi nedir?",
      content: `Araçların iadesinde yaşanan gecikmelerde, sadece 59 dakikaya kadar opsiyon uygulanır.`,
    },
    {
      title: "4. Rezervasyon değişimi yapabilir miyim?",
      content: `Rezervasyon tarihinizden önce planlarınızda değişik olursa , çağrı merkezini arayabilir veya Canlı Destek üzerinden anında iletişim kurabilirsiniz. Rezervasyon değişikliği için talebinizi iletirken lütfen rezervasyon kodunuzu veya isim soyisim irtibat numaranızı bildiriniz.`,
    },
    {
      title: "5. Rezervasyon oluşturduğum aracı kesinlikle alabiliyor muyum?",
      content: `Rezervasyon oluşturduğunuz aracı alabilirsiniz, fakat araçlarda oluşan mekanik veya fiziksel hasarlanmalardan kaynaklı problemlerde size sunulan aracın muadili sizlere sunulur ve teslim edilir.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faqcontainer">
      <div className="faqtext">
        <h3>SSS</h3>
        <h2>Sıkça Sorulan Sorular</h2>

        <p className="faqtext-p">
          Araç Kiralama Rezervasyon Süreci Hakkında Sıkça Sorulan Sorular
        </p>
      </div>

      <div className="accordion">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => handleAccordionClick(index)}
            >
              <div>{item.title}</div>
              <div>{openIndex === index ? "-" : "+"}</div>
            </div>
            {openIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
