/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Properties {
  title: string;
}

class Component<T extends Properties> {
  constructor (public props: T) {

  }
}

class Page extends Component<Properties> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};