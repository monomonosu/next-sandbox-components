import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const CustomReactCalendar = styled(ReactCalendar)`
  border: 0px;

  .react-calendar__tile {
    line-height: 30px;
  }

  /* 日が表示されるのを防ぐ */
  abbr {
    display: none;
  }

  .react-calendar__tile.highlight {
    background: #1976d2;
    border-radius: 50%;
  }

  /* highlightクラスが適用されているときのhoverおよびfocusスタイル */
  .react-calendar__tile.highlight:enabled:hover,
  .react-calendar__tile.highlight:enabled:focus {
    background: #1976d2;
    border-radius: 50%;
  }

  /* アクティブなタイルのスタイルをリセット */
  .react-calendar__tile--active {
    background: transparent;
    color: black;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: transparent;
  }

  // 土曜日の文字を青色に
  .react-calendar__tile:nth-of-type(7n) {
    color: #0066ff;
  }

  // 来月の文字はグレーに
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575 !important;
  }
`;

export const BasicReactCalendar = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  useEffect(() => {
    console.log(selectedDates);
  }, [selectedDates]);

  const onChange = (date: Date) => {
    if (Array.isArray(date)) {
      return; // 複数の日付が一度に選択されることは想定していないため、この場合は何もしない。
    }

    if (
      selectedDates.some(
        (selectedDate) => selectedDate.getTime() === date.getTime(),
      )
    ) {
      // すでに選択されている日付の場合、選択を解除する
      setSelectedDates((prev) =>
        prev.filter((d) => d.getTime() !== date.getTime()),
      );
    } else {
      // 新しく選択された日付の場合、選択リストに追加する
      setSelectedDates((prev) => [...prev, date]);
    }
  };
  return (
    <div>
      <CustomReactCalendar
        onChange={(e) => onChange(e as Date)}
        calendarType="US"
        locale="ja"
        minDate={new Date()}
        tileClassName={({ date, view }) => {
          if (
            view === "month" &&
            selectedDates.some(
              (selectedDate) => selectedDate.getTime() === date.getTime(),
            )
          ) {
            return "highlight"; // 選択された日付のタイルに'highlight'クラスを追加
          }
        }}
        tileContent={({ date, view }) => {
          if (view === "month") {
            return <span>{date.getDate()}</span>; // 日付のみを返します
          }
          return null;
        }}
      />
    </div>
  );
};
