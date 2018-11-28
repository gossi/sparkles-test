import Component from 'sparkles-component';
import ParentComponent from 'sparkles-test/components/parent/component';

interface Args {
  parent: ParentComponent;
}

export default class ChildComponent extends Component<Args> {

}
