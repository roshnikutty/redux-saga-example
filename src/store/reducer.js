const initialState = {
  age: 20
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  if (action.type === "AGE_UP_ASYNC") {
    newState.age += action.value;
  }
  else if (action.type === "AGE_DOWN") {
    newState.age -= action.value;
  }
  return newState;
}

export default reducer;