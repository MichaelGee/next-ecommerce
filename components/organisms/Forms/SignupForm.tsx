import { PrimaryButton } from 'components/atoms/Button/Button'
import { InputComponent } from 'components/atoms/Input/Input'
import { Div, Icon, Text } from 'atomize'
import { ModalComponent } from '../Modal/Modal'

interface ISignupForm {
    isOpen: boolean;
    onClose: Function;
}

export const SignupForm = (props: ISignupForm) => {
    const { isOpen, onClose } = props
    return (
        // @ts-ignore 
        <ModalComponent isOpen={isOpen} onClose={onClose} maxW="24rem">
            <Div d='flex' flexDir='column' w='100%' >
                <Text tag="h1" textSize="heading" textAlign="center" m={{ b: "1rem" }}>
                    Sign Up
                </Text>
                <InputComponent prefix={<Icon
                    name="User"
                    size="20px"
                    cursor="pointer"
                    pos="absolute"
                    opacity="0.4"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                />} placeholder="Username" rounded='3' type="text" borderFocused="brand04" m={{ y: '0.5rem' }} p={{ x: "2.5rem" }} />
                <InputComponent prefix={<Icon
                    name="Email"
                    size="20px"
                    cursor="pointer"
                    pos="absolute"
                    opacity="0.4"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                />} placeholder="Email" rounded='3' type="email" borderFocused="brand04" m={{ y: '0.5rem' }} p={{ x: "2.5rem" }} />
                <InputComponent prefix={<Icon
                    name="Eye"
                    size="20px"
                    cursor="pointer"
                    pos="absolute"
                    opacity="0.4"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                />} placeholder="Password" rounded='3' borderFocused="brand04" type="password" m={{ y: '0.5rem' }} p={{ x: "2.5rem" }} />
                <InputComponent prefix={<Icon
                    name="Eye"
                    size="20px"
                    cursor="pointer"
                    pos="absolute"
                    opacity="0.4"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                />} placeholder="Re-type password" rounded='3' borderFocused="brand04" type="password" m={{ y: '0.5rem' }} p={{ x: "2.5rem" }} />
                <PrimaryButton text='Submit' bg="brand01"
                    shadow="1"
                    hoverShadow="4"
                    rounded='3'
                    textSize="caption"
                    padding='1rem 2rem'
                    width='100vw'
                    m={{ y: '0.5rem' }}
                />
            </Div>
        </ModalComponent>
    )
}
