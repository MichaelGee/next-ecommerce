
import React from "react";
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '../styletron'
import {
    ThemeProvider,
    StyleReset
  } from "react-atomize";


const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'centers',
    padding: '2.5rem 5rem'
}



  const ThemeDecorator = storyFn => (
    <StyletronProvider value={styletron}>
    <ThemeProvider >
        <div style={style}>
        <StyleReset />
          {storyFn()}
        </div>
        </ThemeProvider>
    </StyletronProvider>
)

export default ThemeDecorator;