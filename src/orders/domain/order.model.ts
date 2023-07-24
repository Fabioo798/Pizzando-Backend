import Pizza from '../../pizzas/domain/pizza.model';

enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  DELIVERED = 'DELIVERED',
}

export default class Order {
  // eslint-disable-next-line no-useless-constructor, max-params
  constructor(
    public id: string,
    public items: Pizza[],
    public total: number,
    public status: OrderStatus,
    public createDate: Date
  ) {}
}
