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
import editForm from './Code.form';
import QRCode from 'qrcode';
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    Code.schema = function () {
        return FieldComponent.schema({
            type: 'code',
            value: "",
            codeType: "QrCode"
        });
    };
    Code.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate('code'));
    };
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    Code.prototype.attach = function (element) {
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
    Code.prototype.getValue = function () {
        return this.component.value;
    };
    /**
     * Set the value of the component into the dom elements.
     *
     * @param value
     * @returns {boolean}
     */
    Code.prototype.setValue = function (value) {
        var canvas = this.element.querySelector("canvas");
        var jsBarcode = require('jsbarcode');
        if (!this.component.value) {
            canvas.style.display = "none";
            return;
        }
        if (this.component.codeType === "QrCode") {
            QRCode.toCanvas(canvas, this.component.value, {
                width: 200
            }, function (error) {
                if (error) {
                    console.error(error);
                }
                else {
                    console.log('success!');
                }
            });
        }
        else {
            jsBarcode(canvas, this.component.value);
        }
        canvas.style.display = "";
        return true;
    };
    Code.editForm = editForm;
    Code.builderInfo = {
        title: 'Code',
        group: 'basic',
        icon: 'fa fa-code',
        weight: 70,
        documentation: 'http://help.form.io/userguide/#table',
        schema: Code.schema()
    };
    return Code;
}(FieldComponent));
export default Code;
