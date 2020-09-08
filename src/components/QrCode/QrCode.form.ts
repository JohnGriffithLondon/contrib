import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import QrCodeEditDisplay from './editForm/QrCode.edit.display';
export default function(...extend) {
  //return QrCodeEditDisplay;
  return nestedComponentForm([
    {
      key: 'display',
      components: [QrCodeEditDisplay]
    }
  ], ...extend);
}
