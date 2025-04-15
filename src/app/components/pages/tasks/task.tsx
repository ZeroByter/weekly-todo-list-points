import { useMainData } from "@/app/contexts/mainData";
import { dateToWeekIndex } from "@/app/utils";
import TaskType from "@/types/task";
import { FC } from "react";

type Props = {
  task: TaskType;
};

const Task: FC<Props> = ({ task }) => {
  const { tasksPerWeek, setTasksPerWeek, currentWeekDate } = useMainData();

  const weekIndex = dateToWeekIndex(currentWeekDate);

  const getIsChecked = () => {
    if (!(weekIndex in tasksPerWeek)) {
      return false;
    }

    return tasksPerWeek[weekIndex].includes(task.id);
  };

  const isChecked = getIsChecked();

  const handleCheckedChange = () => {
    if (!(weekIndex in tasksPerWeek)) {
      setTasksPerWeek({ ...tasksPerWeek, [weekIndex]: [] });
    }

    setTasksPerWeek({
      ...tasksPerWeek,
      [weekIndex]: isChecked
        ? tasksPerWeek[weekIndex].filter((loopTaskId) => loopTaskId != task.id)
        : [...tasksPerWeek[weekIndex], task.id],
    });
  };

  return (
    <tr>
      <td>{task.description}</td>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckedChange}
        />
      </td>
    </tr>
  );
};

export default Task;
