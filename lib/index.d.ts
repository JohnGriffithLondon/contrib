declare const _default: {
    components: {
        checkmatrix: typeof import("./components/CheckMatrix/CheckMatrix").default;
        qrcode: typeof import("./components/QrCode/QrCode").default;
        barcode: typeof import("./components/BarCode/BarCode").default;
    };
    templates: {
        bootstrap: {
            checkmatrix: {
                form: string;
            };
            code: {
                form: string;
            };
        };
    };
};
export default _default;
