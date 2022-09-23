import CourseCard from "@components/commons/cards/CourseCard";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "@helpers/courses";
import { useEffect, useState } from "react";
import { Course, SessionType, TopicType } from "types/Global";
import Button from "@components/commons/buttons/Button";
import { Breadcrumb, Modal } from "antd";
import SessionBox from "@components/commons/sessions/SessionBox";
import { DragAndDrop, Drag, Drop } from "@helpers/DragAndDrop";
import UniqueId from "@helpers/uniqueId";

export default function Session() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allSessions, setAllSession] = useState<SessionType[]>();
  const [newSession, setNewSession] = useState("");
  const [course, setCourse] = useState<Course>({
    tags: [],
    title: "",
    desc: "",
    last_update: "",
    sessions: [],
  });
  const navigate = useNavigate();
  const { Item } = Breadcrumb;
  const { id } = useParams();

  const showModal = () => {
    setNewSession("");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    course.sessions?.push({
      id: UniqueId(8),
      session_name: newSession,
      topics: [],
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    let res = courses.filter((e) => {
      return e.title === id;
    })[0];
    setAllSession(res.sessions);
    setCourse(res);
  }, []);

  const handleDragEnd = (result: {
    type: any;
    source: any;
    destination: any;
  }) => {
    const { type, source, destination } = result;
    if (!destination) return;

    const sourceCategoryId = source.droppableId;
    const destinationCategoryId = destination.droppableId;

    if (type === "droppable-item") {
      if (
        sourceCategoryId === destinationCategoryId &&
        allSessions !== undefined
      ) {
        const updatedOrder = reorder(
          allSessions.find((category) => category.id === sourceCategoryId)
            ?.topics,
          source.index,
          destination.index
        );

        const updatedCategories = allSessions.map((category) =>
          category.id !== sourceCategoryId
            ? category
            : { ...category, topics: updatedOrder }
        );

        setAllSession(updatedCategories as SessionType[]);
      } else {
        const sourceOrder = allSessions?.find(
          (category) => category.id === sourceCategoryId
        )?.topics;
        const destinationOrder = allSessions?.find(
          (category) => category.id === destinationCategoryId
        )?.topics;
        if (sourceOrder !== undefined && destinationOrder !== undefined) {
          const [removed] = sourceOrder.splice(source.index, 1);
          destinationOrder.splice(destination.index, 0, removed);

          destinationOrder[removed as any] = sourceOrder[removed as any];
          delete sourceOrder[removed as any];

          const updatedCategories = allSessions?.map((session) =>
            session.id === sourceCategoryId
              ? { ...session, topics: sourceOrder }
              : session.id === destinationCategoryId
              ? { ...session, topics: destinationOrder }
              : session
          );
          setAllSession(updatedCategories as SessionType[]);
        }
      }
    }

    // Reordering allSessions
    if (type === "droppable-category") {
      const updatedCategories = reorder(
        allSessions,
        source.index,
        destination.index
      );
      setAllSession(updatedCategories as SessionType[]);
    }
  };

  return (
    <div>
      <Modal open={isModalOpen} width={500} footer={[]} onCancel={handleCancel}>
        <div className="">
          <p className="text-center mb-10 text-xl">Add new session</p>
          <p>New Session</p>
          <input
            name="notes"
            value={newSession}
            onChange={(e) => setNewSession(e.target.value)}
            placeholder="Enter New Session"
            className="focus:outline-none focus:ring-1 focus:ring-orange-500 border-orange-500 p-2 border-2 rounded-lg w-full mb-8 mt-1"
            id=""
          ></input>
          <div className="flex -mb-5 justify-between">
            <Button
              variant="secondary"
              label="Cancel"
              onClick={() => handleCancel()}
            />
            <Button label="Add" onClick={() => handleOk()} />
          </div>
        </div>
      </Modal>
      <div className="flex justify-between">
        <Breadcrumb separator=">" className="my-8">
          <Item
            className="cursor-pointer"
            onClick={() => navigate("/sessions")}
          >
            Sessions
          </Item>
          <Item>{id}</Item>
        </Breadcrumb>
        <div className="flex">
          <Button
            className="my-8"
            onClick={() => showModal()}
            label="Add Section"
          />
        </div>
      </div>
      <div className="lg:flex gap-5 space-y-8 lg:space-y-0">
        <div className="lg:w-[25rem]">
          <CourseCard
            className="lg:ml-0"
            tags={course.tags}
            title={course.title}
            desc={course.desc}
            last_update={course.last_update}
            sessions={[]}
          />
        </div>
        <div className="w-full space-y-5">
          <DragAndDrop onDragEnd={handleDragEnd as any}>
            <Drop id="droppable" type="droppable-category">
              {allSessions?.map((session, index) => {
                return (
                  <Drag
                    className="draggable-category"
                    key={session.id}
                    id={session.id}
                    index={index}
                  >
                    <SessionBox id={index} data={session} />
                  </Drag>
                );
              })}
            </Drop>
          </DragAndDrop>
        </div>
      </div>
    </div>
  );
}

const reorder = (list: any, startIndex: number, endIndex: number) => {
  const result = Array.from(list as any);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};