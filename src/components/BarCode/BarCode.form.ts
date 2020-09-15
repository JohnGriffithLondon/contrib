import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import BarCodeEditDisplay from './editForm/BarCode.edit.display';
export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: BarCodeEditDisplay
    }
  ], ...extend);
}
