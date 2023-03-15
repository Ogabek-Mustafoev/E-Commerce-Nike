import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToBasket, setBasketState } from "../features/basket-slice";

export default function Item({ check, id, title, text, rating, btn, img, price, color, shadow }) {
  const dispatch = useDispatch();

  function addToBsk() {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(addToBasket(item));
  }

  function buyNow() {
    addToBsk();
    dispatch(setBasketState(true));
  }

  return (
    <div className={`group relative bg-gradient-to-b ${color} ${shadow} grid items-center ${check ? 'justify-items-start' : 'justify-items-center'} rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
      <div className={`z-20 grid items-center  ${check ? 'justify-items-start' : 'justify-items-center'}`}>
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h1>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
          {text}
        </p>
        <div className="flex items-center justify-between w-28 my-2">
          <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
            <span className="text-black text-sm font-medium">${price}</span>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
            <span className="md:text-sm font-normal text-slate-100">{rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => addToBsk()} type="button"
            className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200"
          >
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button
            onClick={buyNow} type="button"
            className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-slate-200 text-sm text-black"
          >
            {btn}
          </button>
        </div>
      </div>
      <div className={`flex items-center z-10 ${check ? 'absolute top-4 right-1' : 'justify-center mt-3'}`}>
        <img
          src={img} alt={`item-img/${id}`}
          className={`transitions-theme group-hover:-rotate-12 ${check ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'h-36 w-64 origin-bottom-left'}`}
        />
      </div>
    </div>
  )
}
