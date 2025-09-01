import { Button } from "@mui/material";

const RoundButton = ({
  name,
  variant = "contained", // "contained" = кнопка, "text" = просто текст
  style = {},
  startIcon = undefined,
  type = "button",
  onClick = () => {},
  gradient = true, // по умолчанию градиентная кнопка
}) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      type={type}
      onClick={onClick}
      sx={{
        textTransform: "none",
        fontWeight: gradient ? "bold" : "normal",
        fontSize: gradient ? "18px" : "16px",
        borderRadius: gradient && variant === "contained" ? "30px" : "0px",
        padding: gradient && variant === "contained" ? "12px 40px" : "6px 12px",
        color: gradient && variant === "contained" ? "#fff" : "inherit",
        background:
          gradient && variant === "contained"
            ? "linear-gradient(90deg, #43A047, #66BB6A)"
            : "transparent",
        boxShadow:
          gradient && variant === "contained"
            ? "0 6px 20px rgba(67,160,71,0.4)"
            : "none",
        "&:hover":
          variant === "contained"
            ? gradient
              ? { background: "linear-gradient(90deg, #388E3C, #4CAF50)" }
              : {}
            : { color: "#43A047", background: "transparent" },
        ...style,
      }}
    >
      {name}
    </Button>
  );
};

export default RoundButton;
