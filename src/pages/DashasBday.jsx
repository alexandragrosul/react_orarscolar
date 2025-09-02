import React, { useEffect, useRef } from "react";

import moment1 from "../images/moment1.jpg";
import moment2 from "../images/moment2.jpg";
import moment3 from "../images/moment3.jpg";
import moment4 from "../images/moment4.jpg";
import moment5 from "../images/moment5.jpg";
import moment6 from "../images/moment6.jpg";
import moment7 from "../images/moment7.jpg";
import moment8 from "../images/moment8.jpg";
import moment9 from "../images/moment9.jpg";
import moment10 from "../images/moment10.jpg";
import moment11 from "../images/moment11.jpg";
import moment12 from "../images/moment12.jpg";
import moment13 from "../images/moment13.jpg";
import moment14 from "../images/moment14.jpg";
import moment15 from "../images/moment15.jpg";

const moments = [
  {
    img: moment1,
    text: "🌿 Dasha, sincer eu cand prima data te-am vazut nici nu credeam ca o sa fim prieten, eu oleaca ma temeam de tine sicer(de toti de fapt).Prima data ne-am cunoscut cand aveam nuami 9 si 10 ani(nu tin minte precis scuze)Si acum suntem prietene mai mult de 5 ani. Eu am enorma imcredere in tine si eu te iubesc atat de tare ca tu nici nu iti inchipui. Anul acesta pentru deabea 2 oara vin la ziua ta si am vrut sa fac ceva special pentru tine ce nimeni altul nu poate dar doar eu! Sper sa iti placa tare. Tu esti cea mai buna persoana pe care am vazut-o candva! Ta moe solnisko i ea tebea silino silino liubliu. Pana cand totul scriu nu stiu de ce dar imi vine sa plang pentru ca nici pana acum nu pot sa imi dau seama ca am asa pirietena CEA MAI BUNA care e si politicoasa si buna la inima si ideala si frumoasa! Esti un om perfect iar parintii te-au educat foarte bine iar eu ma bucur in continuare ca am o asa prietena. Tii minte cum ai turnata galeata intreaga de apa peste mine si atunic inca era iarna si era frig si tu ai spus ca sa iti torn si tie iar eu am spus ca nu tot ok. Bhahha pana acum nici nu cred ca am raspund asa...Nu nicego ea potom ese tebea aboliu vodoi).I LOVE YOU SOOO MUCH -Sasha🌸",
  },
  {
    img: moment2,
    text: "DASHA, LA MULȚI ANIIIII!! Iti doresc ca mereu sa fii asa cum esti acum, fericită si mereu pozitivă. Fie ca la 16 ani sa fie mult mai bine decât la 15.Felicitări si cu intrarea la Orizont, si iti urez un an ușor si plin de bucurii -Sanda💚",
  },
  {
    img: moment14,
    text: "Dashka la multi ani moia haroshaia!!! In sfarsit ai implinit 16 anisori cu greu 😝 Iti doresc multi bani in buzunar, sa ramai intotdeauna cu zambetul pe buze si sa fii inconjurata mereu de cei dragi. Iti multumesc pentru toate amintirile si momentele frumoase care le-am facut impreuna la Șciusev! Mereu imi ridicau dispozitia in zilele triste sau plictisitoare la pictura. Ma simteam mai comfortabila si mai bucuroasa la hudojska de fiecare data cand te vedeam si vorbeam. Mii dor tare de timpurile cand nu faceam ambele nimica la lectii si doar mancam in spatele la șevalete cat ne prefaceam ca lucram si dna Lilia ori domnu Denis striga la noi sa terminam lucrarile )) Dashka, esti cea mai superba, frumoasa si desteapta prietena posibila 💖 La multi ani inca o data si astept sa facem un roman despre creioane la ziua ta 😉 -Lorenka✨",
  },
  { img: moment4, text: "ESTI CEA MAI FRUMOASA FATA PE CARE AM VAZUT! 🌿" },
  {
    img: moment5,
    text: "Noi si pana acum tinem minte avtobusul tau. AVTOBUSUL LUI DASHA! 💕",
  },
  { img: moment6, text: "Poza mea preferata 💖" },
  { img: moment7, text: "Crasotka Dashulia 🌟" },
  { img: moment8, text: "Prietenia noastra e cel mai mare cadou 🎁" },
  {
    img: moment9,
    text: "Râsete, zâmbete si clipe unice, tu ai facut lectiile plictisitoare la picutra sa fie interesante pentru toti 😊",
  },
  {
    img: moment10,
    text: "Câte emoții minunate avem noi.Tii minte cum strangeam bani ca sa cumparam apa 💕",
  },
  { img: moment11, text: "Împreună e întotdeauna mai bine 🌸" },
  {
    img: moment12,
    text: "Fiecare zi cu tine e specială.Trebuie sa ne vedem mai des 🌞",
  },
  { img: moment13, text: "Prietenia adevărată rezistă mereu 💚" },
  {
    img: moment3,
    text: "Un album plin de clipe fericite si de poze proaste cu Dashka(unele is normale) 📸",
  },
  {
    img: moment15,
    text: "Înca o amintire frumoasa pentru noi (esti deja batrana, nu te teme iti facem loc in avtobus) ✨",
  },
];

