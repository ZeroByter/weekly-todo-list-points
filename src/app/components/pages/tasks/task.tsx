import TaskType from "@/types/task";
import { FC } from "react";

type Props = {
  task: TaskType;
};

const Task: FC<Props> = ({ task }) => {
  return (
    <tr>
      <td>{task.description}</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
};

export default Task;
