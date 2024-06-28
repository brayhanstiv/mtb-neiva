// Packages
import { ReactNode } from "react";
import { Input } from "@nextui-org/react";

type MainInputProps = {
  autofocus?: boolean | undefined;
  startContent?: ReactNode | undefined;
  endContent?: ReactNode | undefined;
  placeholder?: string | undefined;
  type?: string | undefined;
  label?: string | undefined;
  className?: string | undefined;
  reference?: React.RefObject<HTMLInputElement> | undefined;
  value?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onValueChange?: ((value: string) => void) | undefined;
};

const MainInput = (props: MainInputProps) => {
  return (
    <Input
      isRequired
      className={props.className}
      autoFocus={props.autofocus}
      startContent={props.startContent}
      endContent={props.endContent}
      placeholder={props.placeholder}
      onChange={props.onChange}
      ref={props.reference}
      label={props.label}
      type={props.type}
      labelPlacement="outside"
      variant="bordered"
      value={props.value}
      onValueChange={props.onValueChange}
    />
  );
};

export default MainInput;
