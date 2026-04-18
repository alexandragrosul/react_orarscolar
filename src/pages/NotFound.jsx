import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function NotFound() {
  const [glitch, setGlitch] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    let timeout;

    const triggerGlitch = () => {
      setGlitch(true);

      timeout = setTimeout(() => {
        setGlitch(false);
      }, 140); // micro glitch realist

      const next = Math.random() * 5000 + 2500;
      timeout = setTimeout(triggerGlitch, next);
    };

    triggerGlitch();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        position: "relative",
        background: `
          radial-gradient(circle at 20% 20%, rgba(99,255,117,0.25), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(63,203,109,0.2), transparent 40%),
          linear-gradient(135deg,rgb(194, 235, 205),rgb(155, 195, 167))
        `,
        overflow: "hidden",
      }}
    >
      {/* SCANLINES */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "repeating-linear-gradient(to bottom, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 2px, transparent 4px)",
          opacity: 0.4,
        }}
      />

      <Container maxWidth="sm" sx={{ textAlign: "center", zIndex: 2 }}>
        {/* 404 */}
        <Box sx={{ position: "relative", display: "inline-block" }}>
          {/* MAIN */}
          <Typography
            sx={{
              fontSize: { xs: "70px", sm: "100px", md: "140px" },
              fontWeight: 900,
              background: "linear-gradient(135deg, #6EC872, #499f4d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              zIndex: 2,
              transform: glitch ? "skewX(3deg)" : "none",
              transition: "0.1s",
            }}
          >
            404
          </Typography>

          {/* GLITCH GREEN */}
          <Typography
            sx={{
              position: "absolute",
              top: 0,
              left: glitch ? 4 : 0,
              fontSize: { xs: "70px", sm: "100px", md: "140px" },
              fontWeight: 900,
              color: "#63ff75",
              opacity: glitch ? 0.25 : 0,
              transition: "0.1s",
            }}
          >
            404
          </Typography>

          {/* GLITCH PURPLE */}
          <Typography
            sx={{
              position: "absolute",
              top: 0,
              left: glitch ? -4 : 0,
              fontSize: { xs: "70px", sm: "100px", md: "140px" },
              fontWeight: 900,
              color: "#6C63FF",
              opacity: glitch ? 0.2 : 0,
              transition: "0.1s",
            }}
          >
            404
          </Typography>
        </Box>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Typography
            sx={{
              mt: 2,
              mb: 1,
              fontWeight: 600,
              fontSize: { xs: "18px", md: "22px" },
              color: "#1a1a1a",
            }}
          >
            {t("notFound.pageNotExist")}
          </Typography>

          <Typography
            sx={{
              color: "rgba(0,0,0,0.6)",
              mb: 4,
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            {t("notFound.textNotFound")}
          </Typography>
        </motion.div>

        {/* BUTTON + MICRO LAG GLITCH */}
        <motion.div
          animate={{
            x: glitch ? [0, -1, 2, -2, 1, 0] : 0,
            y: glitch ? [0, 1, -1, 1, 0] : 0,
          }}
          transition={{
            duration: 0.15,
            ease: "easeInOut",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              fullWidth
              sx={{
                maxWidth: "260px",
                mx: "auto",
                display: "block",
                px: 4,
                py: 1.5,
                borderRadius: "14px",
                fontWeight: 600,
                background: "linear-gradient(135deg, #499f4d, #6EC872)",
                color: "white",

                boxShadow: glitch
                  ? "0 0 20px rgba(110,200,114,0.6)"
                  : "0 10px 25px rgba(108,99,255,0.25)",

                transform: glitch ? "scale(1.02)" : "scale(1)",
                transition: "0.1s",

                "&:hover": {
                  transform: "translateY(-2px) scale(1.03)",
                },
              }}
            >
              {t("notFound.goHome")}
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Box>
  );
}

export default NotFound;
