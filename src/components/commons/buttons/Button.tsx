import { getSizeClasses } from "@helpers/Global";
import { Button as MyButton } from "types/Global";

const Button = ({
  icon,
  size,
  variant,
  label,
  onClick,
  className,
}: MyButton) => {
  const sizeData = getSizeClasses(size);
  const generic =
    sizeData + " rounded  font-medium flex items-center text-center";
  const primary =
    generic + " shadow orange-gradient text-white hover:bg-orange-600";
  const secondary = generic + " bg-white text-black border hover:bg-gray-50";

  let theme = "";
  switch (variant) {
    case "primary":
      theme = primary;
      break;
    case "secondary":
      theme = secondary;
      break;
    default:
      theme = primary;
  }

  return (
    <button
      className={`${theme} ${className}`}
      onClick={() => (onClick ? onClick() : null)}
    >
      {icon ? <div className="pr-2">{icon}</div> : ""}
      {label}
    </button>
  );
};

export default Button;
