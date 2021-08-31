import React from 'react'
import { Div, Text, Icon } from 'atomize'
import { Box } from 'rebass'
import styled from '@emotion/styled'


const Border = styled(Box)`
 border-top: 1px solid #F7F7F7;
`


export const Footer = () => {
    return (
        <Div w='100%' bg='white'>
            <Div p={{ y: { xs: '3.5rem', md: '1.25rem' }, }}>
                <Border paddingTop='2.5rem' >
                    <Box>
                        <Div d='flex' flexWrap='wrap' m={{ b: '0' }} justify='space-between'>
                            <Div flex={{ sm: '1 1 50%', lg: '1 1 0%', md: '1 1 40%' }} m={{ b: '0', r: '1rem' }} >
                                <Text tag='p' m={{ b: '12px' }} textSize='caption' textWeight='600'>Social</Text>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='a' cursor='pointer' textColor='black'>
                                        <Div d='flex'>
                                            <Icon name='Instagram' m={{ r: '4px' }} size='0.875rem' />
                                            <Div tag='p' textSize='caption'>Instagram</Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='a' cursor='pointer' textColor='black'>
                                        <Div d='flex'>
                                            <Icon name='Twitter' m={{ r: '4px' }} size='0.875rem' />
                                            <Div tag='p' textSize='caption'>Twitter</Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='a' cursor='pointer' textColor='black'>
                                        <Div d='flex'>
                                            <Icon name='Facebook' m={{ r: '4px' }} size='0.875rem' />
                                            <Div  textSize='caption'>Facebook</Div>
                                        </Div>
                                    </Div>
                                </Div>

                            </Div>
                            <Div flex={{ sm: '1 1 50%', lg: '1 1 0%', md: '1 1 40%' }} m={{ b: '0', r: '1rem' }} order={{}}>
                                <Text tag='p' m={{ b: '12px' }} textSize='caption' textWeight='600'>Company</Text>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='p'>
                                        <Div d='flex'>
                                            <Div tag='a' cursor='pointer' textColor='black' textSize='caption'>About Us</Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='p'>
                                        <Div d='flex'>

                                            <Div tag='a' cursor='pointer' textColor='black' textSize='caption'>Career</Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='p'>
                                        <Div d='flex'>

                                            <Div tag='a' cursor='pointer' textColor='black' textSize='caption'>Blog</Div>
                                        </Div>
                                    </Div>
                                </Div>

                            </Div>
                            <Div flex={{ sm: '1 1 50%', lg: '1 1 0%', md: '1 1 40%' }} m={{ b: '0', r: '1rem' }} order={{}}>
                                <Text tag='p' m={{ b: '12px' }} textSize='caption' textWeight='600'>Support</Text>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='p'>
                                        <Div d='flex'>

                                            <Div tag='a' cursor='pointer' textColor='black' textSize='caption'>Help Center</Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='p'>
                                        <Div d='flex'>

                                            <Div tag='a' cursor='pointer' textColor='black' textSize='caption'>Request a product</Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='p'>
                                        <Div d='flex'>

                                            <Div tag='a' cursor='pointer' textColor='black' textSize='caption'>Facebook</Div>
                                        </Div>
                                    </Div>
                                </Div>

                            </Div>
                            <Div flex={{ sm: '1 1 50%', lg: '1 1 0%', md: '1 1 40%' }} m={{ b: '0', r: '1rem' }} order={{}}>
                                <Text tag='p' m={{ b: '12px' }} textSize='caption' textWeight='600'>Business</Text>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='p'>
                                        <Div d='flex'>

                                            <Div tag='a' cursor='pointer' textColor='black' textSize='caption'>Become a marchant</Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='p'>
                                        <Div d='flex'>

                                            <Div tag='a' cursor='pointer' textColor='black' textSize='caption'>Affilates</Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div m={{ b: '0.937rem' }}>
                                    <Div tag='p'>
                                        <Div d='flex'>
                                            <Div tag='a' cursor='pointer' textColor='black' textSize='caption'>Wholesales</Div>
                                        </Div>
                                    </Div>
                                </Div>

                            </Div>
                        </Div>
                    </Box>
                </Border>
            </Div>
        </Div>
    )
}
