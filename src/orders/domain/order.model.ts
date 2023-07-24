import CartItem from '../../order.items/domain/order.items.model';

enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  DELIVERED = 'DELIVERED',
}

export default class Order {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public id: string,
    public items: CartItem[],
    public total: number,
    public status: OrderStatus,
    public createDate: Date
  ) {}
}
