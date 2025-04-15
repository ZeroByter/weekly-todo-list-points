"use client";

import { useMainData } from "@/app/contexts/mainData";
import TaskType from "@/types/task";
import { FC } from "react";

type Props = {
  task: TaskType;
};

const Task: FC<Props> = ({ task }) => {
  const { tasks, setTasks } = useMainData();

  const handleTaskNewDescription = (newDescription: string) => {
    setTasks(
      tasks.map((loopTask) => {
        if (loopTask.id == task.id) {
          return {
            ...loopTask,
            description: newDescription,
          };
        } else {
          return loopTask;
        }
      })
    );
  };

  const handleTaskNewPointsForCompletion = (newPointsForCompletion: number) => {
    setTasks(
      tasks.map((loopTask) => {
        if (loopTask.id == task.id) {
          return {
            ...loopTask,
            pointsForCompletion: newPointsForCompletion,
          };
        } else {
          return loopTask;
        }
      })
    );
  };

  const handleDeleteTask = () => {
    return () => setTasks(tasks.filter((loopTask) => loopTask.id != task.id));
  };

  return (
    <tr>
      <td>
        <input
          value={task.description}
          onChange={(e) => handleTaskNewDescription(e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={task.pointsForCompletion}
          onChange={(e) =>
            handleTaskNewPointsForCompletion(e.target.valueAsNumber)
          }
        />
      </td>
      <td>
        <button onClick={handleDeleteTask()}>delete</button>
      </td>
    </tr>
  );
};

export default Task;
