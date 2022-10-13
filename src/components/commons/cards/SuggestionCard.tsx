import IcOutlineArrowDropUp from "@components/icons/IcOutlineArrowDropUp";
import IcOutlineModeComment from "@components/icons/IcOutlineModeComment";
import { dateFormat, stageClasses } from "@helpers/Global";
import { Suggestions } from "types/Global";

const suggestionCard = ({
  votes,
  title,
  description,
  user,
  hashtags,
  stage,
  createdAt,
}: Suggestions) => {
  return (
    <Link
      to="/suggestions/"
      className="bg-white border rounded p-5 mt-4 flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 hover:bg-gray-50 "
    >
      <div className="border rounded flex flex-col items-center px-5 py-5 md:py-0 hover:bg-white">
        <IcOutlineArrowDropUp className="w-10 h-10 text-gray-400" />
        <div className="text-xl font-semibold">{votes}</div>
      </div>
      <div className="space-y-2 flex-1">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="flex flex-col md:flex-row justify-between items-center space-x-4 pt-3">
          <div className="flex  md:items-center space-x-4">
            <h4 className="text-sm font-semibold text-gray-600">{user.name}</h4>
            <div className="text-gray-500 space-x-4 text-sm">
              <span>{dateFormat(createdAt)}</span>
              <span className="space-x-2">
                {hashtags.map((hashtag) => (
                  <span key={"#" + hashtag} className="hover:text-orange-600">
                    #{hashtag}
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className={stageClasses(stage)}>{stage}</button>
            <div className="flex items-center space-x-2">
              <IcOutlineModeComment /> <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default suggestionCard;
