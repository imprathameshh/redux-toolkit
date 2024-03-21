// FIFTH STEP
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUser = () => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="display-user-wrap">
      {data.map((user, id) => {
        return (
          <li kay={id}>
            {user}{" "}
            <button
              className="custom-btn delete-btn"
              onClick={() => deleteUser(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default DisplayUser;
