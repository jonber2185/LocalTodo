import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // 기본 스타일 임포트
import styles from './TodoCalendar.module.css';
import formatDate from "../utils/formatDate";
import type Todo from "../types/Todo";


export default function TodoCalendar({ todos, currentDate, setCurrentDate }: {
  todos: Todo[];
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}) {
  const tileContent = ({ date, view }: any) => {
    if (view === 'month' && todos.some(t => t.date === formatDate(date))) {
      return <div className={styles.todoDot} />;
    }
    return null;
  };

  return (
    <div className={styles.calendarWrapper}>
      <h2 className={styles.title}>Todo Planner</h2>
      <Calendar
        onChange={(val) => setCurrentDate(val as Date)}
        value={currentDate}
        tileContent={tileContent}
        formatDay={(_, date) => date.getDate().toString()}
        view="month"
        minDetail="month"
        maxDetail="month"
        prev2Label={null}
        next2Label={null}
      />
    </div>
  );
}