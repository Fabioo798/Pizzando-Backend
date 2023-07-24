interface Ingredient {
  name: string;
  price: number;
}

export default class Pizza {
  // eslint-disable-next-line no-useless-constructor, max-params
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public ingredient: Ingredient[]
  ) {}
}
