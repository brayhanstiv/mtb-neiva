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
  ref?: React.RefObject<HTMLInputElement> | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const MainInput = (props: MainInputProps) => {
  return (
    <Input
      className={props.className}
      autoFocus={props.autofocus}
      startContent={props.startContent}
      endContent={props.endContent}
      placeholder={props.placeholder}
      onChange={props.onChange}
      ref={props.ref}
      label={props.label}
      type={props.type}
      labelPlacement="outside"
      variant="bordered"
    />
  );
};

export default MainInput;
