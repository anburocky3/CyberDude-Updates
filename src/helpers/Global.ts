import dayjs from "dayjs";
import { ButtonSizes, Stages } from "types/Global";

export const stageClasses = (stage: Stages) => {
  const general = "px-4 py-1 rounded  text-white uppercase text-xs";
  switch (stage) {
    case Stages.suggestions:
      return general + " bg-gray-400 hover:bg-gray-600";
    case Stages.planned:
      return general + " bg-blue-500 hover:bg-blue-600";
    case Stages.inDevelopment:
      return general + " bg-indigo-500 hover:bg-indigo-600";
    case Stages.readyToWatch:
      return general + " bg-green-500 hover:bg-green-600";
  }
};

export const getSizeClasses = (size: ButtonSizes | undefined) => {
  switch (size) {
    case ButtonSizes.xs:
      return "px-2 py-1 text-xs";
    case ButtonSizes.sm:
      return "px-2 py-1 text-sm";
    case ButtonSizes.lg:
      return "px-2 py-1 text-sm";
    case ButtonSizes.xlg:
      return "px-2 py-1 text-sm";
    default:
      return "px-4 py-2";
  }
};

export const dateFormat = (value: string, format?: string) => {
  return dayjs(value).format("D MMM, YYYY");
};
