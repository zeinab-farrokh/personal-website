import React from "react";
import { Navigate, Outlet } from "react-router";
import { getCookie } from "../utils/cookie";

function Private() {
  const token = getCookie("auth");

  return token ? <Outlet /> : <Navigate to="/admin" />;
}

export default Private;
