import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ja from "date-fns/locale/ja";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/material/styles";
import { PickersDay } from "@mui/x-date-pickers";

export const BasicCalendar = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleDateChange = (newDate) => {
    // すでに選択されている日付であればリストから削除、そうでなければ追加
    if (
      selectedDates.some((date) => date.toISOString() === newDate.toISOString())
    ) {
      setSelectedDates((prev) =>
        prev.filter((date) => date.toISOString() !== newDate.toISOString()),
      );
    } else {
      setSelectedDates((prev) => [...prev, newDate]);
    }

    console.log(selectedDates);
  };

  const CustomDatePickerDay = styled(PickersDay)(() => ({
    backgroundColor: "lightblue",
  }));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <DatePicker
        onChange={handleDateChange}
        slots={{ day: CustomDatePickerDay }}
      />
    </LocalizationProvider>
  );
};
