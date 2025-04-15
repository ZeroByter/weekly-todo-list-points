"use client";

import { createContext, useContext, FC, ReactNode } from "react";
import TaskType from "@/types/task";
import RewardType from "@/types/rewards";
import { useLocalStorageState } from "ahooks";

type ContextType = {
  tasks: TaskType[];
  setTasks: (newTasks: TaskType[]) => void;

  rewards: RewardType[];
  setRewards: (newRewards: RewardType[]) => void;

  tasksPerWeek: { [weekIndex: number]: string[] };
  setTasksPerWeek: (newTasksPerWeek: { [weekIndex: number]: string[] }) => void;

  rewardsPerWeek: { [weekIndex: number]: string[] };
  setRewardsPerWeek: (newRewardsPerWeek: {
    [weekIndex: number]: string[];
  }) => void;

  points: number;
  setPoints: (newPoints: number) => void;
};

export const MainDataContext = createContext<ContextType>({} as ContextType);

type Props = {
  children: ReactNode;
};

const MainDataContextProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useLocalStorageState<TaskType[]>("tasks", {
    defaultValue: [],
  });
  const [rewards, setRewards] = useLocalStorageState<RewardType[]>("rewards", {
    defaultValue: [],
  });
  const [tasksPerWeek, setTasksPerWeek] = useLocalStorageState<{
    [weekIndex: number]: string[];
  }>("tasksPerWeek", { defaultValue: {} });
  const [rewardsPerWeek, setRewardsPerWeek] = useLocalStorageState<{
    [weekIndex: number]: string[];
  }>("rewardsPerWeek", { defaultValue: {} });
  const [points, setPoints] = useLocalStorageState<number>("points", {
    defaultValue: 0,
  });

  return (
    <MainDataContext.Provider
      value={{
        tasks: tasks || [],
        setTasks,
        rewards: rewards || [],
        setRewards,
        tasksPerWeek: tasksPerWeek || {},
        setTasksPerWeek,
        rewardsPerWeek: rewardsPerWeek || {},
        setRewardsPerWeek,
        points: points || 0,
        setPoints,
      }}
    >
      {children}
    </MainDataContext.Provider>
  );
};

export default MainDataContextProvider;

export const useMainData = () => {
  return useContext(MainDataContext);
};
