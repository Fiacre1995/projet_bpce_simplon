import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import { date } from "../services/converters";

import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <h2>
          {date}
      </h2>
    </div>
  );
};
