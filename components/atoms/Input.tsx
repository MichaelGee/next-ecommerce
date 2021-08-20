import { Input } from "atomize";


interface IInput {
    placeholder: string;
    prefix: React.ReactNode;
    suffix: string;
    borderFocused: string;
    rounded: string;
    type: string;
    m: object;
    p: object
}

export const InputComponent = (props: IInput) => {
    const { placeholder, prefix, suffix, borderFocused, rounded, type, m, p } = props;
    return (
        <>
            <Input h="2rem" m={m} p={p} prefix={prefix} suffix={suffix} placeholder={placeholder} rounded={rounded} focusBorderColor={borderFocused} type={type} />
        </>
    )
}
