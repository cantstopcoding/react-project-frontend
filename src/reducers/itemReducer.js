export default function itemReducer(
  state = { items: [], currentItemId: null },
  action
) {
  switch (action.type) {
    case "FETCH_ITEMS":
      return { ...state, items: action.payload };
    case "SHOW_ITEM":
      return { ...state, currentItemId: action.payload };
    default:
      return state;
  }
}
