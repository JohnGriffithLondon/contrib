import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import CodeEditDisplay from './editForm/Code.edit.display';
export default function(...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: CodeEditDisplay
    }
  ], ...extend);
}
