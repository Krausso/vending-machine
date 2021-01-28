import { createReducer } from "@reduxjs/toolkit";
import { initialStateT } from "../types/initialState.type";
import { addItemAction } from "./actions/addItem";
import { addCashAction } from "./actions/addCash";
import { nanoid } from "nanoid";

const initialState: initialStateT = {
  items: [
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 3,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    },
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 3,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    },
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 3,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    },
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 3,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    },
    {
      id: nanoid().toString(),
      title: "Cookie",
      price: 0.1,
      quantity: 0,
      image_url: "https://art.pixilart.com/67a5851268e95c0.png"
    }
  ],
  cash: 0
}

const rootReducer = createReducer(initialState, {
  [addItemAction.type]: (state, action) => {
    return {...state, items: [...state.items, action.payload]}
  },
  [addCashAction.type]: (state, action) => {
    return {...state, cash: state.cash+action.payload}
  },
})

export default rootReducer;