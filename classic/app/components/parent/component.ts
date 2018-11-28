import Component from 'sparkles-component';

export default class ParentComponent extends Component {
  clickIt() {
    console.log('Parent.clickIt', this);
  }
}
