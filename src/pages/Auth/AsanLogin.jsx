import { auth, Roles } from "../../utils";

export const AsanLogin = () => {
  return (
    <div>
      <div>AsanLogin</div>;
      <button onClick={() => auth(Roles.USER)}>log in with asan</button>
    </div>
  );
};
