import { LoaderCircle } from "lucide-react";

const Button = ({ children, backgroundColor, color, loading }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "blue",
        textTransform: "capitalize",
        letterSpacing: "0.54px",
        padding: "0.444rem 1rem",
        fontSize: "0.84rem",
        position: "relative",
        overflow: "hidden",
        minWidth: "80px",
        cursor: "pointer",
        borderRadius: "5px",
        color: color ? color : "white",
      }}
    >
      {loading ? <LoaderCircle className="animate-spin" /> : children}
    </button>
  );
};
export default Button;
