import "../Card/card.scss";
import { FaRegHeart } from "react-icons/fa";
import { addFavorite, removeFavorite } from "../../store/favorite/actions";
import { useDispatch, useSelector } from "react-redux";


function Card({ id, img, title, price, elem }) {
  const dispatch = useDispatch();
  const favorites = useSelector(({ favorites }) => favorites);
  const isFavorite = favorites.some((item) => id === item.id);
  
  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(elem));

    }
  };  
  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="card__body">
            <img src={img} alt="img" className="card__image" />       
                
           <div className="card__container_text">
            <div>
               <h2 className="card__title">{title}</h2>
             <p className="card__description">{price}&nbsp;грн</p>
            </div>
            <span
              style={isFavorite ? { color: "red" } : { color: "" }}
              onClick={handleClick}
              className="card__star"
            >
              <FaRegHeart />
               </span>
           </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
