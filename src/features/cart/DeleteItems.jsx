import React from "react";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { useDispatch } from "react-redux";

function DeleteItems({ id }) {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(deleteItem(id))} type="small">
      delete
    </Button>
  );
}

export default DeleteItems;
