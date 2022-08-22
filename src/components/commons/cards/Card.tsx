type cardProps = {
  title: string;
  subtitle?: string;
  children: JSX.Element;
  className: string;
};

const card = ({ title, subtitle, children, className }: cardProps) => {
  return (
    <div className={'bg-white p-5 rounded shadow space-y-3 ' + className}>
      <div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-gray-600">{subtitle}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default card;
