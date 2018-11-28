import Component from 'sparkles-component';

export default class BindParentComponent extends Component {
  clickIt() {
    console.log('BindParent.clickIt', this instanceof BindParentComponent, this);
  }
}
