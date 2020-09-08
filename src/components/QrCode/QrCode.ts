/**
 * This file shows how to create a custom component.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import { Components } from 'formiojs';
const baseComponent = (Components as any).components.field;
import editForm from './QrCode.form';

/**
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
export default class QrCode extends (baseComponent as any) {
  constructor(component, options, data) {
    super(component, options, data);
    // this.value = "";
  }

  static schema() {
    var obj = baseComponent.schema({
      type: 'qrcode',
      numRows: 3,
      numCols: 3,
      defaultValue:""
    });
    return obj;
  }

  public static editForm = editForm;

  static builderInfo = {
    title: 'QR Code',
    group: 'basic',
    icon: 'fa fa-table',
    weight: 70,
    schema: QrCode.schema()
  }



  public render(children) {
    var obj = this.renderTemplate('qrcode', {});
    return super.render(obj);
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

    //this.value = "";

    // Allow basic component functionality to attach like field logic and tooltips.
    return super.attach(element);
  }

  /**
   * Get the value of the component from the dom elements.
   *
   * @returns {Array}
   */
  getValue() {
    return this.value;
  }

  /**
   * Set the value of the component into the dom elements.
   *
   * @param value
   * @returns {boolean}
   */
  setValue(value) {
    this.value = value;
  }
}
