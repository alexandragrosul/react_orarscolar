import React, { useEffect, useRef } from "react";

import moment1 from "../images/dani/moment1.jpg";
import moment2 from "../images/dani/moment2.jpg";
import moment3 from "../images/dani/moment3.jpg";
import moment4 from "../images/dani/moment4.jpg";
import moment5 from "../images/dani/moment5.jpg";
import moment6 from "../images/dani/moment6.jpg";
import moment7 from "../images/dani/moment7.jpg";
import moment8 from "../images/dani/moment8.jpg";
import moment9 from "../images/dani/moment9.jpg";

const moments = [
  {
    img: moment1,
    text: "💜 Daniela, eu te iubesc FOARTE TARE. Eu ma bucur ca esti prietena mea cea mai buna. Eu cam tazriu iti fac siteul pentru ca eu am uitat de el sa ma scuzi te rog 😭🙏. Dar ma bucur ca acum deja de 3-4 ani avem acest grup al nostru. Scuze ca nu mai sunt copilul tau dar totusi te socot ca mama mea. Te ador. Chiar nu imi inchipui lectiile fara tine. Imi vine sa plang cand ma gandesc ca tu pleci dupa a 9 si asta este ultimul an cu tine. Daniii eu nu pot nici sa explic cand de bucuroasa sunt ca esti prietena mea!!!Esti desteapta, frumoasa, buna, generoasa, toate calitatile cele mai bune! Sper sa dai examenele pe 10 si 9! TE IUBESC 💜",
  },
  { img: moment2, text: "Daniela, La mulți ani!! 🍇" },
  {
    img: moment3,
    text: "Un album plin de amintiri 🦄(eu nu stiu pentru unicornul asta dar ok)",
  },
  { img: moment4, text: "Ești o prietenă minunata 💜" },
  { img: moment5, text: "Îți mulțumesc pentru tot 💟" },
  { img: moment6, text: "Prietenie adevărată 🥹" },
  { img: moment7, text: "Un suflet bun 👾" },
  { img: moment8, text: "Împreună am creat cele mai frumoase amintiri 🌠" },
  { img: moment9, text: "Mereu aduci zâmbet 🪻" },
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

export default function DanielaPage() {
  const confetti = ["💜", "👾", "✨", "🍇", "🪻", "⭐️"];

  return (
    <div className="page">
      <style>{`
        .page {
          min-height: 100vh;
          padding: 80px 15px 120px;
          background: radial-gradient(ellipse at bottom,rgb(97, 21, 130) 0%, #000 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Poppins', 'Arial Rounded MT Bold', sans-serif;
          color: #fff;
          overflow: hidden;
          position: relative;
        }

        /* --- МЕЛКИЕ ЗВЁЗДЫ --- */
        .stars {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${Array(300)
            .fill(0)
            .map(
              () => `${Math.random() * 2000}px ${Math.random() * 2000}px white`
            )
            .join(",")};
          animation: animStar 200s linear infinite;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
        .stars:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: ${Array(300)
            .fill(0)
            .map(
              () => `${Math.random() * 2000}px ${Math.random() * 2000}px white`
            )
            .join(",")};
        }
        @keyframes animStar {
          from { transform: translateY(0px); }
          to   { transform: translateY(-2000px); }
        }

        /* --- ЯРКИЕ ЗВЁЗДЫ / СВЕТЛЯЧКИ --- */
        .bright-star {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, white, rgba(255,255,255,0));
          box-shadow: 0 0 20px rgba(255,255,255,0.8),
                      0 0 40px rgba(173,216,230,0.6);
          animation: twinkle 3s infinite ease-in-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        h1 {
          font-size: 2.8rem;
          color: #fff;
          text-shadow: 0 0 25px rgba(173,216,230,0.9),
                       0 0 40px rgba(147,112,219,0.8);
          margin-bottom: 60px;
          text-align: center;
          animation: fadeInDown 1.4s ease;
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
          border: 3px solid rgba(255,255,255,0.5);
          background: linear-gradient(45deg, #836fff, #6ec6ff, #b19cd9);
          box-shadow: 0 0 25px rgba(173, 216, 230, 0.6),
                      0 0 40px rgba(138, 43, 226, 0.5);
          transition: transform 0.6s, box-shadow 0.6s;
        }
        .moment img:hover {
          transform: scale(1.08);
          box-shadow: 0 0 40px rgba(255,255,255,0.8),
                      0 0 60px rgba(138, 43, 226, 0.6);
        }

        .moment .text {
          max-width: 420px;
          text-align: center;
          font-size: 1.2rem;
          line-height: 1.5;
          color: #f0f8ff;
          text-shadow: 0 0 12px rgba(0,0,0,0.5);
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

        /* падающие эмодзи */
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

        /* блёстки */
        .sparkle {
          position: absolute;
          font-size: 1rem;
          animation: sparkleFloat 3s infinite ease-in-out;
          pointer-events: none;
          z-index: 5;
          text-shadow: 0 0 8px rgba(255,255,255,0.8);
        }
        @keyframes sparkleFloat {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateY(-40px) scale(1.2); }
          100% { transform: translateY(-80px) scale(0.6); opacity: 0; }
        }
      `}</style>

      {/* космос */}
      <div className="stars"></div>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="bright-star"
          style={{
            width: `${8 + Math.random() * 12}px`,
            height: `${8 + Math.random() * 12}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        ></div>
      ))}

      <h1>
        💜 Daniela "Psihologul Clasei"
        <br /> Our Magical Moments 👾
      </h1>

      {/* Конфетти */}
      {Array.from({ length: 25 }).map((_, i) => (
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
                  className="sparkle"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  ✨
                </div>
              ))}
            </div>
            <div className="text">{m.text}</div>
          </AnimatedOnView>
        ))}

        <p style={{ textAlign: "center", marginTop: 20, fontSize: "1.2rem" }}>
          Un nou capitol al vieții începe aici — noi prieteni, noi visuri și un
          viitor plin de magie! ✨💜
          <br />
          <br />
          With all my love, <br />
          Alexandra!🍇
          <br />
          <br />
          <i style={{ fontWeight: 400, fontStyle: "italic" }}>
            (P.S. Această pagină a fost creată cu multă iubire și puțin cod de
            Alexandra💻💫)
          </i>
        </p>
      </div>
    </div>
  );
}
