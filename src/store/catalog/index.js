import StoreModule from "../module";

class CatalogStore extends StoreModule {

  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
    };
  }

  /**
   * Загрузка списка товаров
   */

  async load(limit, skip) {
    const response = await fetch('/api/v1/articles?limit=' + limit + '&skip=' + skip + '&fields=items(*),count');
    const json = await response.json();

    this.setState({
      items: json.result.items,
      currentPage: skip,
      count: json.result.count
    })
  }

  // async load(){
  //   const response = await fetch('/api/v1/articles?limit=10&offset=10&fields=items(*),count');
  //   const json = await response.json();
  //   this.setState({
  //     items: json.result.items,
  //     count: json.result.count
  //   });
  // }
}

export default CatalogStore;
