import { Button } from "atomize";


interface IButtonProps {
  text?: string;
  textSize?: string | object;
  padding?: string | object;
  bg?: string;
  shadow?: string;
  rounded?: string;
  fontFamily?: string;
  hoverShadow?: string;
  iconPosition?: string;
  suffix?: Element;
  prefix?: Element;
  width?: string;
  m?: object;
  textTransform?: string;
  hoverBg?: string;
  onClick?: Function;
}

export const PrimaryButton = (props: IButtonProps) => {
  const {text, padding, bg, rounded, shadow, hoverShadow, suffix, prefix, textSize, fontFamily, width, m, textTransform, hoverBg, onClick} = props;

  return (
   <div id='button'>
    <Button
      bg={bg}
      shadow={shadow}
      hoverShadow={hoverShadow}
      rounded={rounded}
      textSize={textSize}
      fontFamily={fontFamily}
      p={padding}
      suffix={suffix}
      prefix={prefix}
      w={width}
      m={m}
      textTransform={textTransform}
      hoverBg={hoverBg}
      onClick={onClick}
    >
      {text}
    </Button>
   </div>
  )
}