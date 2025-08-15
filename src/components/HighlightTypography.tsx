import Typography, { TypographyProps } from "@mui/material/Typography";

interface HighLightTypographyProps extends TypographyProps {
  text: string;
  highlight?: string[];
  highlightProps?: TypographyProps;
}

function HighLightTypography({
  text,
  highlight,
  highlightProps,
  ...props
}: HighLightTypographyProps) {
  if (!highlight || highlight.length == 0)
    return <Typography {...props}>{text}</Typography>;

  const regex = new RegExp(`(${highlight.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <Typography {...props}>
      {parts.map((part) =>
        highlight.includes(part) ? (
          <Typography key={part} component="span" {...highlightProps}>
            {part}
          </Typography>
        ) : (
          part
        )
      )}
    </Typography>
  );
}

export default HighLightTypography;
