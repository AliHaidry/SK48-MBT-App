import mongoose from "mongoose";
import request from "supertest";
import { OrderStatus } from '@ahtickcon/common';
import { app } from "../../app";
import { Order } from '../../models/order';

jest.mock('../../stripe');

it("returns a 404 when purchasing an order that does not exist", async () => {
  await request(app)
    .post("/api/payments")
    .set("Cookie", global.signin())
    .send({
      token: "aaa",
      orderId: mongoose.Types.ObjectId().toHexString(),
    })
    .expect(404);
});

it("returns a 401 when purchasing an order that does not belong to the user", async () => {
    const order = Order.build({
        id: mongoose.Types.ObjectId().toHexString(),
        userId: mongoose.Types.ObjectId().toHexString(),
        version: 0,
        price: 20,
        status: OrderStatus.Created
    });
    await order.save(); 

    await request(app)
    .post("/api/payments")
    .set("Cookie", global.signin())
    .send({
      token: "aaa",
      orderId: order.id
    })
    .expect(401);

});

it("returns a 400 when purchasing a cancelled order", async () => {
    const userId = mongoose.Types.ObjectId().toHexString();
    const order = Order.build({
        id: mongoose.Types.ObjectId().toHexString(),
        userId,
        version: 0,
        price: 20,
        status: OrderStatus.Cancelled,
    });
    await order.save(); 

    await request(app)
        .post("/api/payments")
        .set("Cookie", global.signin(userId))
        .send({
            orderId: order.id,
            token: "aaa"
        })
        .expect(400);

});


it('returns a 204 with valid input', async () => {
  const userId = mongoose.Types.ObjectId().toHexString();
    const order = Order.build({
        id: mongoose.Types.ObjectId().toHexString(),
        userId,
        version: 0,
        price: 20,
        status: OrderStatus.Created,
    });
    await order.save(); 

    await request(app)
      .post("/api/payments")
      .set("Cookie", global.signin(userId))
      .send({
        token: 'tok_visa',
        orderId: order.id
      });
});