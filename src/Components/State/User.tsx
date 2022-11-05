import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  // const [user, setUser] = useState<AuthUser>({} as AuthUser); // Type Assertion ==> no need for the null and the ? for the possibility of a value null
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>logout</button>
      {loggedIn ? (
        <>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email}</div>
        </>
      ) : (
        <p>Not Logged In</p>
      )}
    </div>
  );
};

export default User;
