import React, { useEffect } from "react";
import { Scheduler } from "smart-webcomponents-react/scheduler";
import "smart-webcomponents-react/source/styles/smart.default.css";
import "./MyScheduler.css";

function MyScheduler() {
  useEffect(() => {
    // If needed, handle Scheduler setup here
  }, []);

  const currentDate = new Date();

  const dataSource = [
    {
      label: "Design Meeting",
      dateStart: "2025-06-27T09:00:00",
      dateEnd: "2025-06-27T11:00:00",
      timeZone: "Europe/Paris",
    },
    {
      label: "Client Call",
      dateStart: "2025-06-28T13:00:00",
      dateEnd: "2025-06-28T14:30:00",
      timeZone: "America/New_York",
    },
  ];

  const views = ["day", "week", "month", "agenda"];

  return (
    <div>
      <Scheduler
        id="scheduler"
        dataSource={dataSource}
        views={views}
        view="week"
        firstDayOfWeek={1}
        dateCurrent={currentDate}
        timeZone="Europe/Paris"
      />
    </div>
  );
}
export default MyScheduler;
