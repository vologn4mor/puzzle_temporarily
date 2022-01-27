import React from "react";
import "./Temporarily.css";
import tg from "./img/tg.svg";
import fb from "./img/fb.svg";
import inst from "./img/inst.svg";
import be from "./img/be.svg";
import ua from "./img/ua.svg";
import ru from "./img/ru.svg";
import arrow from "./img/arrow.svg";
import ContactUs from "./ContactUs";
import ContactUsBlue from "./ContactUsBlue";
import cancelButtonX from "./img/cancelButtonX.svg";

document.body.addEventListener("click", function (event) {
  let contactUsBlue = event.target.closest(".contact_us");
  let contactUs = event.target.closest(".contact_us_blue");
  let form = event.target.closest("form");
  console.log(event.target.closest(".contact_us"));
  if (!form && !contactUs && !contactUsBlue) {
    document.getElementById("temporarily-form").style.display = "none";
  } else {
    return;
  }
});

export default () => {
  let display;
  let form = document.getElementById("temporarily-form");
  let container = document.getElementById("container");

  function btnOpenForm() {
    display = getComputedStyle(
      document.getElementById("temporarily-form")
    ).display;
    container = document.getElementById("container");
    form = document.getElementById("temporarily-form");
    if (display === "none") {
      form.style.opacity = "1";
      form.style.display = "flex";
      form.style.boxShadow = " 0 0 10px rgba(0,0,0,0.5)";
    } else {
      form.style.display = "none";
    }
  }

  function cancelButton() {
    document.getElementById("temporarily-form").style.display = "none";
  }

  function openSelect() {
    let list = document.getElementById("countrySelect").nextElementSibling;
    let listDisplay = getComputedStyle(
      document.getElementById("countrySelect").nextElementSibling
    ).display;

    if (listDisplay === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }

  function selectRu() {
    document.getElementById("imgSelectCountry").src = ru;
    document.getElementById("pSelectCountry").innerText = "+7";
    document.getElementById("countrySelect").nextElementSibling.style.display =
      "none";
  }

  function selectUa() {
    document.getElementById("imgSelectCountry").src = ua;
    document.getElementById("pSelectCountry").innerText = "+380";
    document.getElementById("countrySelect").nextElementSibling.style.display =
      "none";
  }

  return (
    <>
      <div className="temporarily-container" id="container">
        <div className="temporarily-circle-up"></div>
        <div className="temporarily-design_and_development">
          <div className="temporarily-design_and_development_left">
            <div className="temporarily-design_and_development_left_puzzle_group">
              <p>Puzzle Group</p>
              <div className="temporarily-design_and_development_left_div">
                <p className="temporarily-design_and_development_left_p">
                  Сайт находится в разработке
                </p>
                <div className="temporarily-design_and_development_left_info">
                  i
                </div>
              </div>
            </div>
            <div className="temporarily-design_and_development_left">
              {/* <div className="temporarily-design_and_development_left_div">
              <p className="temporarily-design_and_development_left_p">
                Сайт находится в разработке
              </p>
              <div className="temporarily-design_and_development_left_info">
                i
              </div>
            </div> */}
            </div>
            <div className="temporarily-design_and_development_left-your_business">
              <p>
                Выведем ваш <br></br> бизнес в онлайн
              </p>
              <div
                className="temporarily-design_and_development_left-your_business__contact_us button_contact-us contact_us_blue"
                onClick={btnOpenForm}
              >
                <ContactUsBlue />
              </div>
            </div>
            <div className="temporarily-design_and_development_left__block">
              <div className="temporarily-design_and_development_left__block-main">
                <div className="temporarily-design_and_development_left__block_name">
                  <p>интернет-маркетинг</p>
                </div>
                <div className="temporarily-design_and_development_left__block_text">
                  <p>
                    Мы популяризуем ваш проект на рынке, поможем с
                    позиционированием и философией бренда, повысим узнаваемость
                    и количество продаж.
                  </p>
                </div>
              </div>
            </div>
            <div className="temporarily-design_and_development_left__block">
              <div className="temporarily-design_and_development_left__block-main">
                <div className="temporarily-design_and_development_left__block_name">
                  <p>дизайн</p>
                </div>
                <div className="temporarily-design_and_development_left__block_text">
                  <p>
                    Создадим функциональный и понятный пользователю дизайн:
                    учтем тренды, ваши пожелания и потребности целевой
                    аудитории.
                  </p>
                </div>
              </div>
            </div>
            <div className="temporarily-design_and_development_left__block">
              <div className="temporarily-design_and_development_left__block-main">
                <div className="temporarily-design_and_development_left__block_name">
                  <p>разработка веб-сайтов</p>
                </div>
                <div className="temporarily-design_and_development_left__block_text">
                  <p>
                    Выведем ваш бизнес на новый уровень: создадим корпоративный
                    сайт, лендинг, веб-сайт, которые помогут достичь
                    поставленных целей.
                  </p>
                </div>
              </div>
            </div>
            <div className="temporarily-design_and_development_left__block">
              <div className="temporarily-design_and_development_left__block-main">
                <div className="temporarily-design_and_development_left__block_name">
                  <p>диджитал-решения</p>
                </div>
                <div className="temporarily-design_and_development_left__block_text">
                  <p>
                    Совместно с вами построим и реализуем стратегию развития
                    бизнеса. Не будем продавать ненужные услуги, ведь мы
                    нацелены на результат.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="temporarily-design_and_development_left__down_circle contact_us_blue"
              onClick={btnOpenForm}
            >
              <ContactUsBlue />
            </div>
            <div className="temporarily-circle-down"></div>
          </div>
          <div className="temporarily-design_and_development_right">
            <div className="temporarily-design_and_development_right__design_and_development">
              <p>дизайн&nbsp;разработка</p>
            </div>
          </div>
        </div>
        <div className="temporarily-promotion">
          <div className="temporarily-promotion-up">
            <div className="temporarily-promotion-up-left">
              <div className="temporarily-promotion-up-left-promotion">
                <p>продвижение</p>
              </div>
            </div>
            <div className="temporarily-promotion-up-main">
              <p className="temporarily-promotion-up-main-contacts">Контакты</p>
              <div className="temporarily-promotion-up-main-contacts_block">
                <div>
                  <p className="temporarily-promotion-up-main-name">Данил</p>
                  <p className="temporarily-promotion-up-main-phone">
                    <a href="tel:+380950813798">+380 (95) 081-37-98</a>
                  </p>
                </div>
                <div>
                  <p className="temporarily-promotion-up-main-name">Валерия</p>
                  <p className="temporarily-promotion-up-main-phone">
                    <a href="tel:+380502871417">+380 (50) 287-14-17</a>
                  </p>
                </div>
                <div
                  onClick={btnOpenForm}
                  className="temporarily-promotion-up-main-contact-us contact_us"
                >
                  <ContactUs />
                </div>
              </div>
            </div>
            <div className="temporarily-promotion-up-right">
              <a href="#" className="temporarily-promotion-up-right-tg">
                <div className="temporarily-promotion-up-right-link-image">
                  <img src={tg}></img>
                </div>
              </a>
              <a href="#" className="temporarily-promotion-up-right-inst">
                <img src={inst}></img>
              </a>
              <a href="#" className="temporarily-promotion-up-right-fb">
                <img src={fb}></img>
              </a>
              <a href="#" className="temporarily-promotion-up-right-be">
                <img src={be}></img>
              </a>
            </div>
          </div>
          <div className="temporarily-promotion-down">
            <div className="temporarily-promotion-down__site_in_developing">
              {/* <p>Сайт&nbsp;находится&nbsp;в&nbsp;разработке</p> */}
              {/* <p>Сайт находится в разработке</p>
              <div>i</div> */}

              <p className="temporarily-design_and_development_left_p">
                Сайт находится в разработке
              </p>
              <div className="temporarily-design_and_development_left_info">
                i
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="temporarily-form" id="temporarily-form">
        <form>
          <div className="temporarily-form-get_consultation">
            <p>
              получить<br></br>консультацию
            </p>
          </div>
          <input
            className="temporarily-form_name"
            placeholder="КАК ВАС ЗОВУТ?"
          ></input>
          <div className="temporarily-form_phone-block">
            <div className="temporarily-form_phone-block__select_country">
              <div
                className="temporarily-form_phone-block__select_country_selected"
                id="countrySelect"
                onClick={openSelect}
              >
                <img src={ua} id="imgSelectCountry"></img>
                <img src={arrow}></img>
              </div>
              <div className="temporarily-form_phone-block__select_country_option">
                <div
                  className="temporarily-form_phone-block__select_country_option__block"
                  onClick={selectUa}
                >
                  <img src={ua}></img>
                  <p>UA</p>
                </div>
                <div
                  className="temporarily-form_phone-block__select_country_option__block"
                  onClick={selectRu}
                >
                  <img src={ru}></img>
                  <p>RU</p>
                </div>
              </div>
            </div>
            <p id="pSelectCountry">+380</p>
            <input
              className="temporarily-form_phone"
              placeholder="(XX) XXX-XX-XX"
            ></input>
          </div>
          <input
            className="temporarily-form_email"
            placeholder="E-MAIL"
          ></input>
          <button
            className="temporarily-form_email-submit_btn"
            onClick={cancelButton}
          >
            <p>получить консультацию</p>
          </button>
        </form>
        <div className="temporarily-form-cancel" onClick={cancelButton}>
          <img src={cancelButtonX}></img>
        </div>
      </div>
    </>
  );
};
