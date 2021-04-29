import { Subjects, Publisher, ExpirationCompleteEvent } from '@ahtickcon/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}