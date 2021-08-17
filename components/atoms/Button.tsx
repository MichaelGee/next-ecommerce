import { Button, Icon } from "atomize";

export const PrimaryButton = () => {
    return (
      <>
        <Button
        suffix={
          <Icon
            name="LongRight"
            size="16px"
            color="white"
            m={{ l: "1rem" }}
          />
        }
        shadow="3"
        hoverShadow="4"
        m={{ r: "1rem" }}
      >
        Contact Us
      </Button>
      </>
    )
}
