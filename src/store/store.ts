import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./app-reducer";
import { authReducer } from "./auth-reducer";
import { newPasswordEnteringReducer } from "./newPasswordEnteringReducer";
import { passwordRecoveryReducer } from "./passwordRecoveryReducer";
import { profileReducer } from "./profileReducer";
import { signUpReducer } from "./signUpReducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  signUp: signUpReducer,
  passwordRecovery: passwordRecoveryReducer,
  newPasswordEntering: newPasswordEnteringReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

// @ts-ignore
window.store = store;
