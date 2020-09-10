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
import editForm from './RadioMatrix.form';
/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
var RadioMatrix = /** @class */ (function (_super) {
    __extends(RadioMatrix, _super);
    function RadioMatrix(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    RadioMatrix.schema = function () {
        return FieldComponent.schema({
            type: 'radiomatrix'
        });
    };
    Object.defineProperty(RadioMatrix.prototype, "tableClass", {
        get: function () {
            var _this = this;
            var tableClass = 'table ';
            ['striped', 'bordered', 'hover', 'condensed'].forEach(function (prop) {
                if (_this.component[prop]) {
                    tableClass += "table-" + prop + " ";
                }
            });
            return tableClass;
        },
        enumerable: false,
        configurable: true
    });
    RadioMatrix.prototype.renderCell = function (row, col) {
        return this.renderTemplate('input', {
            input: {
                type: 'input',
                ref: this.component.key + "-" + row,
                attr: {
                    id: this.component.key + "-" + row + "-" + col,
                    class: 'form-control',
                    type: 'radio',
                }
            }
        });
    };
    RadioMatrix.prototype.render = function (children) {
        return _super.prototype.render.call(this, this.renderTemplate('qrcode'));
    };
    /**
     * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
     * elements to attach functionality to.
     *
     * @param element
     * @returns {Promise}
     */
    RadioMatrix.prototype.attach = function (element) {
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
    RadioMatrix.prototype.getValue = function () {
        return "abc";
    };
    /**
     * Set the value of the component into the dom elements.
     *
     * @param value
     * @returns {boolean}
     */
    RadioMatrix.prototype.setValue = function (value) {
    };
    RadioMatrix.editForm = editForm;
    RadioMatrix.builderInfo = {
        title: 'Radio Matrix',
        group: 'basic',
        icon: 'fa fa-table',
        weight: 70,
        documentation: 'http://help.form.io/userguide/#table',
        schema: RadioMatrix.schema()
    };
    return RadioMatrix;
}(FieldComponent));
export default RadioMatrix;
