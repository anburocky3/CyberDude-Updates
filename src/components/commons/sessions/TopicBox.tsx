import IcBaselineKeyboardArrowRight from "@components/icons/IcBaselineKeyboardArrowRight";
import { useState } from "react";
import { TopicType } from "types/Global";

export default function TopicBox({ data, id }: TopicType) {
    const [ open , setOpen ] = useState(false)
    return <div key={id} className="w-full bg-gray-100 border-gray-200 border p-3 rounded-md">
        <p className="flex justify-between cursor-pointer" onClick={() => setOpen(!open)}>
            #{id+1} {data?.topic_name }
            <IcBaselineKeyboardArrowRight className={`h-5 w-5 ${open ? 'rotate-90' : ''}`}/>
        </p>
        {
            open ? <pre className="bg-white p-3 mt-4 rounded-md">
            { data?.topic_notes }
            </pre> : ''
        }
    </div>
}