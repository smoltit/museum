import Head from 'next/head';
import styles from '../styles/Home.module.css';
import imgg from "../public/tour0.jpeg";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  function handleClick(url) {
    router.push(url);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Музей-майстерня І.П.Кавалерідзе</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <a href="">Музей-майстерня І.П.Кавалерідзе</a>
        <nav>
          <a href="#events">Події</a>
          <a href="#collections">Колекції</a>
          <a href="#about-us">Про музей</a>
          <a href="#tours">Екскурсії</a>
          <a href="#help">Допомогти</a>
          <a href="#contacts">Контакти</a>
        </nav>
        <div className={styles.time}>
          <p>Вівторок-Неділя 11:00 — 18:00</p>
          {/* <p>Понеділок — вихідний</p> */}
          <p>Каса 11:00 — 17:00</p>
        </div>
      </header>

      <main>
        <div className={styles.bg}></div>
        <div className={`${styles.info} ${styles.middle}`}>
          <div className={styles.in}>
            <h2>Інформація для відвідувачів</h2>
            <p>Андріївський узвіз, б. 21, Київ</p>
            <div>
              <p>Вівторок-неділя</p>
              <p>11:00 — 18:00</p>
              <p>Понеділок</p> 
              <p>вихідний</p>
            </div>
          </div>
          <div className={styles.prices}>
            <div>
              <p>Вхідний квиток для громадян України — 50 ₴</p>
              <p>Вхідний квиток для іноземних відвідувачів — 50 ₴</p>
              <p>Вхідний квиток для пільгових категорій громадян (діти, учні, студенти та пенсіонери) — 25 ₴</p>
              <p>Екскурсія (вхідний квиток купується окремо) — 100 ₴</p>
            </div>
            <div>
              <p>Кінозйомка експозицій — 200 ₴</p>
              <p>Фотозйомка експозицій — 150 ₴</p>
            </div>
          </div>
        </div>
        <div className={styles.space} id="events"></div>
        <div className={styles.news}>
          <div className={styles.middle}>
            <div className={styles.big}>
              <h2>Виставки та події</h2>
              <p>Музей регулярно організовує мистецькі події. Слідкуйте за оновленнями</p>
            </div>
            <div className={styles.events}>
              <div className={styles.event}>
                <img src={"https://static.tildacdn.com/tild3566-3437-4238-b161-663732356564/Depositphotos_291138.jpg"} alt="" />
                <div className={styles.text}>
                  <p className={styles.date}>19 липня — 10 серпня</p>
                  <h3>Плитка Азулежу</h3>             
                  <p>Колекція традиційної португальської плитки XVII – XVIII століть</p>
                </div>
              </div>
              <div className={styles.event}>
                <img src={"https://static.tildacdn.com/tild3566-3437-4238-b161-663732356564/Depositphotos_291138.jpg"} alt="" />
                <div className={styles.text}>
                  <p className={styles.date}>19 липня — 10 серпня</p>
                  <h3>Плитка Азулежу</h3>             
                  <p>Колекція традиційної португальської плитки XVII – XVIII століть</p>
                </div>
              </div>
              <div className={styles.event}>
                <img src={"https://static.tildacdn.com/tild3566-3437-4238-b161-663732356564/Depositphotos_291138.jpg"} alt="" />
                <div className={styles.text}>
                  <p className={styles.date}>19 липня — 10 серпня</p>
                  <h3>Плитка Азулежу</h3>             
                  <p>Колекція традиційної португальської плитки XVII – XVIII століть</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.images}></div>
        <div className={styles.space} id="collections"></div>
          <div className={styles.middle}>
            <div className={styles.big}>
              <h2>Колекції</h2>
              <p>Експозиція музею-майстерні включає творчий спадок видатного скульптора, режисера та драматурга І.П. Кавалерідзе</p>
              <div className={styles.collections}>
                <div className={styles.third}>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3733-6462-4736-a361-303539663865/9-1.jpg" alt="" />
                    <h3>Скульптура заходу</h3>
                    <p>Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії</p>
                  </div>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3266-6130-4935-a339-373735626165/72-2.jpg" alt="" />
                    <h3>Скульптура заходу</h3>
                    <p>Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії</p>
                  </div>
                </div>
                <div className={styles.third}>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3133-6239-4238-b461-343265313539/65-1.jpg" alt="" />
                    <h3>Скульптура заходу</h3>
                    <p>Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії</p>
                  </div>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3730-6438-4866-a261-333433656231/__.jpg" alt="" />
                    <h3>Скульптура заходу</h3>
                    <p>Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії</p>
                  </div>
                </div>
                <div className={styles.third}>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3262-3764-4362-b665-353165636632/DSC_2670_.jpg" alt="" />
                    <h3>Скульптура заходу</h3>
                    <p>Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії</p>
                  </div>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3235-6335-4234-b735-643233316365/noroot.png" alt="" />
                    <h3>Скульптура заходу</h3>
                    <p>Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії</p>
                  </div>
                </div>
              </div>
              <div className={styles.space} id="about-us"></div>
            </div>
          </div>
        <div className={styles.news}>
          <div className={styles.middle}>

            <div className={styles.big}>
              <h2>Про музей</h2>
              <h3>Детальну історію музею та його експозиції ви можете дізнатись на нашій оглядовій екскурсії</h3>
              <p>Музей-майстерня І.П Кавалерідзе було засновано у 1993-му році у пам'ятці архітектури, містобудування та історії ХІХ століття, що був спроектований архітектором Володимиром Ніколаєвим для тодішнього настоятеля Андріївської церкви, та, де у 1911 році Іван Кавалерідзе знімав кімнату, коли працював над проектом пам'ятнику княгині Ользі, Андрію Первозваному та слов'янським просвітителям Кирилло і Мефодію. Цей музей є одним з найвідоміших художніх об'єктів на Андріївському узвозі.</p>
              <p>При музеї існує парк скульптур, де виставлено декілька робіт скульптора: оригінал першого монументу Т. Шевченку для м. Ромни (1918), рештки оригіналу першого монументу княгині Ользі, що був обезголовлений більшовиками.</p>
              <p>Протягом двадцяти дев'яти років музей-майстерня організовує виставки та веде просвітницьку діяльність по історії життя Івана Кавалерідзе.</p>
            </div>
          </div> 
          <div className={styles.space} id="tours"></div>
        </div>
        <div className={styles.middle}>
          <div className={styles.big}>
            <h2>Екскурсії</h2>
            <p>В музеї проводяться екскурсії по скульптурно-парковому ансамблю, експозиціям та виставкам.</p>
          </div>
          <a href="" target="_blank">
            <div className={styles.tour}>
              <img src="https://static.tildacdn.com/tild3231-3239-4862-b861-666235646639/FAEB0433-5FED-477C-9.jpg" alt="" />
              <div className={styles.tourtext}>
                <h3>Оглядова екскурсія по музею</h3>
                <p>Екскурсія по постійній експозиції музею. Інтер'єри будинку ХІХ століття, особистий кабінет скульптора, станкові скульптури та перехідні моделі роботи Івана Кавалерідзе.</p>
                <p>Тривалість екскурсії: 45 хвилин</p>
                <p>Вартість: 100 ₴</p>
              </div>
            </div>
          </a>
          <a href="" target="_blank">
            <div className={styles.tour}>
              <img src="https://static.tildacdn.com/tild6332-3732-4138-a165-623037623838/noroot.png" alt="" />
              <div className={styles.tourtext}>
                <h3>Скульптура в залах Музею</h3>
                <p>Колекція портретної, историчної та анімалістичної скульптури з різних періодів життя Івана Кавалерідзе.</p>
                <p>Тривалість екскурсії: 90 хвилин</p>
                <p>Вартість: 150 ₴</p>
              </div>
            </div>
          </a>
          <a href="" target="_blank">
            <div className={styles.tour}>
              <img src="https://static.tildacdn.com/tild3933-3264-4766-b232-356663646538/noroot.png" alt="" />
              <div className={styles.tourtext}>
                <h3>Скульптурно-парковий ансамбль музею</h3>
                <p>Архітектура, скульптура та ландшафт паркової частини музею-майстерні І.П. Кавалерідзе</p>
                <p>Тривалість екскурсії: 30 хвилин</p>
                <p>Вартість: 150 ₴</p>
              </div>
            </div>
          </a>
          <div className={styles.space} id="help"></div>
          
        </div>
        <div className={styles.help}>
          <div className={styles.middle}>
            <div className={styles.big}>
              <h2>Допомогти музею</h2>
              <p>Ваша підтримка допомагає Музею-майстерні І.П.Кавалерідзе зберігати та примножувати художні надбання багатьох поколінь, організовувати культурні події для вас і ваших дітей, а також давати змогу тисячам відвідувачів щодня відчувати силу мистецтва. Дякуємо за вашу підтримку.</p>
              <p>Для друзів музею ми розробили багато програм підтримки нашої інституції. Оберіть зручний спосіб підтримувати музей із запропонованих нижче або зв’яжіться з нами і ми розробимо програму спеціально для вас.</p>
            </div>
            <div className={styles.support}>
              <h3>Хочу підтримати музей!</h3>
              <p>Ви можете зробити благодійний внесок будь-якого розміру</p>
              <a href="" target="_blank">Зробити внесок</a>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <div id="contacts" className={styles.contactsContainer}>
          <iframe className={styles.mapBackground} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.99839435694!2d30.514499511697625!3d50.45975458657587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce4213fff423%3A0xe569ffc208d1ba47!2z0JzRg9C30LXQuS3QvNCw0LnRgdGC0LXRgNC90Y8g0IYu0J8u0JrQsNCy0LDQu9C10YDRltC00LfQtQ!5e0!3m2!1suk!2sua!4v1690404695440!5m2!1suk!2sua" width="100%" height="600px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className={styles.contacts}>
            <h2>Контакти</h2>
            <div>
              <p>044 425 3397</p>
              <a href="mailto:kavaleridzemuseum@gmail.com">kavaleridzemuseum@gmail.com</a>
              <p>Андріївський узвіз, б. 21, Київ</p>
              <p>Години роботи</p>
            </div>
            <div>
                <p>Вівторок-неділя</p>
                <p>11:00 — 18:00</p>
                <p>Понеділок</p> 
                <p>вихідний</p>
              </div>
              <a href="https://www.facebook.com/ikavaleridzemuseum/about/?ref=page_internal">Ми у Фейсбуці</a>
              <a href="https://www.instagram.com/kavaleridzemuseum/">Ми у Інстаграмі</a>
          </div>
        </div>
      </footer>
      
      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          width: 100%;
        }
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        a {
          color: inherit;
          text-decoration: none;
        }

      `}</style>

      <style jsx>{`
        header {
          width: 100%;
          padding: 1.3rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          box-shadow: 0 0 5px grey;
          background-color: white;
          z-index: 1000;
        }
        header nav a {
          padding: 1rem 1.5rem;
        }
      `}</style>
    </div>
  )
}
