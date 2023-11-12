import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import LanguageSwitch from './components/LanguageSwitch';
import EventSlider from './components/EventSlider';
import { Link } from 'react-scroll';
import eventsData from '../public/eventsData.json'
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  function handleClick(url) {
    router.push(url);
  }
  const [language, setLanguage] = React.useState('ua'); // Initial language state

  // Function to toggle language
  const handleLanguageToggle = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ua' : 'en'));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {language === 'ua' ? 'Музей-майстерня І.П.Кавалерідзе' : 'Kavaleridze Museum-Studio'}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/* <a href=""><Image src="/images/logo.png" layout="fill" objectFit="contain" style={{ padding: '1rem', float: 'left'}}/></a> */}
        <Link to="start" smooth={true} duration={500}>
          <Image src={"/images/lg.png"} width={0} height={0} sizes="7vw" style={{ width: '100%', height: 'auto' }}/>
        </Link>
        <nav className={styles.nav}>
          <Link to="events" smooth={true} duration={500}>
            {language === 'ua' ? 'Події' : 'Events'}
          </Link>
          <Link to="collections" smooth={true} duration={500}>
            {language === 'ua' ? 'Колекції' : 'Collections'}
          </Link>
          <Link to="about-us" smooth={true} duration={500}>
            {language === 'ua' ? 'Про музей' : 'About us'}
          </Link>
          <Link to="tours" smooth={true} duration={500}>
            {language === 'ua' ? 'Екскурсії' : 'Tours'}
          </Link>
          <Link to="help" smooth={true} duration={500}>
            {language === 'ua' ? 'Допомогти' : 'Help us'}
          </Link>
        </nav>
        <div className={styles.right}>
          <div className={styles.time}>
            <p>{language === 'ua' ? 'Вівторок-Неділя 11:00 — 18:00' : 'Tuesday to Sunday 11:00 — 18:00'}</p>
            {/* <p>{language === 'ua' ? 'Понеділок — вихідний' : 'Closed on Monday'}</p> */}
            <p>{language === 'ua' ? 'Каса 11:00 — 17:00' : 'Ticket Office 11:00 — 17:00'}</p>
          </div>
          <LanguageSwitch onLanguageChange={handleLanguageToggle} />
        </div>
      </header>



      <main id='start'>
        <div className={styles.bg}></div>
        <div className={styles.starttext}>
          <div>
            <h1>
              {language === 'ua' ? 'Музей-майстерня І. П. Кавалерідзе' : 'Museum-Studio of I. P. Kavaleridze'}
            </h1>
            <p>
              {language === 'ua' ? 'Дивовижний світ Івана Петровича Кавалерідзе: Історія, Мистецтво, Незабутнє!' : 'The amazing world of History, Art and the Unforgettable by Ivan Petrovych Kavaleridze!'}
            </p>
          </div>
        </div>
        <div className={styles.cnt}>
          <div className={`${styles.info} ${styles.middle}`}>
            <div className={styles.in}>
              <h2>
                {language === 'ua' ? 'Інформація для відвідувачів' : 'Info for Visitors'}
              </h2>
              <p>{language === 'ua' ? 'Андріївський узвіз 21, Київ' : 'Andriivsky Uzviz 21, Kyiv'}</p>
              <div className={styles.time_in}>
                <div className={styles.time_info}>
                  <p>{language === 'ua' ? 'Вівторок-неділя:' : 'Tuesday-Sunday:'}</p>
                  <p>11:00 — 18:00</p>
                </div>
                <div className={styles.time_info}>
                  <p>{language === 'ua' ? 'Покупка квитків:' : 'Monday:'}</p>
                  <p>11:00 — 17:00</p>
                </div>
                <div className={styles.time_info}>
                  <p>{language === 'ua' ? 'Понеділок:' : 'Monday:'}</p>
                  <p>{language === 'ua' ? 'вихідний' : 'closed'}</p>
                </div>
              </div>
            </div>
            <div className={styles.prices}>
              <div>
                <p>
                  {language === 'ua' ? 'Вхідний квиток для громадян України' : 'Admission for citizens of Ukraine'} — 50 ₴
                </p>
                <p>
                  {language === 'ua' ? 'Вхідний квиток для іноземних відвідувачів' : 'Admission for foreign visitors'} — 50 ₴
                </p>
                <p>
                  {language === 'ua' ? 'Вхідний квиток для пільгових категорій громадян (діти, учні, студенти та пенсіонери)' : 'Reduced admission for categories (children, students and senior citizens)'}  — 25 ₴
                </p>
                <p>
                  {language === 'ua' ? 'Екскурсія (вхідний квиток купується окремо)' : 'Guided tour (ticket purchased separately)'} — 100 ₴
                </p>
              </div>
              <div>
                <p>{language === 'ua' ? 'Кінозйомка експозицій' : 'Filming of exhibits'} — 200 ₴</p>
                <p>{language === 'ua' ? 'Фотозйомка експозицій' : 'Photography of exhibits'} — 150 ₴</p>
              </div>
            </div>
          </div>
          <div className={styles.space} id="events"></div>
          <div className={styles.news}>
            <div className={styles.middle}>
              <div className={styles.big}>
                <h2>{language === 'ua' ? 'Виставки та події' : 'Exhibitions and Events'}</h2>
                <h3>
                  {language === 'ua'
                    ? 'Музей регулярно організовує мистецькі події. Слідкуйте за оновленнями'
                    : 'The museum regularly organizes artistic events. Stay updated'}
                </h3>
              </div>
              <div className={styles.events}>
                <EventSlider events={eventsData} language={language} />
              </div>

            </div>
          </div>
          <div className={styles.images}></div>
          <div className={styles.space} id="collections"></div>
          <div className={styles.middle}>
            <div className={styles.big}>
              <h2>{language === 'ua' ? 'Колекції' : 'Collections'}</h2>
              <h3>
                {language === 'ua'
                  ? "Експозиція музею-майстерні включає творчий спадок видатного скульптора, режисера та драматурга І.П. Кавалерідзе"
                  : "The museum-mastery exhibition includes the creative legacy of the prominent sculptor, director, and playwright I.P. Kavaleridze"}
              </h3>
              <div className={styles.collections}>
                <div className={styles.third}>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3733-6462-4736-a361-303539663865/9-1.jpg" alt="" />
                    <h3>{language === 'ua' ? 'Скульптура заходу' : 'Western Sculpture'}</h3>
                    <p>
                      {language === 'ua'
                        ? "Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії"
                        : "Monuments of sculptural art of Japan, China, Korea, and India"}
                    </p>
                  </div>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3266-6130-4935-a339-373735626165/72-2.jpg" alt="" />
                    <h3>{language === 'ua' ? 'Скульптура заходу' : 'Western Sculpture'}</h3>
                    <p>
                      {language === 'ua'
                        ? "Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії"
                        : "Monuments of sculptural art of Japan, China, Korea, and India"}
                    </p>
                  </div>
                </div>
                <div className={styles.third}>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3133-6239-4238-b461-343265313539/65-1.jpg" alt="" />
                    <h3>{language === 'ua' ? 'Скульптура заходу' : 'Western Sculpture'}</h3>
                    <p>
                      {language === 'ua'
                        ? "Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії"
                        : "Monuments of sculptural art of Japan, China, Korea, and India"}
                    </p>
                  </div>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3730-6438-4866-a261-333433656231/__.jpg" alt="" />
                    <h3>{language === 'ua' ? 'Скульптура заходу' : 'Western Sculpture'}</h3>
                    <p>
                      {language === 'ua'
                        ? "Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії"
                        : "Monuments of sculptural art of Japan, China, Korea, and India"}
                    </p>
                  </div>
                </div>
                <div className={styles.third}>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3262-3764-4362-b665-353165636632/DSC_2670_.jpg" alt="" />
                    <h3>{language === 'ua' ? 'Скульптура заходу' : 'Western Sculpture'}</h3>
                    <p>
                      {language === 'ua'
                        ? "Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії"
                        : "Monuments of sculptural art of Japan, China, Korea, and India"}
                    </p>
                  </div>
                  <div className={styles.collection}>
                    <img src="https://static.tildacdn.com/tild3235-6335-4234-b735-643233316365/noroot.png" alt="" />
                    <h3>{language === 'ua' ? 'Скульптура заходу' : 'Western Sculpture'}</h3>
                    <p>
                      {language === 'ua'
                        ? "Пам'ятники скульптурного мистецтва Японії, Китаю, Кореї та Індії"
                        : "Monuments of sculptural art of Japan, China, Korea, and India"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.space} id="about-us"></div>
          <div className={styles.news}>
            <div className={styles.middle}>

            <div className={styles.big}>
              <h2>{language === 'ua' ? 'Про музей' : 'About the Museum'}</h2>
              <h3>
                {language === 'ua'
                  ? 'Детальну історію музею та його експозиції ви можете дізнатись на нашій оглядовій екскурсії'
                  : 'You can learn the detailed history of the museum and its exhibition on our guided tour'}
              </h3>
              <p>
                {language === 'ua'
                  ? 'Музей-майстерня І.П Кавалерідзе було засновано у 1993-му році у пам\'ятці архітектури, містобудування та історії ХІХ століття, що був спроектований архітектором Володимиром Ніколаєвим для тодішнього настоятеля Андріївської церкви, та, де у 1911 році Іван Кавалерідзе знімав кімнату, коли працював над проектом пам\'ятнику княгині Ользі, Андрію Первозваному та слов\'янським просвітителям Кирилло і Мефодію. Цей музей є одним з найвідоміших художніх об\'єктів на Андріївському узвозі.'
                  : 'The I.P. Kavaleridze Museum-Workshop was founded in 1993 in an architectural monument, urban planning, and history of the 19th century, which was designed by architect Volodymyr Nikolaiev for the then-abbot of the Andriyivska Church, where in 1911 Ivan Kavaleridze had a room when he worked on the project of the monument to Princess Olha, Andrii Pervozvannyi, and the Slavic enlighteners Cyril and Methodius. This museum is one of the most famous art objects on Andriyivskyy Descent.'}
              </p>
              <p>
                {language === 'ua'
                  ? 'При музеї існує парк скульптур, де виставлено декілька робіт скульптора: оригінал першого монументу Т. Шевченку для м. Ромни (1918), рештки оригіналу першого монументу княгині Ользі, що був обезголовлений більшовиками.'
                  : 'The museum has a sculpture park where several works of the sculptor are exhibited: the original of the first monument to T. Shevchenko for the city of Romny (1918), the remains of the original of the first monument to Princess Olha, which was beheaded by Bolsheviks.'}
              </p>
              <p>
                {language === 'ua'
                  ? 'Протягом двадцяти дев\'яти років музей-майстерня організовує виставки та веде просвітницьку діяльність по історії життя Івана Кавалерідзе.'
                  : 'For twenty-nine years, the museum-workshop has organized exhibitions and conducted educational activities on the life history of Ivan Kavaleridze.'}
              </p>
            </div>

            </div> 
            <div className={styles.space} id="tours"></div>
          </div>
          <div className={styles.middle}>
            <div className={styles.big}>
              <h2>{language === 'ua' ? 'Екскурсії' : 'Tours'}</h2>
              <h3>
                {language === 'ua'
                  ? 'В музеї проводяться екскурсії по скульптурно-парковому ансамблю, експозиціям та виставкам.'
                  : 'Guided tours are available in the museum, covering the sculpture park ensemble, exhibitions, and displays.'}
              </h3>
            </div>
            <a href="" target="_blank" className={styles.tourLink}>
              <div className={styles.tour}>
                <Image src="/images/tour0.jpeg"  width="1000" height="1000" />
                <div className={styles.tourtext}>
                  <h3>{language === 'ua' ? 'Оглядова екскурсія по музею' : 'Museum Overview Tour'}</h3>
                  <p>
                    {language === 'ua'
                      ? 'Екскурсія по постійній експозиції музею. Інтер\'єри будинку ХІХ століття, особистий кабінет скульптора, станкові скульптури та перехідні моделі роботи Івана Кавалерідзе.'
                      : 'Guided tour of the museum\'s permanent exhibition. Interiors of the 19th-century building, the sculptor\'s personal studio, studio sculptures, and transitional models of Ivan Kavaleridze\'s works.'}
                  </p>
                  <p>{language === 'ua' ? 'Тривалість екскурсії: 45 хвилин' : 'Duration: 45 minutes'}</p>
                  <p>{language === 'ua' ? 'Вартість: 100 ₴' : 'Cost: 100 ₴'}</p>
                </div>
              </div>
            </a>
            <a href="" target="_blank" className={styles.tourLink}>
              <div className={styles.tour}>
              <Image src="/images/tour1.png"  width="1000" height="1000" />

                <div className={styles.tourtext}>
                  <h3>{language === 'ua' ? 'Скульптура в залах Музею' : 'Sculpture in the Museum Halls'}</h3>
                  <p>
                    {language === 'ua'
                      ? 'Колекція портретної, історичної та анімалістичної скульптури з різних періодів життя Івана Кавалерідзе.'
                      : 'Collection of portrait, historical, and animalistic sculpture from various periods of Ivan Kavaleridze\'s life.'}
                  </p>
                  <p>{language === 'ua' ? 'Тривалість екскурсії: 90 хвилин' : 'Duration: 90 minutes'}</p>
                  <p>{language === 'ua' ? 'Вартість: 150 ₴' : 'Cost: 150 ₴'}</p>
                </div>
              </div>
            </a>
            <a href="" target="_blank" className={styles.tourLink}>
              <div className={styles.tour}>
              <Image src="/images/tour2.png"  width="1000" height="1000" />

                <div className={styles.tourtext}>
                  <h3>{language === 'ua' ? 'Скульптурно-парковий ансамбль музею' : 'Sculpture Park Ensemble Tour'}</h3>
                  <p>
                    {language === 'ua'
                      ? 'Архітектура, скульптура та ландшафт паркової частини музею-майстерні І.П. Кавалерідзе.'
                      : 'Architecture, sculpture, and landscape of the sculpture park ensemble at the I.P. Kavaleridze Museum-Workshop.'}
                  </p>
                  <p>{language === 'ua' ? 'Тривалість екскурсії: 30 хвилин' : 'Duration: 30 minutes'}</p>
                  <p>{language === 'ua' ? 'Вартість: 150 ₴' : 'Cost: 150 ₴'}</p>
                </div>
              </div>
            </a>
          </div>

            <div className={styles.space} id="help"></div>
          <div className={styles.help}>
            <div className={styles.middle}>
              <div className={styles.big}>
                <h2>{language === 'ua' ? 'Допомогти музею' : 'Support the Museum'}</h2>
                <p>
                  {language === 'ua'
                    ? 'Ваша підтримка допомагає Музею-майстерні І.П.Кавалерідзе зберігати та примножувати художні надбання багатьох поколінь, організовувати культурні події для вас і ваших дітей, а також давати змогу тисячам відвідувачів щодня відчувати силу мистецтва. Дякуємо за вашу підтримку.'
                    : 'Your support helps the I.P. Kavaleridze Museum-Workshop preserve and expand the artistic heritage of many generations, organize cultural events for you and your children, and allow thousands of visitors to experience the power of art every day. Thank you for your support.'}
                </p>
                <p>
                  {language === 'ua'
                    ? 'Для друзів музею ми розробили багато програм підтримки нашої інституції. Оберіть зручний спосіб підтримувати музей із запропонованих нижче або зв’яжіться з нами і ми розробимо програму спеціально для вас.'
                    : 'For friends of the museum, we have developed various support programs for our institution. Choose a convenient way to support the museum from the options below or contact us, and we will create a program specifically for you.'}
                </p>
              </div>
              <div className={styles.support}>
                <h3>{language === 'ua' ? 'Хочу підтримати музей!' : 'I Want to Support the Museum!'}</h3>
                <p>
                  {language === 'ua'
                    ? 'Ви можете зробити благодійний внесок будь-якого розміру'
                    : 'You can make a charitable contribution of any amount'}
                </p>
                <a href="" target="_blank">
                  {language === 'ua' ? 'Зробити внесок' : 'Make a Contribution'}
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <div className={styles.contactsContainer}>
          <iframe className={styles.mapBackground} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.99839435694!2d30.514499511697625!3d50.45975458657587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce4213fff423%3A0xe569ffc208d1ba47!2z0JzRg9C30LXQuS3QvNCw0LnRgdGC0LXRgNC90Y8g0IYu0J8u0JrQsNCy0LDQu9C10YDRltC00LfQtQ!5e0!3m2!1suk!2sua" width="100%" height="600px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className={styles.contacts}>
            <h2>{language === 'ua' ? 'Контакти' : 'Contacts'}</h2>
            <div>
              <p>+380 44 425 3397</p>
              <a href="mailto:kavaleridzemuseum@gmail.com">kavaleridzemuseum@gmail.com</a>
              <p>{language === 'ua' ? 'Андріївський узвіз 21, Київ' : 'Andriivskyi Uzviz 21, Kyiv'}</p>
            </div>
              <h3>{language === 'ua' ? 'Години роботи' : 'Working hours'}</h3>
            <div>
              <p>{language === 'ua' ? 'Вівторок-неділя' : 'Tuesday-Sunday'}</p>
              <p>11:00 — 18:00</p>
              <p>{language === 'ua' ? 'Понеділок' : 'Monday'}</p> 
              <p>{language === 'ua' ? 'вихідний' : 'closed'}</p>
            </div>
            <a href="https://www.facebook.com/ikavaleridzemuseum/about/?ref=page_internal" target="_blank">{language === 'ua' ? 'Ми у Фейсбуці' : 'Find us on Facebook'}</a>
            <a href="https://www.instagram.com/kavaleridzemuseum/" target="_blank">{language === 'ua' ? 'Ми у Інстаграмі' : 'Find us on Instagram'}</a>
          </div>
        </div>
      </footer>
      
      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          max-width: 100%;
          overflow-x: hidden;
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
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          box-shadow: 0 0 8px grey;
          background-color: white;
          z-index: 1000;
          font-weight: 300;
        }
        label {
          color: blue;
        }
        label:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
