import SparklesComponent from 'sparkles-component';
import { arg } from 'sparkles-decorators';

interface Args {
  parent: any;
}

export default class AssignObjectContext extends SparklesComponent<Args> {

  @arg parent!: any;
}
