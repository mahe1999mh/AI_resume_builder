import {
  LoaderCircle,
  ShieldAlert,
  Check,
  Bookmark,
  Plus,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button as Button2 } from "@/components/ui/button";

const Button = ({
  children,
  icon,
  loading,
  success,
  error,
  variant,
  ...rest
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    if (rest.disabled) return;
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
    rest.onClick?.(e);
  };

  return (
    <Button2
      variant={variant}
      onClick={handleClick}
      disabled={loading || isClicked || rest.disabled}
      {...rest}
    >
      <span
        className="btn-text"
        style={{ display: "flex", alignItems: "center" }}
      >
        {loading ? (
          <LoaderCircle className="animate-spin" />
        ) : success ? (
          <Check color="white" size={24} strokeWidth={3} />
        ) : error ? (
          <ShieldAlert color="red" size={24} />
        ) : (
          icon
        )}
        {children}
      </span>
    </Button2>
  );
};

export default Button;

export const AddButton = ({ children, ...rest }) => {
  return (
    <Button icon={<Plus size={24} color="white" />} {...rest}>
      {children || "Add"}
    </Button>
  );
};

export const CloseButton = ({ children, ...rest }) => {
  return (
    <Button icon={<X size={24} color="grey" />} {...rest}>
      {children || "Close"}
    </Button>
  );
};

export const SubmitButton = ({ children, ...rest }) => {
  return (
    <Button icon={<Bookmark size={24} color="white" />} {...rest}>
      {children || "Submit"}
    </Button>
  );
};
