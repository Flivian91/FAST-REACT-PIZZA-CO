// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import Button from "../../ui/Button";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-6 space-y-8">
      <div className="flex items-center gap-2 justify-between flex-wrap">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 text-sm rounded-full text-gray-200 tracking-wider py-1 px-3 font-semibold uppercase">
              Priority
            </span>
          )}
          <span className="bg-green-500 text-sm rounded-full text-gray-200 tracking-wider py-1 px-3 font-semibold uppercase">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-stone-200 py-5 rounded shadow-sm px-6 justify-between flex-wrap">
        <p className="font-medium ">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-b border-t">
        {
          cart.map(item => <OrderItem key={item.id} item={item}/>)
        }
      </ul>
      <div className="space-y-2 bg-stone-200 py-4 px-3 rounded">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <Button type="primary">Check out</Button>
      </div>
    </div>
  );
}
export async function Loader({ params }) {
  const order = await getOrder(params.orderid);
  return order;
}

export default Order;
