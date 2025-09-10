import React, { useEffect, useRef } from "react";

import moment1 from "../images/dad/momentDad1.jpg";
import moment2 from "../images/dad/momentDad2.jpg";
import moment3 from "../images/dad/momentDad3.jpg";
import moment4 from "../images/dad/momentDad4.jpg";
import moment5 from "../images/dad/momentDad5.jpg";
import moment6 from "../images/dad/momentDad6.jpg";
import moment7 from "../images/dad/momentDad7.jpg";
import moment8 from "../images/dad/momentDad8.jpg";
import moment9 from "../images/dad/momentDad9.jpg";
import moment10 from "../images/dad/momentDad10.jpg";
import moment11 from "../images/dad/momentDad11.jpg";
import moment12 from "../images/dad/momentDad12.jpg";
import moment13 from "../images/dad/momentDad13.jpg";
import moment14 from "../images/dad/momentDad14.jpg";
import moment15 from "../images/dad/momentDad15.jpg";
import moment16 from "../images/dad/momentDad16.jpg";

const moments = [
  {
    img: moment1,
    text: "Папа, я тебя очень-очень люблю. Мне иногда трудно было сказать это вслух, но на самом деле в глубине души я всегда тебя любила, люблю и буду любить. Ты — мой герой, и никогда не изменю своего мнения.Ты самый красивый, умный и талантливый. Ты тот, кто открыл мне двери в мир программирования, и честно скажу по секрету — когда я делала эту страницу, мне действительно понравилось писать код.Пока я это пишу, вспоминаются наши совместные моменты, и хочется плакать от счастья. Даже не заметила, как пролетело время — словно мне недавно было четыре года, и ты держал меня на руках.Спасибо тебе ещё раз за твою поддержку и за то, что всегда помогаешь с моими проектами. Я тебя очень сильно люблю! ❤️💙",
  },
  {
    img: moment2,
    text: "Твоя поддержка в этот день была бесценна. Спасибо за всё, что ты делаешь для меня! ⚡️",
  },
  {
    img: moment3,
    text: "Смотри, как весело мы проводили время вместе. Ты лучший папа на свете! 🎉",
  },
  {
    img: moment4,
    text: "Этот день был особенным, потому что рядом был ты. Люблю тебя безмерно ❤️💙",
  },
  {
    img: moment5,
    text: "С тобой каждая прогулка превращается в приключение. Спасибо за счастье и заботу! 🔥",
  },
  {
    img: moment6,
    text: "Я всегда вспоминаю этот момент с улыбкой. Ты умеешь сделать каждый день особенным 💙",
  },
  {
    img: moment7,
    text: "Наши маленькие совместные победы делают жизнь ярче. Ты вдохновляешь меня каждый день ❤️",
  },
  {
    img: moment8,
    text: "С тобой даже простые моменты становятся незабываемыми. Спасибо за твою любовь ⚡️",
  },
  {
    img: moment9,
    text: "Папа, этот смех я никогда не забуду. Ты умеешь делать радость заразительной 🎉",
  },
  {
    img: moment10,
    text: "Спасибо, что всегда рядом, когда нужно поддержать и направить. Люблю тебя бесконечно 💙❤️",
  },
  {
    img: moment11,
    text: "Эта фотография напоминает о наших совместных приключениях. Ты делаешь мою жизнь яркой 🔥",
  },
  {
    img: moment12,
    text: "С тобой любая мелочь становится особенной. Спасибо за твоё тепло и заботу ❤️",
  },
  {
    img: moment13,
    text: "Каждый момент с тобой — это подарок. Ты лучший папа на свете 💙⚡️",
  },
  {
    img: moment14,
    text: "Эта улыбка на фото — потому что рядом был ты. Спасибо за счастье и любовь 🎉",
  },
  {
    img: moment15,
    text: "Помнишь этот день? Он был волшебным благодаря тебе. Люблю тебя всем сердцем ❤️💙",
  },
  {
    img: moment16,
    text: "С тобой любое событие становится незабываемым. Ты — мой герой каждый день 🔥⚡️",
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
  const confetti = ["❤️", "💙", "🔥", "⚡️", "🎉"];

  return (
    <div className="page">
      <style>{`
        .page {
          min-height: 100vh;
          padding: 80px 15px 120px;
          background: linear-gradient(135deg, #ff4d4d, #4d79ff, #ff6666, #3399ff);
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Poppins', 'Arial Rounded MT Bold', sans-serif;
          color: #fff;
          overflow: hidden;
          position: relative;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

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
          color: #ff3333;
          text-shadow: 0 0 12px rgba(0, 102, 255, 0.8);
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
          background: linear-gradient(45deg, #ff4d4d, #4d79ff, #ff1a1a, #1a53ff);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
          transition: transform 0.6s, box-shadow 0.6s;
        }

        .moment img:hover {
          transform: scale(1.08);
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.5);
        }

        .moment .text {
          max-width: 420px;
          text-align: center;
          font-size: 1.2rem;
          line-height: 1.5;
          color: #fff;
          text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
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

        .heart-overlay {
          position: absolute;
          font-size: 1rem;
          animation-name: heartRise;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          pointer-events: none;
          z-index: 5;
          text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        }
        @keyframes heartRise {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-90px) rotate(360deg); opacity: 0; }
        }
      `}</style>

      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`bubble-${i}`}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${40 + Math.random() * 80}px`,
            height: `${40 + Math.random() * 80}px`,
            background:
              Math.random() > 0.5 ? "rgba(255,0,0,0.4)" : "rgba(0,0,255,0.4)",
            animationDuration: `${12 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      <h1>🔥 Our Special Moments 💙❤️</h1>

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
            color: "#fff",
            textShadow: "0 0 6px rgba(0,0,0,0.7)",
          }}
        >
          A new chapter of your life begins here — more strength, more joy, and
          even more unforgettable memories! ⚽️🍷🎶🔥💙❤️
          <br />
          <br />
          With all our love and respect, <br />
          Your family, who is always proud of you! 💙❤️ <br />
          <br />
          <i style={{ fontWeight: 400, fontStyle: "italic" }}>
            (P.S. This page was made with lots of love and a bit of code 💻🔥😉)
          </i>
        </p>
      </div>
    </div>
  );
}
