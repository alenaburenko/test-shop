import React from "react";
import "../../components/Header/header.scss"
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import classnames from "classnames"
const Home = () => {
  const goods = useSelector(({ goods }) => goods);
  const [filterList,setfilterList] = useState("quadruple");

  return (
    <>
    
      <div className={classnames({"wrapper":true,"to-coloms":filterList === "double"})}>
         <div className="header__filter-rectangle">
          <button onClick={()=>{setfilterList("double")}}>
        <span className={classnames({"header__filter-rectangle-double":true,"active":filterList === "double"})}></span>
        <span className={classnames({"header__filter-rectangle-double":true,"active":filterList === "double"})}></span>
          </button>
        <button onClick={()=>{setfilterList("quadruple")}} className="grid">
        <span className={classnames({"header__filter-rectangle-quadruple":true,"active":filterList === "quadruple"})}></span>
        <span className={classnames({"header__filter-rectangle-quadruple":true,"active":filterList === "quadruple"})}></span>
        <span className={classnames({"header__filter-rectangle-quadruple":true,"active":filterList === "quadruple"})}></span>
        <span className={classnames({"header__filter-rectangle-quadruple":true,"active":filterList === "quadruple"})}></span>
        </button>
      </div>
        {goods.map((elem) => {
          return (
            <Card
              key={elem.id}
              elem={elem}
              id={elem.id}
              img={elem.imgSrc}
              title={elem.title}
              price={elem.price}
              color={elem.color}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
