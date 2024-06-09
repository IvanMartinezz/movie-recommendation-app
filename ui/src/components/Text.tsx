import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CSSProperties } from "react";

interface Props {
  style?: CSSProperties;
  children?: JSX.Element | string;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  className?: string;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  type?:
    | "bold"
    | "bolder"
    | "inherit"
    | "initial"
    | "lighter"
    | "normal"
    | "revert"
    | "unset";
  textType?: "h1" | "h2" | "title" | "subtitle" | "text";
}

const fontSizes = {
  h1: { mobile: "28px", web: "40px" },
  h2: { mobile: "22px", web: "32px" },
  title: { mobile: "18px", web: "24px" },
  subtitle: { mobile: "16px", web: "20px" },
  text: { mobile: "14px", web: "16px" },
};

export const Text = ({
  children,
  color,
  style,
  variant,
  type,
  className,
  textType = "text",
}: Props) => {
  const theme = useTheme();
  const { mobile, web } = fontSizes[textType];

  return (
    <Typography
      sx={{
        fontWeight: type,
        fontSize: mobile,
        [theme.breakpoints.up("sm")]: {
          fontSize: web,
        },
      }}
      className={className}
      color={color}
      variant={variant}
      style={style}
    >
      {children}
    </Typography>
  );
};
