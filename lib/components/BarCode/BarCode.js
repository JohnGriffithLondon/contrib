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
import editForm from './BarCode.form';
var BarCodeLib = require('jsbarcode');
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
var BarCode = /** @class */ (function (_super) {
    __extends(BarCode, _super);
    function BarCode(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    BarCode.schema = function () {
        return FieldComponent.schema({
            type: 'barcode',
            height: 100,
            value: ""
        });
    };
    BarCode.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate('code'));
    };
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    BarCode.prototype.attach = function (element) {
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
    BarCode.prototype.getValue = function () {
        return this.component.value;
    };
    /**
     * Set the value of the component into the dom elements.
     *
     * @param value
     * @returns {boolean}
     */
    BarCode.prototype.setValue = function (value) {
        var canvas = this.element.querySelector("canvas");
        if (!this.component.value) {
            canvas.style.display = "none";
            return;
        }
        var option = {};
        if (this.component.height) {
            option.height = this.component.height;
        }
        if (this.component.width) {
            option.width = this.component.width;
        }
        if (this.component.format) {
            option.format = this.component.format;
        }
        BarCodeLib(canvas, this.component.value, option);
        canvas.style.display = "";
        return true;
    };
    BarCode.editForm = editForm;
    BarCode.builderInfo = {
        title: 'Bar Code',
        group: 'basic',
        icon: 'fa fa-code',
        weight: 70,
        documentation: 'http://help.form.io/userguide/#table',
        schema: BarCode.schema()
    };
    return BarCode;
}(FieldComponent));
export default BarCode;
