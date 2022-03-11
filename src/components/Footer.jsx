import logoplaix from "../assets/images/logoplaix.png";
import inst from "../assets/images/inst.png";
import facebook from "../assets/images/facebook.png";
import whatsapp from "../assets/images/whatsapp.png";
import telegram from "../assets/images/telegram.png";
import vk from "../assets/images/vk.png";

function Footer() {
  return (
    <div className="footer">
    <footer className="footer-flex">
      <div className="footer-flex__elem1">
        <img src={logoplaix} alt="logoplaix" />
        <p>@Asmpromo, 2016-2022 г</p>
        <p>Пользовательское соглашние</p>
        <p>Политика конфиденциальности</p>
      </div>
      <div className="footer-flex__elem2">
        <p>Мы в соц. сетях</p>
        <img src={inst} alt="instagram icon"></img>
        <img src={vk} alt="vk icon"></img>
        <img src={telegram} alt="telegram icon"></img>
        <img src={whatsapp} alt="whatsapp icon"></img>
        <img src={facebook} alt="facebook icon"></img>
      </div>
      <div className="footer-flex__elem3">
        <p>
          420141, Республика Татарстан, г. Казань, ул. Юлиуса Фучика, д. 78,
          офис 9
        </p>
        <p>+7 (960) 046-42-22</p>
        <p>Ds@asmpromo.ru</p>
      </div>
    </footer>
    </div>
  );
}
export default Footer;