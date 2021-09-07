import {useState} from 'react'
import { Checkbox, Label } from 'atomize';


interface ICheckbox {
  text?: string;
  size?: string;
  textSize?: string;
  checked?: boolean;
  onChange?: Function;
}

export const CheckboxComponent = (props: ICheckbox) => {
    const { text, size, textSize, checked, onChange } = props;
   
   
   
    return (
        <>
            <Label align="center" textSize={textSize} textWeight="500" m={{ b: "0.5rem" }}>
                <Checkbox
                    onChange={onChange}
                    checked={checked}
                    inactiveColor="contrast01"
                    activeColor="brand01"
                    size={size}
                />
                {text}
            </Label>
        </>
    )
}
