import Order from '../../orders/domain/order.model';

export default class User {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public orderHistory: Order[], // Array of past orders
    public currentOrder?: Order
  ) {}
}
