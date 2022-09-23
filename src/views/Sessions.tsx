import Button from "@components/commons/buttons/Button";
import CourseCard from "@components/commons/cards/CourseCard";
import { courses } from "@helpers/courses";
import { useNavigate } from "react-router-dom";

export default function Sessions() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl my-8 font-bold">All Course Syllabus</h2>
        <Button className="my-8" label="Create" />
      </div>
      <div className="flex justify-between gap-10 flex-wrap">
        {courses.map((e, i) => {
          return (
            <div key={e.title + i} onClick={() => navigate(`${e.title}`)}>
              <CourseCard
                tags={e.tags}
                title={e.title}
                desc={e.desc}
                last_update={e.last_update}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
