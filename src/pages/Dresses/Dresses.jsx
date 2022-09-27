import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";


const Dresses = () => {
  const goods = useSelector(({goods}) => goods.filter((good)=> good.title === "Сукня"))
  return (
    <>
      <div className="wrapper">
        {goods.map((elem) => {
          return (
            <Card
              key={elem.id}
              id={elem.id}
              elem={elem}
              img={elem.imgSrc}
              title={elem.title}
              price={elem.price}
              color={elem.color}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default Dresses;
