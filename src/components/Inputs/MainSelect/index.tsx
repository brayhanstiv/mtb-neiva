// Packages
import { ReactNode } from "react";
import { Select, SelectItem } from "@nextui-org/react";

type MainSelectProps = {
  label?: string | undefined;
  placeholder?: string | undefined;
  startContent?: ReactNode | undefined;
  endContent?: ReactNode | undefined;
  data: any[];
};

const MainSelect = (props: MainSelectProps) => {
  return (
    <Select
      defaultSelectedKeys={props.data[0].name}
      label={props.label}
      placeholder={props.placeholder}
      startContent={props.startContent}
      endContent={props.endContent}
      labelPlacement="outside"
      variant="bordered"
    >
      {props.data.map((value) => (
        <SelectItem key={value.key}>{value.name}</SelectItem>
      ))}
    </Select>
  );
};

export default MainSelect;
