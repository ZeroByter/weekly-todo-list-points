"use client";

import { useState } from "react";
import css from "./page.module.scss";
import TasksPage from "./pages/tasks";
import SettingsPage from "./pages/settings";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleSetCurrentPage = (index: number) => {
    return () => {
      setCurrentPage(index);
    };
  };

  return (
    <div className={css.root}>
      <div className={css.navbar}>
        <button className={css.navbarButton} onClick={handleSetCurrentPage(0)}>
          tasks
        </button>
        <button className={css.navbarButton} onClick={handleSetCurrentPage(1)}>
          rewards
        </button>
        <button className={css.navbarButton} onClick={handleSetCurrentPage(2)}>
          settings
        </button>
      </div>
      {currentPage == 0 && <TasksPage />}
      {currentPage == 2 && <SettingsPage />}
    </div>
  );
}
