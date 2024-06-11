import { ChangeEventHandler, ReactNode } from "react";
import { Box, InputBase } from "@mui/material";

type Props = {
  variant?: VariantTypeInput;
  color?: ColorType;
  value: any;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  placeholder?: string;
  children?: ReactNode;
};

export const StandardInput = ({
  value,
  onChange,
  color,
  placeholder,
  children,
}: Props) => {
  const handleOnChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <Box
      width={{ xs: "60vw", sm: "30vw" }}
      height={{ xs: "30px", sm: "40px" }}
      padding={{ xs: "0", sm: "4px 6px" }}
      display="flex"
      alignItems="center"
      style={{ backgroundColor: "white" }}
      borderRadius="5px"
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        color={color}
      />
      {children}
    </Box>
  );
};
