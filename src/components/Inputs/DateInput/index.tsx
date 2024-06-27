// Packages
import { DatePicker } from "@nextui-org/react";

type DateInputProps = {
  label?: string | undefined;
};

const DateInput = (props: DateInputProps) => {
  return (
    <DatePicker
      label={props.label}
      labelPlacement="outside"
      variant="bordered"
    />
  );
};

export default DateInput;
