import {
  CSSProperties,
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";
import { Divider, IconButton } from "@mui/material";
import { StandardInput } from "./Input";

type Props = {
  style?: CSSProperties | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: VariantTypeInput;
  color?: ColorType;
  value: any;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  placeholder?: string;
  children?: ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputWithIcon: React.FC<Props> = ({
  onChange,
  value,
  children,
  placeholder,
  variant,
  color,
  onClick,
  disabled,
  type,
  ...rest
}: Props) => {
  return (
    <StandardInput
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      variant={variant}
      color={color}
      {...rest}
    >
      {children && <Divider orientation="vertical" />}
      <IconButton onClick={onClick} disabled={disabled} type={type}>
        {children}
      </IconButton>
    </StandardInput>
  );
};
