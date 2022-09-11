import CourseCard from "@components/commons/cards/CourseCard";
import { courses } from "@helpers/courses";

export default function Sessions() {
    return <div>
        <h2 className="text-xl my-8 font-bold">All Course Syllabus</h2>
        <div className="flex justify-between gap-10 flex-wrap">
            {
                courses.map(e => {
                   return <CourseCard tags={e.tags} title={e.title} desc={e.desc} last_update={e.last_update}/>
                })
            }
        </div>
    </div>
}