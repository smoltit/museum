import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Музей-майстерня І.П.Кавалерідзе</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <a href="">Музей-майстерня І.П.Кавалерідзе</a>
        <nav>
          <a href="">Виставки</a>
          <a href="">Експозиція</a>
          <a href="">Про музей</a>
          <a href="">Контакти</a>
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
          <div className={styles.middle}>
            <div className={styles.big}>
              <h2>Підпишіться на наші новини</h2>
              <p>Ми будемо надсилати вам інформацію по нашим новинам, майбутнім виставкам та подіям</p>
            </div>
            <form className={styles.form}>
              <input type="text" placeholder="Ваш e-mail"/>
              <button type="submit">Підписатись</button>
            </form> 
          </div>
        </div>
        <div className={styles.images}></div>
        <div className={styles.middle}>
            <div className={styles.big}>
              <h2>Колекції</h2>
              <p>Експозиція музею-майстерні включає творчий спадок видатного скульптора, режисера та драматурга І.П. Кавалерідзе</p>
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
        </div>




      </main>

      <footer>

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2436.5386847961117!2d30.515964219573465!3d50.45957667960175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce4213fff423%3A0xe569ffc208d1ba47!2z0JzRg9C30LXQuS3QvNCw0LnRgdGC0LXRgNC90Y8g0IYu0J8u0JrQsNCy0LDQu9C10YDRltC00LfQtQ!5e0!3m2!1suk!2sua!4v1689758302667!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
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
