import { Subjects } from './subjects';


export interface TicketCreatedEvent {
    subject: Subjects.TicketCeated;
    data: {
        id: string;
        title: string;
        price: number;
    };
}