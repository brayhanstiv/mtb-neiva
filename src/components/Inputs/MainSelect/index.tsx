// Packages
import { ReactNode } from "react";
import { Select, SelectItem } from "@nextui-org/react";

type MainSelectProps = {
  label?: string | undefined;
  placeholder?: string | undefined;
  startContent?: ReactNode | undefined;
  endContent?: ReactNode | undefined;
  value?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  data: any[];
};

const MainSelect = (props: MainSelectProps) => {
  return (
    <Select
      isRequired
      items={props.data}
      defaultSelectedKeys={props.data[0].name}
      label={props.label}
      placeholder={props.placeholder}
      startContent={props.startContent}
      endContent={props.endContent}
      labelPlacement="outside"
      variant="bordered"
      selectedKeys={props.value}
      onChange={props.onChange}
    >
      {(value) => <SelectItem key={value.name}>{value.name}</SelectItem>}
    </Select>
  );
};

export default MainSelect;
