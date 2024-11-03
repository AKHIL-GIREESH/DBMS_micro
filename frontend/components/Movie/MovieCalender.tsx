import { Calendar } from "../../src/components/ui/calendar";

interface MovieCalendarProps {
  date: Date;
  modifyDate: (newDate: Date) => void;
}

const MovieCalender: React.FC<MovieCalendarProps> = ({ date, modifyDate }) => {
  console.log(date);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={(newDate) => {
        if (newDate) {
          modifyDate(newDate); // Call modifyDate with the new date
        }
      }}
      className="rounded-md border border-light border-opacity-60 text-white"
    />
  );
};

export default MovieCalender;