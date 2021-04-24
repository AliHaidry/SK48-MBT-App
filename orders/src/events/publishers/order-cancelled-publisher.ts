import { Subjects, Publisher, OrderCancelledEvent } from '@ahtickcon/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}