import { FC } from "react";
import { useMainData } from "../contexts/mainData";
import { randomId } from "../utils";
import TasksTable from "../components/pages/settings/tasksTable";
import RewardsTable from "../components/pages/settings/rewardsTable";

const SettingsPage: FC = () => {
  const { tasks, setTasks, rewards, setRewards } = useMainData();

  const handleCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: randomId(),
        description: "",
        pointsForCompletion: 0,
      },
    ]);
  };

  const handleCreateReward = () => {
    setRewards([
      ...rewards,
      {
        id: randomId(),
        description: "",
        cost: 0,
      },
    ]);
  };

  return (
    <div>
      <div>
        tasks <button onClick={handleCreateTask}>add task</button>
      </div>
      <TasksTable />
      <div>
        rewards <button onClick={handleCreateReward}>add reward</button>
      </div>
      <RewardsTable />
    </div>
  );
};

export default SettingsPage;
