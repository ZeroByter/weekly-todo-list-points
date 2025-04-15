"use client";

import { useMainData } from "@/app/contexts/mainData";
import { FC } from "react";
import Task from "./task";
import css from "./table.module.scss";

const TasksTable: FC = () => {
  const { tasks } = useMainData();

  const renderTasks = tasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>text</th>
          <th>points</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>{renderTasks}</tbody>
    </table>
  );
};

export default TasksTable;
