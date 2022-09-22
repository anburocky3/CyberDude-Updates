import CourseCard from "@components/commons/cards/CourseCard"
import { useNavigate, useParams } from "react-router-dom"
import { courses } from "@helpers/courses"
import { useEffect, useState } from "react"
import { Course } from "types/Global"
import Button from "@components/commons/buttons/Button"
import { Breadcrumb, Modal } from "antd"
import SessionBox from "@components/commons/sessions/SessionBox"

export default function Session(){
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [ newSession , setNewSession ] = useState("")
    const [ course , setCourse ] = useState<Course>({
        tags: [],
        title: '',
        desc: '',
        last_update: '',
        sessions: []
    })
    const navigate = useNavigate()
    const { Item } = Breadcrumb
    const { id } = useParams()

    const showModal = () => {
        setNewSession('')
        setIsModalOpen(true)
    }
  
    const handleOk = () => {
        setIsModalOpen(false)
        course.sessions?.push({
            session_name: newSession,
            topics: []
        })
        console.log(course);
    }
  
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    useEffect(() => {
        setCourse(courses.filter(e => { return e.title === id })[0])
    })

    return <div>
        <Modal open={isModalOpen} width={350} footer={[]} onCancel={handleCancel} >
            <div className="">
                <p className="text-center mb-10 text-xl">Add new session</p>
                <p>New Session</p>
                <input name="notes" value={newSession} onChange={(e) => setNewSession(e.target.value)} placeholder="Enter New Session" className="focus:outline-none focus:ring-1 focus:ring-orange-500 border-orange-500 p-2 border-2 rounded-lg w-full mb-8 mt-1" id=""></input>
                <div className="flex -mb-5 justify-between">
                    <Button variant="secondary" label="Cancel" onClick={() => handleCancel()} />
                    <Button label="Add" onClick={() => handleOk()} />
                </div>
            </div>
        </Modal>
        <div className="flex justify-between">
            <Breadcrumb separator=">" className="my-8">
                <Item className="cursor-pointer" onClick={() => navigate('/sessions')}>Sessions</Item>
                <Item>{id}</Item>
            </Breadcrumb>
            <div className="flex">
                <Button className="my-8" onClick={() => showModal()} label="Add Section" />
            </div>
        </div>
        <div className="lg:flex gap-5 space-y-8 lg:space-y-0">
            <div className="lg:w-[25rem]">
                <CourseCard className="lg:ml-0" tags={course.tags} title={course.title} desc={course.desc} last_update={course.last_update}/>
            </div>
            <div className="w-full space-y-5">
                {
                    course.sessions?.map((session, index) => {
                        return <SessionBox id={index} data={session}/>
                    })
                }
            </div>
        </div>
    </div>
}