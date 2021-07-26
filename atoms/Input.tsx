interface InputProps {
    custom?: React.HTMLProps<HTMLInputElement>;
    id?: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const {custom, id = 'input', type = 'text', name = 'input', value: valueProp, onChange = () => {}} = props;
    const [value, setValue] = useState(valueProp);

    useEffect(() => {
        if (valueProp && value !== valueProp) {
            setValue(valueProp);
        }
    }, [valueProp]);

    const handleChange = (changedValue: string) => {
        setValue(changedValue);

        onChange && onChange(changedValue);
    }

    return <input {...custom} id={id} type={type} name={name} value={value}
                  onchange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}/>
}
