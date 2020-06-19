/* 액션 타입 만들기 */
// Ducks 패턴

const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff: diff,
});

/* 초기 상태 선언 */
const initalState = {
  number: 0,
  diff: 1,
};

/* 리듀서 선언 */

export default function counter(state = initalState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
