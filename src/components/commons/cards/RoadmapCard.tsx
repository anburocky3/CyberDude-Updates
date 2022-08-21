type CardProps = {
  badgeColor: string;
  title: string;
  total: number;
  children: JSX.Element | JSX.Element[];
};

const RoadmapCard = ({ badgeColor, title, total, children }: CardProps) => {
  const noItemFound = (
    <div className="text-center pt-10">
      <img
        src="https://static.vecteezy.com/system/resources/previews/007/872/974/original/file-not-found-illustration-with-confused-people-holding-big-magnifier-search-no-result-data-not-found-concept-can-be-used-for-website-landing-page-animation-etc-vector.jpg"
        alt=""
        className="w-32 mx-auto opacity-50"
      />
      <h3 className="font-medium">No data found</h3>
      <p className="text-sm text-gray-600">Try again later</p>
    </div>
  );
  return (
    <div className="bg-white p-5 rounded shadow max-w-sm hover:shadow-lg">
      <div className="flex items-center space-x-3">
        <div className={'w-2 h-2 rounded-full ' + badgeColor}></div>
        <h4 className="font-medium">{title}</h4>
        <span className="text-gray-600 text-sm">({total})</span>
      </div>
      <div className="space-y-3">{total > 0 ? children : noItemFound}</div>
    </div>
  );
};

export default RoadmapCard;
