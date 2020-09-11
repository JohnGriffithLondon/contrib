/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
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
export default class Code extends (FieldComponent as any) {
  constructor(component, options, data) {
    super(component, options, data);
  }
  static schema() {
    return FieldComponent.schema({
      type: 'code',
      value: "",
      codeType: "QrCode"
    });
  }

  public static editForm = editForm;

  static builderInfo = {
    title: 'Code',
    group: 'basic',
    icon: 'fa fa-code',
    weight: 70,
    documentation: 'http://help.form.io/userguide/#table',
    schema: Code.schema()
  }


  public render(children) {
    return super.render(this.renderTemplate('code'));
  }

  /**
   * After the html string has been mounted into the dom, the dom element is returned here. Use refs to find specific
   * elements to attach functionality to.
   *
   * @param element
   * @returns {Promise}
   */
  attach(element) {
    const refs = {};


    this.loadRefs(element, refs);

    // Allow basic component functionality to attach like field logic and tooltips.
    return super.attach(element);
  }

  /**
   * Get the value of the component from the dom elements.
   *
   * @returns {Array}
   */
  getValue() {
    return this.component.value;
  }

  /**
   * Set the value of the component into the dom elements.
   *
   * @param value
   * @returns {boolean}
   */
  setValue(value) {
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
        } else {
          console.log('success!');
        }
      });
    } else {
      jsBarcode(canvas, this.component.value);

    }
    canvas.style.display = "";
    return true;
  }
}
