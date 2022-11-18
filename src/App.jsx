import { auth } from "./utils";
import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { usePrompt } from "./hooks/usePrompt";

function App() {
  const location = useLocation();
  const [blocked, setBlocked] = useState(false);
  usePrompt("hello, peter", blocked);

  useEffect(() => {}, [location]);

  return (
    <div>
      <button onClick={() => auth(null)}>LOG OUT</button>
      <input
        type="checkbox"
        id="block"
        name="block"
        checked={blocked}
        onClick={() => {
          setBlocked((p) => !p);
        }}
      />
      <label htmlFor="block">block</label>
      <h1>Hello</h1>
      <Link to="">home</Link>
      <br />
      <Link to="login">login</Link>
      <br />
      <Link to="login/asan">asan login</Link>
      <Outlet />
    </div>
  );
}

export default App;
