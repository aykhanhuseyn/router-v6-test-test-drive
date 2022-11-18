import { auth, Roles } from "../../utils";

export const PassLogin = (...props) => {
  console.log({ props });
  return (
    <div>
      <div>PassLogin</div>;
      <button onClick={() => auth(Roles.USER)}>log in</button>
    </div>
  );
};
