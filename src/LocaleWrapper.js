import React from "react";
import { BrowserRouter } from "react-router-dom";

const LocaleWrapper = ({ children }) => {
  const location = window.location.pathname;
  const isRussian = location.startsWith("/ru");
  const isRomanian = location.startsWith("/ro");
  const isEnglish = location.startsWith("/en");
  const basename = isRussian ? "/ru" : isEnglish ? "/en" : "ro";

  return <BrowserRouter basename={basename}>{children}</BrowserRouter>;
};

export default LocaleWrapper;
