import Component from 'sparkles-component';
import { arg } from 'sparkles-decorators';
import AssignParentComponent from 'sparkles-test/src/ui/components/assign-parent/component';

interface Args {
  parent: AssignParentComponent;
}

export default class AssignChildComponent extends Component<Args> {
  @arg parent!: any;
}
