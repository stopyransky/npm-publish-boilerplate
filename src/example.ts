interface IParams {
  name: string;
  type: string;
}
class Example {
  params: IParams;
  printed: boolean;
  constructor(parameters) {
    this.params = parameters;

    this.printed = helloWorld();
  }
}
function helloWorld(): boolean {
  // eslint-disable-next-line no-console
  console.log('hello world');
  return true;
}

export { Example, helloWorld };
