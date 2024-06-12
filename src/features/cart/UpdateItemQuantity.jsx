import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { descreaseItemsQuantity, increaseItemsQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4 justify-between">
      <Button onClick={() => dispatch(descreaseItemsQuantity(id))} type="round">
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button onClick={() => dispatch(increaseItemsQuantity(id))} type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