function AnimatedOnView({ children, direction = "left", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        direction === "left" ? "slide-left" : "slide-right"
      }`}
    >
      {children}
    </div>
  );
}

export default function DashaPage() {
  const confetti = ["💚", "💖", "💜", "💙", "🌸", "✨", "💛"];

  return (
    <div className="page">
      <style>{`
        .page {
          min-height: 100vh;
          padding: 80px 15px 120px;
          background: linear-gradient(135deg, #9ef5c2, #ff9fd6, #fbc2eb, #a1f7c4);
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Poppins', 'Arial Rounded MT Bold', sans-serif;
          color: #2f3e2f;
          overflow: hidden;
          position: relative;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Пузырьки */
        .bubble {
          position: absolute;
          bottom: -120px;
          border-radius: 50%;
          opacity: 0.5;
          animation: rise 20s infinite ease-in;
        }

        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-120vh) scale(1.2); opacity: 0; }
        }

        h1 {
          font-size: 2.5rem;
          color: #ff4da6;
          text-shadow: 0 0 12px rgba(255, 105, 180, 0.8);
          margin-bottom: 50px;
          text-align: center;
          animation: fadeInDown 1.2s ease;
          z-index: 2;
        }

        .moments {
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 70px;
          z-index: 2;
        }

        .moment {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          position: relative;
        }

        .moment img {
          width: 100%;
          max-width: 420px;
          border-radius: 25px;
          border: 5px solid transparent;
          background: linear-gradient(45deg, #ffb6c1, #98fb98, #87cefa, #dda0dd);
        //   background-size: 400% 400%;
        //   animation: borderGlow 8s ease infinite;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
          transition: transform 0.6s, box-shadow 0.6s;
        }

        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .moment img:hover {
          transform: scale(1.08);
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.35);
        }

        .moment .text {
          max-width: 420px;
          text-align: center;
          font-size: 1.2rem;
          line-height: 1.5;
          color: #333;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
        }

        @media(min-width: 768px) {
          .moment { flex-direction: row; justify-content: space-between; }
          .moment.reverse { flex-direction: row-reverse; }
          .moment .text { text-align: left; font-size: 1.4rem; }
        }

        .slide-left { opacity: 0; transform: translateX(-60px); transition: all 1s ease; }
        .slide-right { opacity: 0; transform: translateX(60px); transition: all 1s ease; }
        .visible { opacity: 1 !important; transform: translateX(0) !important; }

        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Конфетти */
        .falling {
          position: fixed;
          top: -50px;
          animation-name: fallDown;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          z-index: 3;
        }
        @keyframes fallDown {
          0% { transform: translateY(-50px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
        }

        /* Сердечки поверх фоток */
        .heart-overlay {
          position: absolute;
          font-size: 1rem;
          animation-name: heartRise;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          pointer-events: none;
          z-index: 5;
          text-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
        }
        @keyframes heartRise {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-90px) rotate(360deg); opacity: 0; }
        }
          
      `}</style>

      {/* Пузырьки */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`bubble-${i}`}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${40 + Math.random() * 80}px`,
            height: `${40 + Math.random() * 80}px`,
            background:
              Math.random() > 0.5
                ? "rgba(255,182,193,0.4)"
                : "rgba(144,238,144,0.4)",
            animationDuration: `${12 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      <h1>🌸 Our Warmest Moments 💚</h1>

      {/* Конфетти */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={"fall-" + i}
          className="falling"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 8}s`,
            fontSize: `${18 + Math.random() * 22}px`,
          }}
        >
          {confetti[Math.floor(Math.random() * confetti.length)]}
        </div>
      ))}

      <div className="moments">
        {moments.map((m, i) => (
          <AnimatedOnView
            key={i}
            direction={i % 2 === 0 ? "left" : "right"}
            className={`moment ${i % 2 ? "reverse" : ""}`}
          >
            <div style={{ position: "relative" }}>
              <img src={m.img} alt={`moment-${i}`} />
              {Array.from({ length: 5 }).map((_, j) => (
                <div
                  key={j}
                  className="heart-overlay"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  {confetti[Math.floor(Math.random() * confetti.length)]}
                </div>
              ))}
            </div>
            <div className="text">{m.text}</div>
          </AnimatedOnView>
        ))}

        <p
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: "1.2rem",
          }}
        >
          A new chapter of your life begins here — new school, new friends, and
          sweet sixteen!🎂🥳
          <br />
          <br />
          With all our love, <br />
          Sasha, Sanda, Lorenka and everyone who loves you!💖 <br />
          <br />
          <i style={{ fontWeight: 400, fontStyle: "italic" }}>
            (P.S. This page was made with lots of love and a bit of code by
            Sashka 🌼😉)
          </i>
        </p>
      </div>
    </div>
  );
}
