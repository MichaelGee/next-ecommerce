import { Input } from "atomize";


interface IInput {
    placeholder: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    borderFocused: string;
    borderColor: string;
    rounded: string;
    type: string;
    m: object;
    p: object
    shadow: string;
}

export const InputComponent = (props: IInput) => {
    const { placeholder, prefix, suffix, borderFocused, rounded, type, m, p, shadow, borderColor } = props;
    return (
        <>
            <Input h="2rem" m={m} p={p} prefix={prefix} suffix={suffix} placeholder={placeholder} rounded={rounded} focusBorderColor={borderFocused} type={type} shadow={shadow} borderColor={borderColor} />
        </>
    )
}