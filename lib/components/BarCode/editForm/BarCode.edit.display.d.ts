declare const _default: ({
    type: string;
    label: string;
    key: string;
    input: boolean;
    weight: number;
    placeholder: string;
    tooltip: string;
    data?: undefined;
    defaultValue?: undefined;
    ignore?: undefined;
} | {
    type: string;
    label: string;
    key: string;
    input: boolean;
    tooltip: string;
    data: {
        values: {
            label: string;
            value: string;
        }[];
    };
    weight: number;
    defaultValue: string;
    placeholder?: undefined;
    ignore?: undefined;
} | {
    type: string;
    label: string;
    key: string;
    input: boolean;
    tooltip: string;
    weight: number;
    placeholder?: undefined;
    data?: undefined;
    defaultValue?: undefined;
    ignore?: undefined;
} | {
    key: string;
    ignore: boolean;
    type?: undefined;
    label?: undefined;
    input?: undefined;
    weight?: undefined;
    placeholder?: undefined;
    tooltip?: undefined;
    data?: undefined;
    defaultValue?: undefined;
})[];
export default _default;
