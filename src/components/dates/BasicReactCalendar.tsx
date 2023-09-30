import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const CustomReactCalendar = styled(ReactCalendar)`
  .react-calendar__tile.highlight {
    background: lightblue;
  }

  /* highlightクラスが適用されているときのhoverおよびfocusスタイル */
  .react-calendar__tile.highlight:enabled:hover,
  .react-calendar__tile.highlight:enabled:focus {
    background: lightblue;
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
`;

export const BasicReactCalendar = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  useEffect(() => {
    console.log(selectedDates);
  }, [selectedDates]);

  const onChange = (date) => {
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
        onChange={(e) => onChange(e)}
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
      />
    </div>
  );
};
