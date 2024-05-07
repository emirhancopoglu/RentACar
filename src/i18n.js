import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      /*Header*/
      HeaderHome: "Anasayfa",
      HeaderAboutUs: "Hakkımızda",
      HeaderCarModels: "Araç Modelleri",
      HeaderCrew: "Ekibimiz",
      HeaderContact: "İletişim",
      HeaderSignup: "Kaydol",
      HeaderLogin: "Giriş",
      /*Home Page*/
      HomeHeroP1: "Gezini Şimdi Planla",
      HomeHeroP2Span: "Uygun",
      HomeHeroP2: "fiyatlarla istediğin aracı kirala!",
      HomeHeroSelectCarButton: "Aracını Seç",
      HomeHeroDetailsButton: "Detaylar",
      /*Rent Car Form */
      FormSelectCar: "Aracınızı seçiniz",
      FormSalePlace: "Alış yeri",
      FormBackPlace: "Dönüş yeri",
      FormBuyDate: "Alış tarihi",
      FormReturnDate: "Dönüş tarihi",
      FormButton: "Bul",
      /*İnformation*/
      InformationHead: "Hızlı & kolay araba kiralama",
      InformationFirst: "Arabanı seç",
      InformationFirstP: "Tüm sürüş ihtiyaçlarınız için geniş araba yelpazesi",
      InformationSecond: "Müşteri Hizmetleri",
      InformationSecondP:
        "Herhangi bir sorunda deneyimli arkadaşlarımızın yardımı hizmetinizde",
      InformationThird: "Araç Memnuniyeti",
      InformationThirdP: "Araçlarımızın bakımları zamanında yapılmaktadır",
      /*FAQ*/
      FAQSSS: "SSS",
      FAQSSS2: "Sıkça Sorulan Sorular",
      FAQSSS3:
        "Araç Kiralama Rezervasyon Süreci Hakkında Sıkça Sorulan Sorular",
      FAQS1: "1. Araç kiralamak için gerekli gereksinimler nelerdir?",
      FAQS1Answer:
        "Araç Kiralamak için en az 21 yaşını doldurmuş olmanız ve en az 1 yıllık B grubu ehliyet sahibi olmanız gerekmektedir.",
      FAQS2: "2. Araç kiralama süreleri nelerdir?",
      FAQS2Answer:
        "Araç kiralama minimum süresi günlük kiralamalarda 24 saat, aylık kiralamalarda ise 30 gündür.",
      FAQS3: "3. Araç iade süresi nedir?",
      FAQS3Answer:
        "Araçların iadesinde yaşanan gecikmelerde, sadece 59 dakikaya kadar opsiyon uygulanır.",
      FAQS4: "4. Rezervasyon değişimi yapabilir miyim?",
      FAQS4Answer:
        "Rezervasyon tarihinizden önce planlarınızda değişik olursa , çağrı merkezini arayabilir veya Canlı Destek üzerinden anında iletişim kurabilirsiniz. Rezervasyon değişikliği için talebinizi iletirken lütfen rezervasyon kodunuzu veya isim soyisim irtibat numaranızı bildiriniz.",
      FAQS5: "5. Rezervasyon oluşturduğum aracı kesinlikle alabiliyor muyum?",
      FAQS5Answer:
        "Rezervasyon oluşturduğunuz aracı alabilirsiniz, fakat araçlarda oluşan mekanik veya fiziksel hasarlanmalardan kaynaklı problemlerde size sunulan aracın muadili sizlere sunulur ve teslim edilir.",
      /*About Us */
      AboutFirstH: "Biz Kimiz?",
      AboutFirstP:
        "Rent A Car, müşterilerine güvenilir, konforlu ve özel bir araç kiralama deneyimi sunan öncü bir şirkettir. Rent A Car sektördeki uzmanlığı ve müşteri odaklı hizmet anlayışıyla bilinir.",
      AboutFirstPContinue:
        "Sektörde lider bir araç kiralama markası olma hedefiyle, müşteri beklentilerini aşan kaliteli hizmetler sunarak, sürekli gelişmeyi ve yeniliği benimsemekteyiz. Rent A Car, müşteri odaklı yaklaşımıyla sektörde öncü olmayı sürdürecek ve müşterilerine değer katmaya devam edecektir.",
      AboutSecondH: "Gezini Şimdi Planla",
      AboutSecondP:
        "Müşteri memnuniyetini en üst düzeye çıkarmak ve her bir müşterimize özel bir araç kiralama deneyimi sunmak için buradayız. Rent A Car, her müşterisinin ihtiyaçlarına özel çözümler sunarak, seyahatlerini daha keyifli ve sorunsuz hale getirmeyi amaçlamaktadır.",
      AboutSecondL1: "Güvenilir ve profesyonel hizmet anlayışı",
      AboutSecondL2: "Geniş ve çeşitli araç filosu",
      AboutSecondL3: "Rekabetçi fiyatlar ve esnek ödeme seçenekleri",
      AboutSceondL4: "7/24 müşteri destek hizmeti",
      /*List Of Cars*/
      ListOfCarsDays: "Günlük",
      ListOfCarsManuel: "Manuel",
      ListOfCarsOtomatik: "Otomatik",
      ListOfCarsDiesel: "Dizel",
      ListOfCarsGasoline: "Benzin",
      ListOfCarsButton: "Sürüşe Çık",
      /*Footer */
      FooterFirstContainerP:
        "İhtiyaçlarınızı karşılayacak geniş filomuz ve uygun fiyatlarımızla istediğin aracı kirala , gezini şimdi planla!",
      FooterCompany: "Şirket",
      FooterAboutUs: "Hakkımızda",
      FooterWorkingHour: "Çalışma Saatleri",
      FooterPazartesi: "Pazartesi",
      FooterSalı: "Salı",
      FooterÇarşamba: "Çarşamba",
      FooterPerşembe: "Perşembe",
      FooterCuma: "Cuma",
      FooterCumartesi: "Cumartesi",
      FooterSubscribe: "Abonelik",
      FooterSubscribeP:
        "Email adresini yazıp indirim ve güncellemelerin bilgilerini mail olarak alabilirsin.",
      FooterSubscribeButton: "Gönder",
      /*Crew*/
      CrewFirst: "Satış Sorumlusu",
      CrewSecond: "Güvenlik",
      CrewThird: "Müşteri Hizmetleri",
      CrewFour: "Vezne",
      CrewFive: "Sekreter",
      /*Contact*/
      ContactH: "Ek bilgiyemi ihtiyacınız var?",
      ContactP:
        "15 yıldan daha fazla deneyimimizle yanınızdayız. Türkiye'nin en güvenilir en uygun fiyatlı araba kiralama firması.",
      ContactPlaceholderFirst: "Adınız",
      ContactPlaceholderSecond: "Açıklamanız",
      ContactButton: "Gönder",
      /*Login form*/
      LoginTcKimlik: "TC Kimlik No",
      LoginŞifre: "Şifre",
      LoginButton: "GİRİŞ",
      /*Sign Up Form*/
      SignUpTcKimlik: "TC Kimlik No",
      SignUpAd: "Ad",
      SignUpSoyad: "Soyad",
      SignUpŞifre: "Şifre",
      SignUpButton: "KAYDOL",
    },
  },
  en: {
    translation: {
      /*Header*/
      HeaderHome: "Home",
      HeaderAboutUs: "About Us",
      HeaderCarModels: "Vehicle Models",
      HeaderCrew: "Our Team",
      HeaderContact: "Contact",
      HeaderSignup: "Register",
      HeaderLogin: "Login",
      /*Home Page*/
      HomeHeroP1: "Plan Your Trip Now",
      HomeHeroP2Span: "Save",
      HomeHeroP2: "big with our car rental!",
      HomeHeroSelectCarButton: "Select Car",
      HomeHeroDetailsButton: "Details",
      /*Rent Car Form */
      FormSelectCar: "Select your car",
      FormSalePlace: "Pick-up",
      FormBackPlace: "Drop-off",
      FormBuyDate: "Pick-up date",
      FormReturnDate: "Drop-off date",
      FormButton: "Search",
      /*İnformation*/
      InformationHead: "Fast & easy car rental",
      InformationFirst: "Select Car",
      InformationFirstP: "Wide range of cars for all your driving needs",
      InformationSecond: "Customer Service",
      InformationSecondP:
        "In case of any problem, the help of our experienced friends is at your service",
      InformationThird: "Vehicle Comfort",
      InformationThirdP: "Our vehicles are maintained on time",
      /*FAQ*/
      FAQSSS: "FAQ",
      FAQSSS2: "Frequently Asked Questions",
      FAQSSS3:
        "Frequently Asked Questions About Car Rental Reservation Process",
      FAQS1: "1. What are the requirements for renting a car?",
      FAQS1Answer:
        "In order to rent a car, you must be at least 21 years old and have a B group driver's license for at least 1 year.",
      FAQS2: "2. What are the car rental periods?",
      FAQS2Answer:
        "The minimum car rental period is 24 hours for daily rentals and 30 days for monthly rentals.",
      FAQS3: "3. What is the vehicle return period?",
      FAQS3Answer:
        "For delays in the return of vehicles, an option applies only up to 59 minutes.",
      FAQS4: "4. Can I change the reservation?",
      FAQS4Answer:
        "If your plans change before your reservation date, you can call the call center or communicate instantly via Live Support. When submitting your request for a reservation change, please provide your reservation code or name and surname contact number.",
      FAQS5:
        "5. Can I definitely pick up the vehicle for which I created a reservation?",
      FAQS5Answer:
        "You can get the vehicle you have booked, but in case of problems caused by mechanical or physical damage to the vehicles, the equivalent of the vehicle offered to you is offered and delivered to you.",
      /*About Us */
      AboutFirstH: "Who We Are?",
      AboutFirstP:
        "Rent A Car is a leading company that offers its customers a reliable, comfortable and private car rental experience. Rent A Car is known for its expertise in the sector and customer-oriented service approach.",
      AboutFirstPContinue:
        "With the goal of becoming a leading car rental brand in the sector, we adopt continuous development and innovation by providing quality services that exceed customer expectations. Rent A Car will continue to be a pioneer in the sector with its customer-oriented approach and will continue to add value to its customers.",
      AboutSecondH: "Plan Your Trip Now",
      AboutSecondP:
        "We are here to maximize customer satisfaction and offer each of our customers a special car rental experience. Rent A Car aims to make their travels more enjoyable and hassle-free by offering solutions tailored to the needs of each customer.",
      AboutSecondL1: "Reliable and professional service",
      AboutSecondL2: "Large and diverse vehicle fleet",
      AboutSecondL3: "Competitive prices and flexible payment options",
      AboutSceondL4: "24/7 customer support service",
      /*List Of Cars*/
      ListOfCarsDays: "Daily",
      ListOfCarsManuel: "Manuel",
      ListOfCarsOtomatik: "Automatic",
      ListOfCarsDiesel: "Diesel",
      ListOfCarsGasoline: "Gasoline",
      ListOfCarsButton: "Take a Drive",

      /*Footer */
      FooterFirstContainerP:
        "Rent the car you want with our large fleet and affordable prices to meet your needs and plan your trip now!",
      FooterCompany: "Company",
      FooterAboutUs: "About Us",
      FooterWorkingHour: "Working Hours",
      FooterPazartesi: "Monday",
      FooterSalı: "Tuesday",
      FooterÇarşamba: "Wednesday",
      FooterPerşembe: "Thursday",
      FooterCuma: "Friday",
      FooterCumartesi: "Saturday",
      FooterSubscribe: "Subscription",
      FooterSubscribeP:
        "You can write your e-mail address and receive information about discounts and updates by e-mail.",
      FooterSubscribeButton: "Send",
      /*Crew*/
      CrewFirst: "Sales Manager",
      CrewSecond: "Security",
      CrewThird: "Customer Service",
      CrewFour: "Cashier",
      CrewFive: "Secretary",
      /*Contact*/
      ContactH: "Need more information?",
      ContactP:
        "With more than 15 years of experience, we are at your side. Turkey's most reliable and affordable car rental company.",
      ContactPlaceholderFirst: "Your name",
      ContactPlaceholderSecond: "Description",
      ContactButton: "Send",
      /*Login form*/
      LoginTcKimlik: "ID No",
      LoginŞifre: "Password",
      LoginButton: "LOGİN",
      /*Sign Up Form*/
      SignUpTcKimlik: "ID No",
      SignUpAd: "Name",
      SignUpSoyad: "Surname",
      SignUpŞifre: "Password",
      SignUpButton: "Register",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang"),
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  fallbackLng: "tr",
  resources,
});

export default i18n;
