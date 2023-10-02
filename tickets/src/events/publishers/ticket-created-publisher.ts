import { Publisher, Subjects, TicketCreatedEvent } from '@jctickets.dev/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
