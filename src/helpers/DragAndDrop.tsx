import { ReactNode } from "react";
import {
  DragDropContext as DragAndDrop,
  Draggable,
  Droppable,
} from "react-beautiful-dnd";

export const Drag = ({
  id,
  index,
  children,
  className,
  ...props
}: {
  id: string;
  index: number;
  children: ReactNode;
  className: string;
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        return (
          <div
            className="flex flex-row-reverse"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...props}
          >
            <div
              className="drag-handle cursor-grabbing"
              {...provided.dragHandleProps}
            >
              <svg className="w-6 mt-3 h-6 opacity-75" viewBox="0 0 24 24">
                <path
                  fill="#fb923c"
                  d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                />
              </svg>
            </div>
            {children}
          </div>
        );
      }}
    </Draggable>
  );
};

export const Drop = ({
  id,
  type,
  ...props
}: {
  id: string;
  type: string;
  children: ReactNode;
}) => {
  return (
    <Droppable droppableId={id} type={type}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps} {...props}>
            {props.children}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export { DragAndDrop };
