import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: {
        question: {
          title: "What do you want to know?",
          askButton: "Ask your question",
          dialogTitle: "Add the task",
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
          tutorForYou: "Tutor for You!",
          trustedTutorsForWorryFreeCommunication:
            "Trusted tutors for worry-free communication",
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
        question: {
          title: "Ce vrei să ştii?",
          askButton: "Pune întrebarea ta",
          dialogTitle: "Adaugă task-ul",
          dialogContent: "Întreabă despre ceea ce nu ştii să faci din temă",
        },
        common: {
          cancel: "Anulează",
        },
        trustedTutors: {
          title: "Repetitori de Încredere",
          description:
            "Școala este o comunitate a cunoștințelor unde elevii și experții se ajută între ei pentru a rezolva cele mai dificile teme pentru acasă.",
        },
        homeSchools: {
          findYourSchool: "Găsește-ți școala",
          schoolIsVeryImportant:
            "Școala este foarte importantă pentru un copil",
          schoolNotInList: "Școala ta nu este în listă?",
          allSchools: "Toate școlile",
        },
        homeEcology: {
          tutorForYou: "Repetitor pentru tine!",
          trustedTutorsForWorryFreeCommunication:
            "Repetitori de încredere pentru comunicări fără griji",
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
  },
});

export default i18n;
