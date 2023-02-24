import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/form";

const Add = () => {
  return (
    <>
      <Form />
      <Link
        to="/"
        className="border-[#0e6ffd] border text-[#0e6ffd] absolute bottom-28 right-28 p-2 rounded"
      >
        Back to home page
      </Link>
    </>
  );
};

export default Add;
