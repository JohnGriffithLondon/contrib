declare const _default: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    label?: undefined;
    input?: undefined;
    tooltip?: undefined;
    data?: undefined;
    defaultValue?: undefined;
    weight?: undefined;
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
    defaultValue: string;
    ignore?: undefined;
    weight?: undefined;
} | {
    type: string;
    label: string;
    key: string;
    input: boolean;
    tooltip: string;
    weight: number;
    ignore?: undefined;
    data?: undefined;
    defaultValue?: undefined;
})[];
export default _default;
