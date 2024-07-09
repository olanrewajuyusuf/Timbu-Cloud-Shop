import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen p-10">
      <h2 className="text-[20px] font-bold">Page not found</h2>
      <p>
        Go back to{" "}
        <Link to="/" className="text-green-500 font-bold">
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
