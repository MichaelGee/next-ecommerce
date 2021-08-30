import { Div, Image, Text } from 'atomize'
import { PrimaryButton } from 'components/atoms/Button/Button';
import placeholder from 'public/assets/images/shoe.jpg'
import React from 'react';
import { Flex } from 'rebass'

interface IImage {
    src: string;
}


export const ProductCard = (props: IImage) => {
    const { src } = props;
    return (
        <Div w={{xs: '10rem', md: '15rem'}} maxW='17rem'  rounded='3' >
            <Image src={placeholder.src} placeholder="blur" maxH='17rem' />
            <Flex align='center'>
                <Text tag='h3' m={{ r: '1rem' }} textSize={{ xs: 'caption', md: 'body'}}>Nike Cortez</Text>
                <Text tag='h3' textSize={{ xs: 'caption', md: 'body'}}>$300</Text>
            </Flex>
            <Text tag='p' textSize='tiny'>
                Same manufacturer as Alexander Wang & Armani
            </Text>
            <PrimaryButton text='ADD TO CART' bg='brand01' padding={{ y: '0.5rem', x: '0.5rem'}} textSize={{ xs: 'tiny', md: 'caption'}} width='100%' m={{ y: '0.5rem' }} hoverBg="contrast01"/>
        </Div>
    )
}
