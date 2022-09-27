import "./app.scss";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Favourite from "./pages/Favourite/Favourite";
import Header from "./components/Header/Header";
import getGoods from "./store/goods/actions";
import { useDispatch } from "react-redux";
import SideBar from "./components/SideBar/SideBar";
import Trousers from "./pages/Trousers/Trouser";
import Dresses from "./pages/Dresses/Dresses";
import TopsSweatshirt from "./pages/TopsSweatshirt/TopsSweatshirt";
import Tshirt from "./pages/Tshirt/Tshirt";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getGoods());
  });

  return (
    <>
       <Header />
      <div className="container">
        <SideBar />
        <div>
           <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />}></Route>
          <Route path="/trousers" element={<Trousers />}></Route>
          <Route path="/dresses" element={<Dresses />}></Route>
          <Route path="/tops-sweatshirt" element={<TopsSweatshirt />}></Route>
          <Route path="/t-shirt" element={<Tshirt />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
        </div>
    </>
  );
}

export default App;
