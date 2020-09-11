export default [
  {
    key: 'labelPosition',
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
  },
  {
    type: 'select',
    label: 'Code Type',
    key: 'codeType',
    input: true,
    tooltip: 'Code Type: Bar Code or Qr Code.',
    data: {
      values: [
        { label: 'Qr Code', value: 'QrCode' },
        { label: 'Bar Code', value: 'BarCode' }
      ]
    },
    defaultValue: 'QrCode'
  },
  {
    type: 'input',
    label: 'Value',
    key: 'value',
    input: true,
    tooltip: 'Value',
    weight: 704
  }
];
