export default class CartItem {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public pizzaId: string,
    public quantity: number,
    public selectedIngredients: string[]
  ) {}
}
