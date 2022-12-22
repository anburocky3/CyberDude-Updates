import { Badge } from "antd";
import { Course } from "types/Global";

export default function CourseCard({
  title,
  desc,
  tags,
  language,
  technology,
  colorCode,
  last_update,
  className,
}: Course) {
  return (
    <div className="bg-white rounded overflow-hidden shadow hover:shadow-xl cursor-pointer">
      <div
        className={`h-32 p-5 flex justify-center items-center`}
        style={{ backgroundColor: colorCode }}
      >
        <div className="flex justify-center items-center text-white space-x-3">
          <h1 className="text-lg font-bold text-white tracking-widest">
            {technology}
          </h1>
          <span className="border border-white px-1.5 py-0.5 rounded text-sm">
            {language}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-gray-600 py-2">{desc}</p>
        <div className="flex justify-between items-center text-sm pt-2">
          {tags.map((tag) => {
            return (
              <Badge
                className="site-badge-count-109"
                count={tag}
                style={{ backgroundColor: "rgb(253 76 0)" }}
              />
            );
          })}
          {/* <span># Backend</span> */}
          <span>{last_update}</span>
        </div>
      </div>
    </div>
  );
}
