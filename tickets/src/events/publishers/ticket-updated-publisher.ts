import { Publisher, Subjects, TicketUpdatedEvent } from '@ahtickcon/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;

}
