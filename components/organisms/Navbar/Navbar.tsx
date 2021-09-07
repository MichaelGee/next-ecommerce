import { PrimaryButton } from 'components/atoms/Button/Button';
import { ModalContext } from 'contexts/ModalContext';
import { FC, useState, useContext } from 'react';
import { Div, Text, Icon } from 'react-atomize';
import { LoginForm } from '../Forms/LoginForm';
import { SignupForm } from '../Forms/SignupForm';


export const Navbar: FC = () => {
    const [hideNavbar, setHideNavbar] = useState(false);
    const { toggleLoginModal, toggleSignupModal, signupModal, loginModal } = useContext(ModalContext);

    const toggleNavbar = () => {
        setHideNavbar(v => !v);
    }
    return (
        <>
        <Div pos="fixed" right='0' left='0' zIndex="100" p={{ y: '1rem', r: '2rem', l: '2rem' }} d="flex" justify="space-between" align="center">
            <Div d={{  sm: 'none', md: 'none', xs: 'none', lg: 'flex' }}>
                <Text cursor="pointer" tag='a' m={{ l: '1rem', r: '1rem' }} textColor='white' textSize="caption" textTransform="uppercase">Women</Text>
                <Text cursor="pointer" tag='a' m={{ l: '1rem', r: '1rem' }} textColor='white' textSize="caption" textTransform="uppercase">Men</Text>
                <Text cursor="pointer" tag='a' m={{ l: '1rem', r: '1rem' }} textColor='white' textSize="caption" textTransform="uppercase">Home</Text>
                <Text cursor="pointer" tag='a' m={{ l: '1rem', r: '1rem' }} textColor='white' textSize="caption" textTransform="uppercase">New Arrivals</Text>
                <Text cursor="pointer" tag='a' m={{ l: '1rem', r: '1rem' }} textColor='white' textSize="caption" textTransform="uppercase">Comming Soon</Text>
            </Div>
            <Text tag='h1' textSize="title" textColor='white' className='logo'>
                Grandior
            </Text>
            <Div d={{ m: 'none', md: 'none', xs: 'none', lg: 'flex' }} align="center" justify="center">
                <Text cursor="pointer" tag='a' m={{ l: '1rem', r: '1rem' }} textColor='white' textSize="caption" textTransform="uppercase">How It Works</Text>
                <Text cursor="pointer" tag='a' m={{ l: '1rem', r: '1rem' }} textColor='white' textSize="caption" textTransform="uppercase">Contact</Text>
                <PrimaryButton text='Log in' bg="brand01"
                    shadow="1"
                    hoverShadow="4"
                    rounded='25'
                    textSize="caption"
                    padding='1rem 2rem'
                    textTransform="uppercase"
                    m={{l: '1rem'}}
                    onClick={()=> toggleLoginModal()}
                />
                <PrimaryButton text='Sign up' bg="brand01"
                    shadow="1"
                    hoverShadow="4"
                    rounded='25'
                    textSize="caption"
                    padding='1rem 2rem'
                    textTransform="uppercase"
                    m={{l: '1rem'}}
                    onClick={()=> toggleSignupModal()}
                />
            </Div>
            <Icon cursor="pointer" size="1.5rem" onClick={toggleNavbar}  d={{ lg: 'none', md: 'flex' }} name={hideNavbar === false ? 'Menu' : 'Cross'} />
        </Div>
        <Div bg='white' pos='absolute' top='0' right='0' left='0' zIndex='-1' p={{ b: '2rem', r: '1.5rem', l: '1.5rem',  t: '3rem'}} h="100vh" transition="all 0.4s ease-in-out" opacity={hideNavbar === false ? '0' : '1'} transform= {hideNavbar === false ? "translateY(-100px)" : "translateY(0)"}>
            <Div>
                <Text cursor="pointer" tag='a' m={{ y: '1rem',  }} textColor='black' textSize="caption" textTransform="uppercase">Women</Text>
                <Text cursor="pointer" tag='a' m={{ y: '1rem',  }} textColor='black' textSize="caption" textTransform="uppercase">Men</Text>
                <Text cursor="pointer" tag='a' m={{ y: '1rem', }} textColor='black' textSize="caption" textTransform="uppercase">Home</Text>
                <Text cursor="pointer" tag='a' m={{ y: '1rem', }} textColor='black' textSize="caption" textTransform="uppercase">New Arrivals</Text>
                <Text cursor="pointer" tag='a' m={{ y: '1rem', }} textColor='black' textSize="caption" textTransform="uppercase">Comming Soon</Text>
                <Text cursor="pointer" tag='a' m={{ y: '1rem', }} textColor='black' textSize="caption" textTransform="uppercase">How It Works</Text>
                <Text cursor="pointer" tag='a'  m={{ y: '1rem', }} textColor='black' textSize="caption" textTransform="uppercase">Contact</Text>
            </Div>
            </Div>
            {/* @ts-ignore  */}
            <LoginForm isOpen={loginModal} onClose={toggleLoginModal}/>
            <SignupForm isOpen={signupModal} onClose={toggleSignupModal}/>
        </>
    )
}
