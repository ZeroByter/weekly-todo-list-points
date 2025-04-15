"use client";

import { useMainData } from "@/app/contexts/mainData";
import RewardType from "@/types/rewards";
import { FC } from "react";

type Props = {
  reward: RewardType;
};

const Reward: FC<Props> = ({ reward }) => {
  const { rewards, setRewards } = useMainData();

  const handleTaskNewDescription = (newDescription: string) => {
    setRewards(
      rewards.map((loopReward) => {
        if (loopReward.id == reward.id) {
          return {
            ...loopReward,
            description: newDescription,
          };
        } else {
          return loopReward;
        }
      })
    );
  };

  const handleTaskNewPointsForCompletion = (newCost: number) => {
    setRewards(
      rewards.map((loopReward) => {
        if (loopReward.id == reward.id) {
          return {
            ...loopReward,
            cost: newCost,
          };
        } else {
          return loopReward;
        }
      })
    );
  };

  const handleDeleteReward = () => {
    return () =>
      setRewards(rewards.filter((loopReward) => loopReward.id != reward.id));
  };

  return (
    <tr>
      <td>
        <input
          value={reward.description}
          onChange={(e) => handleTaskNewDescription(e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={reward.cost}
          onChange={(e) =>
            handleTaskNewPointsForCompletion(e.target.valueAsNumber)
          }
        />
      </td>
      <td>
        <button onClick={handleDeleteReward()}>delete</button>
      </td>
    </tr>
  );
};

export default Reward;
