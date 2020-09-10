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
var baseComponent = Components.components.field;
import editForm from './QrCode.form';
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
        // this.value = "";
    }
    QrCode.schema = function () {
        var obj = baseComponent.schema({
            type: 'qrcode',
            numRows: 3,
            numCols: 3,
            defaultValue: ""
        });
        return obj;
    };
    QrCode.prototype.render = function (children) {
        var obj = this.renderTemplate('qrcode', {});
        return _super.prototype.render.call(this, obj);
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
        //this.value = "";
        // Allow basic component functionality to attach like field logic and tooltips.
        return _super.prototype.attach.call(this, element);
    };
    /**
     * Get the value of the component from the dom elements.
     *
     * @returns {Array}
     */
    QrCode.prototype.getValue = function () {
        return this.value;
    };
    /**
     * Set the value of the component into the dom elements.
     *
     * @param value
     * @returns {boolean}
     */
    QrCode.prototype.setValue = function (value) {
        this.value = value;
    };
    QrCode.editForm = editForm;
    QrCode.builderInfo = {
        title: 'QR Code',
        group: 'basic',
        icon: 'fa fa-table',
        weight: 70,
        schema: QrCode.schema()
    };
    return QrCode;
}(baseComponent));
export default QrCode;
