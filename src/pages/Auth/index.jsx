import { Outlet } from "react-router-dom";

export * from "./PassLogin";
export * from "./AsanLogin";

export const authLoader = async (...props) => {
  const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await rawData.json();
  return data;
};

const Auth = () => {
  const polat = "elif";

  return (
    <div>
      <h2>Auth</h2>
      <Outlet context={{ polat }} />
    </div>
  );
};

export default Auth;
