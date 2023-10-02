import { Publisher, Subjects, TicketUpdatedEvent } from '@jctickets.dev/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
