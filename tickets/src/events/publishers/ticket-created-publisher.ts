import { Publisher, Subjects, TicketCreatedEvent } from '@ahtickcon/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;

}
