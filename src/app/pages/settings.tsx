import { FC } from "react";

const SettingsPage: FC = () => {
  return (
    <div>
      <div>
        tasks <button>add task</button>
      </div>
      <div>
        <div>
          <span>lol task</span>
          <button>delete</button>
        </div>
        <div>
          <span>lol task</span>
          <button>delete</button>
        </div>
        <div>
          <span>lol task</span>
          <button>delete</button>
        </div>
      </div>
      <div>
        rewards <button>add reward</button>
      </div>
      <div>
        <div>
          <span>lol reward</span>
          <button>delete</button>
        </div>
        <div>
          <span>lol reward</span>
          <button>delete</button>
        </div>
        <div>
          <span>lol reward</span>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
