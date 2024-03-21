// SIX STEP
import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const clearAllList = () => {
    dispatch(deleteUsers());
  };
  return (
    <div className="all-clear-wrapper">
      <button className="clear-btn custom-btn" onClick={clearAllList}>
        Clear All
      </button>
    </div>
  );
};

export default DeleteAllUser;
