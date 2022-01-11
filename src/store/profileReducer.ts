import { userInfo } from "os";
import { userType } from "../api/api";
import { InferActionsTypes } from "./store";

const initialState: InitialStateType = {
 user: { _id: "",
  email: "",
  name: "",
  avatar: "",
  publicCardPacksCount: 0,
  created: "",
  updated: "",
  isAdmin: false,
  verified: false,
  rememberMe: false,
  error: "",}
};

export type UserDomainType = {
   _id: "",
  email: "",
  name: "",
  publicCardPacksCount: 0,
  created: "",
  updated: "",
  isAdmin: false,
  verified: false,
  rememberMe: false,
}

export type ProfilePageType = typeof initialState;
type ActionTypes = InferActionsTypes<typeof actions>;

export const actions = {
  setUserProfile: (userData: UserDomainType) =>
    ({ type: "ProfilePage/SET_USER_PROFILE", userData } as const),

  // savePhotoSuccess: (photos: ProfilePhotosType) =>
  //   ({ type: "SAVE_PHOTO_SUCCESS", photos } as const),
};

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "ProfilePage/SET_USER_PROFILE": {
      return {
        ...state, 
        user: action.userData
      };
    }

    default:
      return state;
  }
};

// export const getUserProfile =
//   (userId: number): ThunkType =>
//    (dispatch: Dispatch<ActionTypes>, getState: () => AppStateType) => {
//     profileAPI.getProfile(userId)
//     .then(res => {
//         dispatch(actions.setUserProfile(response.data));
//     })

//   };

//types
export type InitialStateType = {
  user : userType
};

