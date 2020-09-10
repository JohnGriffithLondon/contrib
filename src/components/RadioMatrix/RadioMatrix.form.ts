import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import RadioMatrixEditDisplay from './editForm/RadioMatrix.edit.display';
import QrCodeEditDisplay from '../QrCode/editForm/QrCode.edit.display';
export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: QrCodeEditDisplay
    }
  ], ...extend);
}
