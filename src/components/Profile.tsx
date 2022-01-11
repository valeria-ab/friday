import { useSelector } from "react-redux";
import { AppRootStateType } from "../store/store";

export const Profile = () => {
  const userEmail = useSelector<AppRootStateType>(
    (state) => state.profile.user.email
  );
  console.log(userEmail);

  return (
    <div>
      <h3>Profile</h3>
      <div>created: "2022-01-11T12:05:19.647Z"</div>
      email:{userEmail}
      <div>isAdmin: false </div>
      <div> name:"gradovavaleriya@gmail.com"</div>
      <div>publicCardPacksCount: 0</div>
      rememberMe: false
      <div>token: "4b466ea0-72ef-11ec-96d7-dd1216ac0e8a"</div>
      tokenDeathTime:1641924062730
      <div> updated: "2022-01-11T15:01:02.730Z"</div>
      verified: false
      <div>__v: 0</div>
      <div>_id: "61dd727f9723a50004d2f82a"</div>
    </div>
  );
};
