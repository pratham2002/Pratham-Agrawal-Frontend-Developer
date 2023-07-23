import React, { useContext } from "react";
import ReactModal from "react-modal";
import { UserContext } from "../Context/UserContext";

ReactModal.setAppElement("#root");
export default function LoginModal() {
  const { userDetails } = useContext(UserContext);

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
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </ReactModal>
  );
}
