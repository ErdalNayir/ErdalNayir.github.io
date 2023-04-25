import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastView({ state }) {
  return (
    <div>
      <ToastContainer />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default ToastView;
