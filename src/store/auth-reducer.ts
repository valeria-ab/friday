
import { Dispatch } from "redux";
import { authAPI } from "../api/api";
import { UserDomainType } from "./profileReducer";

import { InferActionsTypes } from "./store";

const initialState = {
  isLoggedIn: false,
  _id: "",
  email: "",
  name: "",
  publicCardPacksCount: 0,
  created: "",
  updated: "",
  isAdmin: false,
  verified: false,
  rememberMe: false,
};
type InitialStateType = typeof initialState;

export const authReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "login/SET-IS-LOGGED-IN":
      return { ...state, isLoggedIn: action.value };
    default:
      return state;
  }
};

// actions
type ActionTypes = InferActionsTypes<typeof actions>;
// export const setIsLoggedInAC = (value: boolean) =>
//   ({ type: "login/SET-IS-LOGGED-IN", value } as const);

  export const actions = {
    setUserProfile: (userData: UserDomainType) =>
      ({ type: "ProfilePage/SET_USER_PROFILE", userData } as const),

      setIsLoggedInAC: (value: boolean) =>
  ({ type: "login/SET-IS-LOGGED-IN", value } as const)
  
    // savePhotoSuccess: (photos: ProfilePhotosType) =>
    //   ({ type: "SAVE_PHOTO_SUCCESS", photos } as const),
  };

// types

// type ActionsType = ReturnType<typeof setIsLoggedInAC>;
type LoginParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

// thunks
export const loginTC =
  (payload: LoginParamsType) => (dispatch: Dispatch<ActionTypes>) => {
    authAPI
      .login(payload)
      .then((res) => {
        console.log(res.data);
       dispatch(actions.setIsLoggedInAC(true));
       const domainUserData = {
        _id: res.data._id,
        email: res.data.email,
        name: "",
        publicCardPacksCount: 0,
        created: "",
        updated: "",
        isAdmin: false,
        verified: false,
        rememberMe: false,
       }
      dispatch(actions.setUserProfile(res.data))
      })
      .catch((err) => {
        //чтобы посмотреть объект ошибки
        // console.log('Error: ', {...err})
        const error = err.response
          ? err.response.data.error
          : err.message + ", more details in the console";
        console.log(error);
      });
  };
