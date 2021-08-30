import { InputComponent } from 'components/atoms/Input/Input'
import {Icon} from 'atomize'

export const Searchbar = () => {
    return (
        <div>
          <InputComponent prefix={<Icon
          name="Search"
          size="20px"
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="0.75rem"
          transform="translateY(-50%)"
        />} suffix={<Icon
            name="Cross"
            size="20px"
            cursor="pointer"
            pos="absolute"
            top="50%"
            right="1rem"
            transform="translateY(-50%)"
          />} shadow="3" borderColor="transparent" rounded="10" borderFocused="none" p={{ x: "2.5rem" }} placeholder="What do you want to find?" />  
        </div>
    )
}
