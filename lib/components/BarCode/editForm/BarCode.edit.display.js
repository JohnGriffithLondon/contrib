export default [
    {
        type: 'number',
        label: 'Height',
        key: 'height',
        input: true,
        weight: 1,
        placeholder: 'Height of Bar Code',
        tooltip: 'Enter the height that should be displayed by this Bar Code.'
    },
    {
        type: 'number',
        label: 'Width',
        key: 'width',
        input: true,
        weight: 2,
        placeholder: 'Width of Bar Code',
        tooltip: 'Enter the width that should be displayed by this Bar Code.'
    },
    {
        type: 'select',
        label: 'Format',
        key: 'format',
        input: true,
        tooltip: 'format',
        data: {
            values: [
                { label: '', value: '' },
                { label: 'CODE128', value: 'CODE128' },
                { label: 'EAN13', value: 'EAN13' },
                { label: 'EAN8', value: 'EAN8' },
                { label: 'EAN5', value: 'EAN5' },
                { label: 'EAN2', value: 'EAN2' },
                { label: 'UPC', value: 'UPC' },
                { label: 'CODE39', value: 'CODE39' },
                { label: 'ITF14', value: 'ITF14' },
                { label: 'MSI', value: 'MSI' },
                { label: 'MSI10', value: 'MSI10' },
                { label: 'MSI11', value: 'MSI11' },
                { label: 'MSI1010', value: 'MSI1010' },
                { label: 'MSI1110', value: 'MSI1110' },
                { label: 'Pharmacode', value: 'pharmacode' },
                { label: 'Codabar', value: 'codabar' }
            ]
        },
        weight: 3,
        defaultValue: ''
    },
    {
        type: 'input',
        label: 'Value',
        key: 'value',
        input: true,
        tooltip: 'Value',
        weight: 4
    },
    {
        key: 'labelPosition',
        ignore: true
    },
    {
        key: 'customClass',
        ignore: true
    },
    {
        key: 'placeholder',
        ignore: true
    },
    {
        key: 'hidden',
        ignore: true
    },
    {
        key: 'modalEdit',
        ignore: true
    },
    {
        key: 'tableView',
        ignore: true
    },
    {
        key: 'description',
        ignore: true
    },
    {
        key: 'hideLabel',
        ignore: true
    },
    {
        key: 'autofocus',
        ignore: true
    },
    {
        key: 'tooltip',
        ignore: true
    },
    {
        key: 'tabindex',
        ignore: true
    },
    {
        key: 'disabled',
        ignore: true
    }
];
