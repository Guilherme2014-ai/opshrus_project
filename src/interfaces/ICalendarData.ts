import TMonths from "./TMonths";

interface IMonth {
  name: TMonths;
  daysQuantity: number;

  schedules?: {
    day: number;
    time: string;
  };
}

interface ICalendarData {
  months: IMonth[];
}

export type { IMonth, ICalendarData };
