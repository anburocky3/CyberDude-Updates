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
    language: "",
    technology: "",
    colorCode: "",
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
      <Modal
        open={isModalOpen}
        width={500}
        footer={[]}
        onCancel={handleCancel}
        className="rounded"
      >
        <div className="">
          <p className="text-center mb-10 text-xl">Add new session</p>
          <p>New Session</p>
          <input
            name="notes"
            value={newSession}
            onChange={(e) => setNewSession(e.target.value)}
            placeholder="Enter New Session"
            className="focus:outline-none focus:ring-1 focus:ring-orange-500 border p-2 rounded-lg w-full mb-8 mt-1"
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
      <div
        className="h-48 mb-10 flex items-center"
        style={{ backgroundColor: course.colorCode }}
      >
        <div className="container mx-auto flex justify-between items-center ">
          <div className="flex space-x-4">
            <img
              src={`https://ui-avatars.com/api/?name=${course.technology}&background=0D8ABC&color=fff`}
              alt=""
              className="rounded-full"
            />
            <div className="text-white space-y-2">
              <h3 className="text-lg font-semibold text-white">
                {course.title}
              </h3>
              <p>{course.desc}</p>
            </div>
          </div>
          <div>
            <Button label={"Add Section"} onClick={() => showModal()} />
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:flex gap-5 space-y-8 lg:space-y-0">
        <div className="lg:w-[25rem] bg-white rounded p-5 shadow">
          <div>
            <h3 className="font-semibold text-base">Table of contents</h3>
            <p className="text-gray-600 mt-1 text-sm">
              Last updated on 06th Oct, 2022
            </p>
          </div>
          <div className="my-5">
            <ul>
              {[...Array(10)].map((x, i) => {
                return (
                  <li className="bg-gray-100 px-2 py-1 flex justify-between items-center mb-3">
                    <div>{i + 1}. Introduction</div>
                    <div className="text-xs">2 lessons | 24 mins</div>
                  </li>
                );
              })}
              <li className="px-2 py-1">
                <div>
                  <span className="font-bold italic float-right ">
                    Total
                    <span className="font-normal text-xs not-italic ml-5">
                      40 topics | 4.6hrs
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
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
