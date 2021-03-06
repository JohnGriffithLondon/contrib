var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
var FieldComponent = Components.components.field;
import editForm from './QrCode.form';
import QRCodeLib from 'qrcode';
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
var QrCode = /** @class */ (function (_super) {
    __extends(QrCode, _super);
    function QrCode(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    QrCode.schema = function () {
        return FieldComponent.schema({
            type: 'qrcode',
            value: ""
        });
    };
    QrCode.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate('code'));
    };
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    QrCode.prototype.attach = function (element) {
        var refs = {};
        this.loadRefs(element, refs);
        // Allow basic component functionality to attach like field logic and tooltips.
        return _super.prototype.attach.call(this, element);
    };
    /**
     * Get the value of the component from the dom elements.
     *
     * @returns {Array}
     */
    QrCode.prototype.getValue = function () {
        return this.component.value;
    };
    /**
     * Set the value of the component into the dom elements.
     *
     * @param value
     * @returns {boolean}
     */
    QrCode.prototype.setValue = function (value) {
        var canvas = this.element.querySelector("canvas");
        if (!this.component.value) {
            canvas.style.display = "none";
            return;
        }
        var option = {};
        if (this.component.width) {
            option.width = this.component.width;
        }
        QRCodeLib.toCanvas(canvas, this.component.value, option, function (error) {
            if (error) {
                console.error(error);
            }
            else {
                console.log('success!');
            }
        });
        canvas.style.display = "";
        return true;
    };
    QrCode.editForm = editForm;
    QrCode.builderInfo = {
        title: 'QR Code',
        group: 'basic',
        icon: 'fa fa-code',
        weight: 70,
        documentation: 'http://help.form.io/userguide/#table',
        schema: QrCode.schema()
    };
    return QrCode;
}(FieldComponent));
export default QrCode;
