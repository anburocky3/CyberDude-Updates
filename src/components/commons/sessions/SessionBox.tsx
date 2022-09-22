import { SessionsType } from "types/Global";
import Button from "../buttons/Button";
import TopicBox from "./TopicBox";
import { Modal } from "antd";
import { useState } from "react";

export default function SessionBox({data,id} : SessionsType) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [ newTopic , setNewTopic ] = useState('')  
    const [ newTopicNotes , setNewTopicNotes ] = useState('')  
    const showModal = () => {
        setNewTopic('')
        setNewTopicNotes('')
        setIsModalOpen(true)
    }
  
    const handleOk = () => {
        data?.topics.push({
            topic_name: newTopic,
            topic_notes: newTopicNotes
        })
        setIsModalOpen(false)
    }
  
    const handleCancel = () => {
        setIsModalOpen(false)
    } 
    return <>
    <Modal open={isModalOpen} width={350} footer={[]} onCancel={handleCancel} >
        <div className="">
            <p className="text-center mb-10 text-xl">Add new Topic</p>
            Topic
            <input name="notes" value={newTopic} onChange={(e) => setNewTopic(e.target.value)} placeholder="Enter New Topic" className="focus:outline-none focus:ring-1 focus:ring-orange-500 border-orange-500 p-2 border-2 rounded-lg w-full mb-8 mt-1" id=""></input>
            Notes
            <textarea name="notes" value={newTopicNotes} onChange={(e) => setNewTopicNotes(e.target.value)}  rows={5} placeholder="Enter Notes" className="focus:outline-none focus:ring-1 focus:ring-orange-500 border-orange-500 p-2 border-2 mt-1 rounded-lg w-full mb-8" id=""></textarea>
            <div className="flex justify-between -mb-5">
                <Button variant="secondary" label="Cancel" onClick={() => handleCancel()} />
                <Button label="Add" onClick={() => handleOk()} />
            </div>
        </div>
    </Modal>
    {
        data !== undefined ? <div className="w-full shadow-lg bg-white p-5 rounded-lg">
        <div className="flex mb-5 justify-between align-middle">
            <h1 className="my-auto">Session {id+1} : <span className="font-bold">{ data.session_name}</span></h1>
            <Button className="ml-2" onClick={() => showModal()} label="Add Topics" />
        </div>
            <div className="space-y-3">
                {
                    data.topics.map((topic, i) => {
                        return <TopicBox data={topic} id={i}/>
                    })
                }
            </div>
        </div> : ""
    }</>
}