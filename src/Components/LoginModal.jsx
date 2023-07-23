import axios from "axios";
import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { UserContext } from "../Context/UserContext";
ReactModal.setAppElement("#root");
export default function LoginModal() {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    setError(null);
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(res?.data);
      setUserDetails({ jwtToken: res?.data?.token });
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message ?? "Something went wrong");
    }

    // console.log({ email: e.target.email.value });
    // console.log({ password: e.target.password.value });
  };

  return (
    <ReactModal
      isOpen={!userDetails?.jwtToken}
      //   onAfterOpen={afterOpenModal}
      style={{
        content: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <div class="login-form">
        <h2>Login</h2>
        <h5>Please login to continue</h5>
        <form onSubmit={handleSubmit}>
          <input name="email" type="text" placeholder="Username" required />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <p style={{ color: "red" }}>{error}</p>
          <button type="submit">Login</button>
        </form>
      </div>
    </ReactModal>
  );
}
