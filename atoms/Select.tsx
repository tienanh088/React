interface IOptionSelect {
    label: string;
    value: string;
}
interface SelectProps {
    custom?: React.HTMLProps<HTMLSelectElement>;
    customOption?: React.HTMLProps<HTMLOptionElement>;
    options?: IOptionSelect[];
    selected?: string;
}
export const Select = (props: SelectProps) => {
    const {custom, customOption, options, selected} = props;

    return <select {...custom}>
        {options.map((item, index) =>
            <option
                {...customOption}
                key={index}
                value={item.value}
                selected={item.value === selected}
            >{item.label}</option>
        )}
    </select>
}
