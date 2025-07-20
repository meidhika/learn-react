import { useEffect } from "react";

export const useRedirectIfLoggedIn = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/products";
    }
  }, []);
};
