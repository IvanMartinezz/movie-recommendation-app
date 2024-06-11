import { Typography, TypographyProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface Props extends TypographyProps {
  textType?: "h1" | "h2" | "title" | "subtitle" | "text" | "overline";
}

const fontSizes = {
  h1: { mobile: "28px", web: "40px" },
  h2: { mobile: "22px", web: "32px" },
  title: { mobile: "18px", web: "24px" },
  subtitle: { mobile: "16px", web: "20px" },
  text: { mobile: "14px", web: "16px" },
  overline: { mobile: "0.35rem", web: "0.75rem" },
};

const letterSpacings = {
  h1: { mobile: "0px", web: "1px" },
  h2: { mobile: "0px", web: "1px" },
  title: { mobile: "0px", web: "0.5px" },
  subtitle: { mobile: "0px", web: "0.5px" },
  text: { mobile: "0px", web: "0.25px" },
  overline: { mobile: "0", web: "0.25px" },
};

export const Text = ({
  children,
  textType = "text",
  component = "div",
  display,
  variant,
  color,
  ...rest
}: Props) => {
  const theme = useTheme();
  const { mobile: fontSizeMobile, web: fontSizeWeb } = fontSizes[textType];
  const { mobile: letterSpacingMobile, web: letterSpacingWeb } =
    letterSpacings[textType];

  return (
    <Typography
      component={component}
      display={display}
      variant={variant}
      color={color}
      sx={{
        fontSize: fontSizeMobile,
        letterSpacing: letterSpacingMobile,
        [theme.breakpoints.up("sm")]: {
          fontSize: fontSizeWeb,
          letterSpacing: letterSpacingWeb,
        },
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
