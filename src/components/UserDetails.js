// FOURTH STEP
import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserDate } from "../api/fetchApi";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUser from "./DisplayUser";

const UserDetails = () => {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  return (
    <>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button
            className="custom-btn add-new-user-btn"
            onClick={() => addNewUser(fakeUserDate())}
          >
            Add New User
          </button>
        </div>
        <hr />
        <ul>
          <DisplayUser />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </>
  );
};
export default UserDetails;
