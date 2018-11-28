import SparklesComponent from 'sparkles-component';

interface Args {
  click?: () => void;
}

export default class ButtonComponent extends SparklesComponent<Args> {

  clickIt() {
    console.log('ButtonComponent.clickIt()');

    if (this.args.click) {
      this.args.click();
    }
  }
}
