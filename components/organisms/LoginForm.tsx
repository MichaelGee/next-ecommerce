import { PrimaryButton } from 'components/atoms/Button'
import { InputComponent } from 'components/atoms/Input'
import React from 'react'
import { Div } from 'react-atomize'

export const LoginForm = () => {
    return (
        <Div>
            <InputComponent placeholder="Email" rounded='25' borderFocused="brand04" />
            <InputComponent placeholder="Password" rounded='25' borderFocused="brand04" type="password" />
            <PrimaryButton text='Log in' bg="brand01"
                shadow="1"
                hoverShadow="4"
                rounded='25'
                fontSize="caption"
                padding='1rem 2rem'
                width='100vw'
            />
        </Div>
    )
}
