import Component from 'sparkles-component';
import { arg } from 'sparkles-decorators';
import BindAssignParentComponent from 'sparkles-test/src/ui/components/bind-assign-parent/component';

interface Args {
  parent: BindAssignParentComponent;
}

export default class BindAssignChildComponent extends Component<Args> {
  @arg parent!: any;
}
