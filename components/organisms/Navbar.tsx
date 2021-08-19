import { PrimaryButton } from 'components/atoms/Button';
import { FC } from 'react';
import { Div, Text, Icon } from 'react-atomize';
import { Box } from 'rebass';

export const Navbar: FC = () => {
    return (
        <Div p={{ y: '1rem', r: '2rem', l: '2rem' }} d="flex" justify="space-between" align="center">
            <Box display="flex">
                <Text tag='h1' m={{ l: '1rem', r: '1rem' }} textSize="caption">Women</Text>
                <Text tag='h1' m={{ l: '1rem', r: '1rem' }} textSize="caption">Men</Text>
                <Text tag='h1' m={{ l: '1rem', r: '1rem' }} textSize="caption">Home</Text>
                <Text tag='h1' m={{ l: '1rem', r: '1rem' }} textSize="caption">New Arrivals</Text>
                <Text tag='h1' m={{ l: '1rem', r: '1rem' }} textSize="caption">Comming Soon</Text>
            </Box>
            <Box>
                Logo
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Text tag='h1' m={{ l: '1rem', r: '1rem' }} textSize="caption">How It Works</Text>
                <Text tag='h1' m={{ l: '1rem', r: '1rem' }} textSize="caption">Contact</Text>
                <PrimaryButton text='Log in' bg="brand01"
                    shadow="1"
                    hoverShadow="4"
                    rounded='25'
                    fontSize="caption"
                    padding='1rem 2rem'
                     />
            </Box>
        </Div>
    )
}
