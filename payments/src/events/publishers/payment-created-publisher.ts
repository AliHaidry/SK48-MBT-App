import { Subjects, Publisher, PaymentCreatedEvent } from '@ahtickcon/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

