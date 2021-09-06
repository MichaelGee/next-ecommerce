import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import styled from '@emotion/styled';

const Container = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 800px;
    background-size: cover;
    background-position: center;
    will-change: opacity;
    display: flex;
    justify-content: center;
    align-items: center;
`




export const Banner = () => {
    const [index, set] = useState(0)
    const slides = [
        { id: 0, url: 'photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i', content: 'Slide 1' },
        { id: 1, url: 'photo-1544572571-ab94fd872ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1534&q=80', content: 'Slide 2' },
        { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80', content: 'Slide 3' },
        { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80', content: 'Slide 4' },
    ]
    const transitions = useTransition(slides[index], {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
        config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 6000), [])
    {/* @ts-ignore  */}
    return transitions(({ props }, item) => (
        <Container
          style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`}}>
          <h1>{item.content}</h1>
        </Container>
      ))
}
