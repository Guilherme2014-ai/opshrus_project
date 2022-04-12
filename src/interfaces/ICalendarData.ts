interface month {
  name: string;
  daysQuantity: number;

  schedules?: {
    day: number;
    time: string;
  };
}

export default interface ICalendarData {
  months: month[];
}
