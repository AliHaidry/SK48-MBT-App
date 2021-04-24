import { Publisher, OrderCreatedEvent, Subjects } from '@ahtickcon/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
