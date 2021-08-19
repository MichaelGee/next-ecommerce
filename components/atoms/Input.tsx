import { Input } from "atomize";


interface IInput {
  placeholder: string;
  prefix: string;
  suffix: string;
  borderFocused: string;
  rounded: string;
  type: string;
}

export const InputComponent = (props: IInput) => {
    const {placeholder, prefix, suffix, borderFocused, rounded, type} = props;
    return (
        <>
         <Input h="2rem" placeholder={placeholder} rounded={rounded} prefix={prefix} suffix={suffix} focusBorderColor={borderFocused} type={type}/>   
        </>
    )
}
