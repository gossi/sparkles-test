import Component from 'sparkles-component';
import ParentComponent from 'sparkles-test/components/parent/component';
import { arg } from 'sparkles-decorators';

interface Args {
  parent: ParentComponent;
}

export default class AssignChildComponent extends Component<Args> {
  @arg parent!: any;
}
