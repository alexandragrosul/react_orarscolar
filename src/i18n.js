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
      },
    },
  },
});

export default i18n;
