import { useScroll, useTransform } from "framer-motion";

export const useParallax = () => {
  const { scrollY } = useScroll();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const ySlow = useTransform(scrollY, [0, 500], [0, isMobile ? -20 : -60]);
  const yMedium = useTransform(scrollY, [0, 500], [0, isMobile ? -40 : -120]);

  const blur = useTransform(scrollY, [0, 300], ["0px", "6px"]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85]);

  return { ySlow, yMedium, blur, opacity };
};
