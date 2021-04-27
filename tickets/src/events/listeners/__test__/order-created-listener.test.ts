import { Message } from 'node-nats-streaming';
import mongoose from "mongoose";
import { OrderCreatedEvent, OrderStatus } from '@ahtickcon/common';
import { OrderCreatedListener } from'../order-created-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Ticket } from '../../../models/ticket';

const setup = async () => {
    // Create the instance of the listener
    const listener = new OrderCreatedListener(natsWrapper.client);

    // Create and save a ticket
    const ticket = Ticket.build({
        title: 'concert',
        price: 99,
        userId: 'abcdabcd'
    });
    await ticket.save();

    // Create the fake data event
    const data: OrderCreatedEvent['data'] = {
        id: mongoose.Types.ObjectId().toHexString(),
        version: 0,
        status: OrderStatus.Created,
        userId: 'aaavvv',
        expiresAt: 'vvvbbb',
        ticket: {
            id: ticket.id,
            price: ticket.price
        }
    };

    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    };

    return { Listener, ticket, data, msg };
};