import Component from 'sparkles-component';

export default class BindAssignParentComponent extends Component {
  clickIt() {
    console.log('BindAssignParent.clickIt', this instanceof BindAssignParentComponent, this);
  }
}
