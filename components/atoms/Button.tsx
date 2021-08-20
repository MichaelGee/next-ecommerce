import { Button, Icon } from "atomize";


interface IButtonProps {
  text: string;
  fontSize: string;
  padding: string;
  bg: string;
  shadow: string;
  rounded: string;
  fontFamily: string;
  hoverShadow: string;
  iconPosition: string;
  suffix: Element;
  prefix: Element;
  width: string;
  m: object;
}

export const PrimaryButton = (props: IButtonProps) => {
  const {text, padding, bg, rounded, shadow, hoverShadow, suffix, prefix, fontSize, fontFamily, width, m} = props;




  return (
   <>
    <Button
      bg={bg}
      shadow={shadow}
      hoverShadow={hoverShadow}
      rounded={rounded}
      fontSize={fontSize}
      fontFamily={fontFamily}
      p={padding}
      suffix={suffix}
      prefix={prefix}
      width={width}
      m={m}
    >
      {text}
    </Button>
   </>
  )
}