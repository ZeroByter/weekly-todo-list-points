"use client";

import { useMainData } from "@/app/contexts/mainData";
import { FC } from "react";
import Reward from "./reward";
import css from "./table.module.scss";

const RewardsTable: FC = () => {
  const { rewards } = useMainData();

  const renderRewards = rewards.map((reward) => {
    return <Reward key={reward.id} reward={reward} />;
  });

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>text</th>
          <th>cost</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>{renderRewards}</tbody>
    </table>
  );
};

export default RewardsTable;
