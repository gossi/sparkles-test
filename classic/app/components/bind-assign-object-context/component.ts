import SparklesComponent from 'sparkles-component';
import { arg } from 'sparkles-decorators';

interface Args {
  parent: any;
}

export default class BindAssignObjectContext extends SparklesComponent<Args> {

  @arg parent!: any;
}
