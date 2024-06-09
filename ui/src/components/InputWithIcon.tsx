import { Divider, IconButton } from "@mui/material";
import { StandardInput } from "./Input";
import {
  CSSProperties,
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";

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
      {children && (
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      )}
      <IconButton onClick={onClick} disabled={disabled} type={type}>
        {children}
      </IconButton>
    </StandardInput>
  );
};
