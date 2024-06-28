// Packages
import { CalendarDate, DatePicker } from "@nextui-org/react";

type DateInputProps = {
  label?: string | undefined;
  value?: CalendarDate | undefined;
  onChange?: ((value: CalendarDate) => void) | undefined;
};

const DateInput = (props: DateInputProps) => {
  return (
    <DatePicker
      isRequired
      label={props.label}
      labelPlacement="outside"
      variant="bordered"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default DateInput;
