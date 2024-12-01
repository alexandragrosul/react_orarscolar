import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: {
        finPlus: {
          title: "Finance Management Mini-Apps",
          description:
            "Welcome to the page where you can explore helpful mini-apps designed to optimize your financial decisions. Calculate loans, plan budgets, analyze investments, and understand taxes with ease. These tools are intuitive and user-friendly.",
        },
        schoolTitle: {
          info: "All Schools here",
        },
        schoolInfo: {
          info: "At escoala.md, both public and private schools, lyceums, and gymnasiums are featured. Learn all about secondary education — how to choose a school, where the best preparation for a bachelor's degree is provided, what study profiles are available in upper classes, how to enroll in leading specialized schools. The best schools in Moldova, the school ranking of the Ministry of Education of Moldova, in which schools the winners of the World Olympiad of Schoolchildren study — all this information can be found on our website.",
        },
        home: {
          slogan: "Escoala, all the schools of Moldova",
        },
        question: {
          title: "Ask the expert?",
          askButton: "Ask your question",
          dialogTitle: "Add new question",
          dialogContent:
            "Ask about what you don't know how to do from your homework",
        },
        common: {
          cancel: "Cancel",
        },
        trustedTutors: {
          title: "Trusted Tutors",
          description:
            "School is a knowledge community where students and experts help each other to solve the toughest homework assignments.",
        },
        homeSchools: {
          findYourSchool: "Find Your School",
          schoolIsVeryImportant: "School is very important for a child",
          schoolNotInList: "Your school is not in the list?",
          allSchools: "All Schools",
        },
        homeEcology: {
          tutorForYou: "Unlock Your Potential with Our Exceptional Tutors!",
          trustedTutorsForWorryFreeCommunication: `Why choose us?
            1. Expertise
            2. Personalized Approach
            3. Flexible Scheduling
            4. Proven Results`,
          chooseYourTutor: "Choose your tutor",
        },
        homeRepetitor: {
          teachWithEscoala: "Teach with Escoala",
          earnMoneyBySharing:
            "Earn money by sharing your expertise with students. Sign up and start teaching online with Escoala.",
          findNewStudents: "Find new students",
          growYourBusiness: "Grow your business",
          receiveRewardSafely: "Receive your reward safely",
          becomeTutor: "Become a Tutor",
          howOurPlatformWorks: "How our platform works",
        },
        topBar: {
          home: "Home",
          schools: "Schools",
          tutors: "Tutors",
          events: "Events",
          contacts: "Contacts",
          english: "English",
          romania: "Romania",
          answers: "Answers",
          courses: "Courses",
          finPlus: "Fin+",
        },
        schools: {
          title: "Schools",
          searchLabel: "Schools",
          profileLabel: "Profile",
          allProfile: "All",
          generalProfile: "General",
          musicProfile: "Music",
          regionLabel: "Region",
          allRegion: "All",
          chisinauRegion: "Chisinau",
          baltiRegion: "Balti",
          chimisliaRegion: "Chimislia",
        },
        repetitori: {
          title: "Repetitors",
          addRepetitor: "Add Repetitor",
          repetitorLabel: "Repetitor",
          noProfessorsFound: "No professors found",
        },
        repetitorAdd: {
          title: "Add Coaches",
          name: "Name",
          phone: "Phone",
          city: "City",
          material: "Material",
          languages: "Languages",
          description: "Description",
          price: "Price",
          classTime: "Class Time",
          addRepetitor: "Add Repetitor",
          resetForm: "Reset Form",
          errorTitle: "Error",
          errorMessage: "Failed to create a coach. Please try again later.",
        },
        login: {
          loginTitle: "Login",
          emailLabel: "Email Address",
          passwordLabel: "Password",
          loginButton: "Login",
        },
        contacts: {
          title: "Send a Message",
          name: "Name",
          phone: "Phone",
          email: "Email",
          message: "Message",
          sourceLabel: "How did you hear about us?",
          sendButton: "Send Message",
          resetButton: "Reset Form",
          errorTitle: "Error",
          errorMessage:
            "We couldn't receive your message. Please try again later.",
          successTitle: "Success",
          successMessage:
            "Your message has been sent. We will contact you soon.",
        },
      },
    },
    ro: {
      translation: {
        finPlus: {
          title: "Mini-aplicații pentru gestionarea finanțelor",
          description:
            "Bun venit pe pagina unde puteți găsi mini-aplicații utile create pentru a vă optimiza deciziile financiare. Calculați credite, planificați bugetul, analizați investițiile și înțelegeți taxele cu ușurință. Toate instrumentele sunt intuitive și ușor de utilizat.",
        },
        schoolTitle: {
          info: "Toate scolile aici",
        },
        schoolInfo: {
          info: "În escoala.md sunt prezentate școlile de stat și private, liceele și gimnaziile. Aflați totul despre educația secundară — cum să alegeți școala, unde pregătesc cel mai bine pentru o diplomă de licență, ce profile de studiu există în clasele superioare, cum să intrați la cele mai bune școli specializate. Cele mai bune școli din Moldova, clasamentul școlilor din Ministerul Educației din Moldova, în ce școli învață câștigătorii Olimpiadei Mondiale a Elevilor — toate aceste informații le veți găsi pe site-ul nostru.",
        },
        home: {
          slogan: "Escoala, toate scolile Moldovei",
        },
        question: {
          title: "Intreaba expertul?",
          askButton: "Pune întrebarea ta",
          dialogTitle: "Adaugă o noua intrebare",
          dialogContent: "Întreabă ceea ce nu stii din teme",
        },
        common: {
          cancel: "Anulează",
        },
        trustedTutors: {
          title: "Repetitori de incredere",
          description:
            "Școala este o comunitate a cunoștințelor unde elevii și experții se ajută între ei pentru a rezolva teme pentru acasă dificile.",
        },
        homeSchools: {
          findYourSchool: "Găsește-ți școala",
          schoolIsVeryImportant:
            "Școala este foarte importantă pentru un copil",
          schoolNotInList: "Școala ta nu este în listă?",
          allSchools: "Toate școlile",
        },
        homeEcology: {
          tutorForYou:
            "Descoperiți-vă potențialul cu profesorii noștri excepționali!",
          trustedTutorsForWorryFreeCommunication: `De ce să ne alegeți?
          1. Experiență
          2. Abordare personalizată
          3. Program flexibil
          4. Rezultate dovedite`,
          chooseYourTutor: "Alege-ți repetitorul",
        },
        homeRepetitor: {
          teachWithEscoala: "Preda cu Escoala",
          earnMoneyBySharing:
            "Câștigă bani împărtășindu-ți cunoștințele de specialitate cu studenții. Înscrie-te și începe să predai online cu Escoala.",
          findNewStudents: "Găsește-ți noi studenți",
          growYourBusiness: "Dezvoltă-ți activitatea",
          receiveRewardSafely: "Primește-ți recompensa în siguranță",
          becomeTutor: "Devino Repetitor",
          howOurPlatformWorks: "Cum funcționează platforma noastră",
        },
        topBar: {
          home: "Acasa",
          schools: "Scoli",
          tutors: "Repetitori",
          events: "Evenimente",
          contacts: "Contacte",
          english: "Engleza",
          romania: "Romania",
          answers: "Raspunsuri",
          courses: "Cursuri",
          finPlus: "Fin+",
        },
        schools: {
          title: "Scoli",
          searchLabel: "Scoli",
          profileLabel: "Profil",
          allProfile: "Toate",
          generalProfile: "General",
          musicProfile: "Muzica",
          regionLabel: "Regiune",
          allRegion: "Toate",
          chisinauRegion: "num. Chisinau",
          baltiRegion: "mun. Balti",
          chimisliaRegion: "Chimislia",
        },
        repetitori: {
          title: "Repetitori",
          addRepetitor: "Adauga Repetitor",
          repetitorLabel: "Repetitor",
          noProfessorsFound: "Nu am gasit profesori",
        },
        repetitorAdd: {
          title: "Adaugarea repetitorilor",
          name: "Nume",
          phone: "Telefon",
          city: "Oras",
          material: "Materii",
          languages: "Limbi",
          description: "Descriere",
          price: "Pret",
          classTime: "Orar",
          addRepetitor: "Adauga Repetitor",
          resetForm: "Reseteaza Formularul",
          errorTitle: "Eroare",
          errorMessage:
            "Nu s-a primit sa creati repetitor, incercati va rog mai tarziu",
        },
        login: {
          loginTitle: "Conectare",
          emailLabel: "Adresă de email",
          passwordLabel: "Parolă",
          loginButton: "Conectare",
        },
        contacts: {
          title: "Trimiteți un mesaj",
          name: "Nume",
          phone: "Telefon",
          email: "Email",
          message: "Mesaj",
          sourceLabel: "De unde ați aflat despre noi?",
          sendButton: "Trimiteți mesajul",
          resetButton: "Resetați formularul",
          errorTitle: "Eroare",
          errorMessage:
            "Nu am putut să primim mesajul dvs. Încercați vă rog mai târziu.",
          successTitle: "Succes",
          successMessage: "Mesajul a fost trimis. Vă vom contacta în curând.",
        },
      },
    },
    ru: {
      translation: {
        finPlus: {
          title: "Мини-приложения для управления финансами",
          description:
            "Добро пожаловать на страницу, где вы найдете полезные мини-приложения, созданные для оптимизации ваших финансов. С их помощью вы можете рассчитывать кредиты, планировать бюджет, анализировать инвестиции и изучать налоги. Все инструменты интуитивно понятны и просты в использовании.",
        },
        schoolTitle: {
          info: "Все школы тут",
        },
        schoolInfo: {
          info: "На escoala.md представлены государственные и частные школы, лицеи и гимназии. Узнайте все о среднем образовании — как выбрать школу, где лучше всего готовят к бакалавриату, какие профили обучения есть в старших классах, как поступить в ведущие специализированные школы. Лучшие школы Молдовы, рейтинг школ Министерства образования Молдовы, в каких школах учатся победители Всемирной олимпиады школьников — всю эту информацию вы найдете на нашем сайте.",
        },
        home: {
          slogan: "Ешкола, все школы Молдовы",
        },
        question: {
          title: "Задайте вопрос эксперту ?",
          askButton: "Задайте свой вопрос",
          dialogTitle: "Добавить новыи вопрос",
          dialogContent: "Спросите о том, что не знаете из домашнего задания",
        },
        common: {
          cancel: "Отмена",
        },
        trustedTutors: {
          title: "Доверенные репетиторы",
          description:
            "Школа - это сообщество знаний, где ученики и эксперты помогают друг другу решать самые сложные задания по домашнему заданию.",
        },
        homeSchools: {
          findYourSchool: "Найти свою школу",
          schoolIsVeryImportant: "Школа очень важна для ребенка",
          schoolNotInList: "Вашей школы нет в списке?",
          allSchools: "Все школы",
        },
        homeEcology: {
          tutorForYou:
            "Разблокируйте свой потенциал с нашими исключительными репетиторами!",
          trustedTutorsForWorryFreeCommunication: `Почему выбирать нас?
          1. Опыт
          2. Индивидуальный подход
          3. Гибкое расписание
          4. Подтвержденные результаты`,
          chooseYourTutor: "Выберите своего репетитора",
        },
        homeRepetitor: {
          teachWithEscoala: "Обучайте с Escoala",
          earnMoneyBySharing:
            "Зарабатывайте, делясь своими знаниями со студентами. Зарегистрируйтесь и начните преподавать онлайн с Escoala.",
          findNewStudents: "Находите новых студентов",
          growYourBusiness: "Развивайте свой бизнес",
          receiveRewardSafely: "Получайте свою награду безопасно",
          becomeTutor: "Станьте репетитором",
          howOurPlatformWorks: "Как работает наша платформа",
        },
        topBar: {
          home: "Главная",
          schools: "Школы",
          tutors: "Репетиторы",
          events: "События",
          contacts: "Контакты",
          english: "Английский",
          romania: "Румыния",
          answers: "Ответы",
          courses: "Курсы",
          finPlus: "Fin+",
        },
        schools: {
          title: "Школы",
          searchLabel: "Школы",
          profileLabel: "Профиль",
          allProfile: "Все",
          generalProfile: "Общий",
          musicProfile: "Музыка",
          regionLabel: "Регион",
          allRegion: "Все",
          chisinauRegion: "Кишинев",
          baltiRegion: "Бельцы",
          chimisliaRegion: "Кимишлия",
        },
        repetitori: {
          title: "Репетиторы",
          addRepetitor: "Добавить репетитора",
          repetitorLabel: "Репетитор",
          noProfessorsFound: "Профессоры не найдены",
        },
        repetitorAdd: {
          title: "Добавить учителей",
          name: "Имя",
          phone: "Телефон",
          city: "Город",
          material: "Материал",
          languages: "Языки",
          description: "Описание",
          price: "Цена",
          classTime: "Время занятий",
          addRepetitor: "Добавить репетитора",
          resetForm: "Сбросить форму",
          errorTitle: "Ошибка",
          errorMessage:
            "Не удалось создать учителя. Пожалуйста, попробуйте позже.",
        },
        login: {
          loginTitle: "Войти",
          emailLabel: "Адрес электронной почты",
          passwordLabel: "Пароль",
          loginButton: "Войти",
        },
        contacts: {
          title: "Отправить сообщение",
          name: "Имя",
          phone: "Телефон",
          email: "Электронная почта",
          message: "Сообщение",
          sourceLabel: "Откуда вы узнали о нас?",
          sendButton: "Отправить сообщение",
          resetButton: "Сбросить форму",
          errorTitle: "Ошибка",
          errorMessage:
            "Мы не смогли получить ваше сообщение. Пожалуйста, попробуйте еще раз позже.",
          successTitle: "Успех",
          successMessage:
            "Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.",
        },
      },
    },
  },
});

export default i18n;
