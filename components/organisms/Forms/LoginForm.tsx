import { PrimaryButton } from 'components/atoms/Button/Button'
import { InputComponent } from 'components/atoms/Input/Input'
import { Div, Icon, Text } from 'atomize'
import { ModalComponent } from '../Modal/Modal'
import { CheckboxComponent } from 'components/atoms/Checkbox/Checkbox'
import {useState} from 'react'
import {Flex} from 'rebass';

interface ILoginForm {
    isOpen: boolean;
    onClose: Function;
}

export const LoginForm = (props: ILoginForm) => {
    const { isOpen, onClose } = props;
    const [remember, setRemember] = useState<boolean>(false);
    const onChange = () =>{
       setRemember(v => !v);
     }    
     return (
        // @ts-ignore 
        <ModalComponent isOpen={isOpen} onClose={onClose} maxW="24rem">
            <Div tag='form' d='flex' flexDir='column' w='100%' >
                <Text tag="h1" textSize="heading" textAlign="center" m={{ b: "1rem" }}>
                    LOGIN
                </Text>
                <InputComponent prefix={<Icon
                    name="Email"
                    size="20px"
                    cursor="pointer"
                    pos="absolute"
                    opacity="0.4"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                    color='brand04'
                />} placeholder="Email" borderColor="#DDDDDD" rounded='25'  borderFocused="brand04" m={{ y: '0.5rem' }} p={{ x: "2.5rem", y: '1.1rem' }} />
                <InputComponent prefix={<Icon
                    name="Eye"
                    size="20px"
                    cursor="pointer"
                    pos="absolute"
                    opacity="0.4"
                    top="50%"
                    left="0.75rem"
                    transform="translateY(-50%)"
                    color='brand04'
                />} placeholder="Password" borderColor="#DDDDDD" rounded='25' borderFocused="brand04"  type="password" m={{ y: '0.5rem' }} p={{ x: "2.5rem", y: '1.1rem' }} />
                <PrimaryButton text='SUBMIT' bg="brand01"
                    shadow="1"
                    hoverShadow="4"
                    rounded='25'
                    textSize="caption"
                    padding='1rem 2rem'
                    width='100%'
                    m={{ y: '0.5rem' }}
                />
                <Flex justifyContent="space-between" mt='0.5rem'>
                    <CheckboxComponent text="Remember me" size="18px" textSize="caption" checked={remember} onChange={onChange} />
                    <Text tag='a' textSize="caption" textDecor='underline' textColor='black'>Forgotten password?</Text>
                </Flex>
            </Div>
        </ModalComponent>
    )
}
