import StoreModule from "../module";

class GoodStore extends StoreModule {

  initState() {
    return {
      selectedGood: '',
    };
  }

  async selectGood(id) {
    const response = await fetch('/api/v1/articles/' + id + '?fields=*,maidIn(title,code),category(title)');
    const json = await response.json();

    this.setState({
      ...this.getState(),
      selectedGood: json.result,
    });
  }
}


export default GoodStore;
