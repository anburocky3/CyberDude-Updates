import { Badge } from "antd";
import { Course } from "types/Global";

export default function CourseCard({ title , desc , tags , last_update} : Course) {
    return <div key={title} className="rounded-lg relative p-4 mx-auto md:mr-auto w-[25rem] h-48 bg-white shadow-lg hover:shadow-xl cursor-pointer">
        <div className="flex justify-between">
            <p className="text-lg font-bold">
                {title}
            </p>
            <p className="my-auto text-xs text-gray-600">
                Last updated : <span>{last_update}</span>
            </p>
        </div>
        <p className="indent-10 my-3 line-clamp-4 text-justify">
            {desc}
        </p>
        <div className="mt-auto absolute left-4 bottom-4">
        {
            tags.map(tag => {
                return <Badge
                className="site-badge-count-109"
                count={tag}
                style={{ backgroundColor: 'rgb(253 76 0)' }}
            />
            })
        }
        </div>
    </div>
}