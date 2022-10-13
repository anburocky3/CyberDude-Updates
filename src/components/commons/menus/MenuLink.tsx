type props = {
  to: string;
  icon: JSX.Element;
  label: string;
  className?: string;
};

const MenuLink = ({ to, icon, label, className }: props) => {
  return (
    <Link
      to={to}
      className={
        "flex items-center text-gray-500 hover:text-primary " + className
      }
    >
      {icon}
      <div className="font-medium">{label}</div>
    </Link>
  );
};

export default MenuLink;
