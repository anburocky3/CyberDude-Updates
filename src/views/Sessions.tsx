import Button from "@components/commons/buttons/Button";
import CourseCard from "@components/commons/cards/CourseCard";
import { courses } from "@helpers/courses";
import { useNavigate } from "react-router-dom";

export default function Sessions() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-5 py-10">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold">All Course Syllabus</h2>
        <Button className="" label="Create" />
      </div>
      <div className="grid grid-cols-4 gap-10 ">
        {courses.map((e, i) => {
          return (
            <div key={e.title + i} onClick={() => navigate(`${e.title}`)}>
              <CourseCard
                tags={e.tags}
                title={e.title}
                language={e.language}
                technology={e.technology}
                colorCode={e.colorCode}
                desc={e.desc}
                last_update={e.last_update}
                sessions={[]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
