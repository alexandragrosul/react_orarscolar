import { Button } from "../../../node_modules/@mui/material/index";

const RoundButton = ({
  name,
  variant = "contained",
  style = {},
  startIcon = undefined,
  type = "button",
  onClick = () => {},
}) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      color="primary"
      type={type}
      style={{
        ...style,
        borderRadius: "100px",
        backgroundColor: "primary.main",
      }}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default RoundButton;
