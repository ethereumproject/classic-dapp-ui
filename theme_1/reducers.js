export default function counter(state = 0, action) {
    console.log("進入Action");
  console.log(action);
  console.log(state);

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    case 'FETCHDATA':
      return state - 100
    default:
      console.log("KK")
      return state
  }
}
