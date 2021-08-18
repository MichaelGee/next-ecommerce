import { Button, Icon } from "atomize";


export const PrimaryButton = ({text}) => {

  return (
   
    <Button
      bg="brand01"
      shadow="3"
      hoverShadow="4"
    >
      {text}
    </Button>

  )
}