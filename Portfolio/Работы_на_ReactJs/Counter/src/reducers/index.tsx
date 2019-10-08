import { createStore, Dispatch } from "redux";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as React from "react";

interface State {
  counter: number;
}

type INCREMENT_COUNTER = "INCREMENT_COUNTER";
type DECREMENT_COUNTER = "DECREMENT_COUNTER";

interface Action<T> {
  payload: T;
  type: string;
}

interface IncrementCounterAction extends Action<number> {
  type: INCREMENT_COUNTER;
}

interface DecrementCounterAction extends Action<number> {
  type: DECREMENT_COUNTER;
}

interface CounterProps {
  value: number;
  decrement: (val: number) => void;
  increment: (val: number) => void;
}

const Counter = (props: CounterProps) => {
  return (
    <div>
      {props.value}
      <button onClick={e => props.decrement(1)}>-</button>
      <button onClick={e => props.increment(1)}>+</button>
    </div>
  );
};

const initialState: State = {
  counter: 0
};

const increaseCounterBy: (val: number) => IncrementCounterAction = val => ({
  type: "INCREMENT_COUNTER",
  payload: val
});

const decreaseCounterBy: (val: number) => DecrementCounterAction = val => ({
  type: "DECREMENT_COUNTER",
  payload: val
});

const reducer = (store: State = initialState, action: Action<number>) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { counter: store.counter + action.payload };
    case "DECREMENT_COUNTER":
      return { counter: store.counter - action.payload };
    default:
      return store;
  }
};

export const store = createStore(reducer);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (val: number) => dispatch(increaseCounterBy(val)),
  decrement: (val: number) => dispatch(decreaseCounterBy(val))
});

const mapStateToProps = (state: State) => ({
  value: state.counter
});

export const CounterRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
