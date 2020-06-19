import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  // useSelector는 스토어의 상태를 조회하는 Hook
  // state의 값은 store.getState()의 결과물과 동일
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  // useDispatch는 스토어의 dispatch를 함수에서 사용 할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  // 디스패치하는 함수들
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태값
      number={number}
      diff={diff}
      // 디스패치 함수
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
