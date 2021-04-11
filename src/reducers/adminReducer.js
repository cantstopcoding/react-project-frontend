export default function adminReducer(
  state = {
    admins: [],
    item: {},
  },
  action
) {
  switch (action.type) {
    case "FETCH_ADMINS":
      return { admins: action.payload };
    case "ADD_ADMIN":
      return { ...state, admins: [...state.admins, action.payload] };
    case "FETCH_ITEM":
      return { ...state, items: [action.payload] };
    case "ADD_ITEM":
      let admins = state.admins.map((admin) => {
        if (admin.id === action.payload.id) {
          return action.payload;
        } else {
          return admin;
        }
      });
      return { ...state, admins: admins };
    case "DELETE_ITEM":
      let adminsTWO = state.admins.map((admin) => {
        if (admin.id === action.payload.id) {
          return action.payload;
        } else {
          return admin;
        }
      });
      return { ...state, admins: adminsTWO };
    case "EDIT_ADMIN":
      let adminsThree = state.admins.map((admin) => {
        if (admin.id === action.payload.id) {
          return action.payload;
        } else {
          return admin;
        }
      });
      return { ...state, admins: adminsThree };
    case "EDIT_ITEM":
      return { ...state, item: action.payload };
    default:
      return state;
  }
}
