import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {useNavigate} from "react-router-dom";
import MainGround from "./components/MainGround";
import TopOnebox from "./components/TopOnebox";
import LeftBar from "./components/LeftBar";
import Center from "./components/Center";

function App() {
  const selectedurl = useSelector((state) => state.counter.url);
  const Navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const token = queryParams.get("token");
  const localStorageToken = localStorage.getItem("token");

  useEffect(() => {
    if (!token && !localStorageToken) {
      Navigate("/login");
    } else {
      if (token) {
        localStorage.setItem("token", `Bearer ${token}`);
      }
    }
  }, [token, localStorageToken]);

  return (
    <div>
      <TopOnebox />
      <LeftBar />
      {selectedurl === "/inbox" ? <MainGround /> : <Center />}
    </div>
  );
}
export default App;
