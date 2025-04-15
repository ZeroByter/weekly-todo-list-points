"use client";

import { ChangeEvent, FC } from "react";
import Task from "../components/pages/tasks/task";
import { useMainData } from "../contexts/mainData";
import { dateToWeekIndex, dayInMiliseconds, weekIndexToDate } from "../utils";
import css from "./tasks.module.scss";
import useIsClient from "../components/isClientHook";

const formatDateForInput = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const TasksPage: FC = () => {
  const { tasks, currentWeekDate, setCurrentWeekDate } = useMainData();

  const isClient = useIsClient();

  const weekIndex = dateToWeekIndex(currentWeekDate);
  const currentWeekFirstDate = weekIndexToDate(weekIndex);
  const currentWeekLastDate = new Date(
    currentWeekFirstDate.getTime() + dayInMiliseconds * 6
  );

  const handleWeekChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.valueAsDate;

    if (newDate) {
      setCurrentWeekDate(newDate);
    }
  };

  const renderTasks = (isClient ? tasks : []).map((task) => (
    <Task key={task.id} task={task} />
  ));

  return (
    <div className={css.root}>
      <div className={css.weekSelection}>
        <input
          className={css.input}
          type="date"
          value={formatDateForInput(currentWeekDate)}
          onChange={handleWeekChange}
        />
        <div>
          {currentWeekFirstDate.toLocaleDateString("en-il")}-
          {currentWeekLastDate.toLocaleDateString("en-il")} ({weekIndex})
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>task</th>
              <th>done?</th>
            </tr>
          </thead>
          <tbody>{renderTasks}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksPage;
