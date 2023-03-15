import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasketState } from "../features/basket-slice";
import { BasketEmpty, BasketHeader, BasketList } from "./";

export default function Basket() {
  const dispatch = useDispatch();
  const { basketState } = useSelector(state => state.basket);
  const { basketItems } = useSelector(state => state.basket);

  function closeByEvent(e) {
    if (e.target.getAttribute('data-blur')) {
      dispatch(setBasketState(false));
    }
  }

  useEffect(() => {
    if (basketState) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [basketState])

  return (
    <div
      onClick={closeByEvent} data-blur
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-scree z-50 transition-all duration-200 ${basketState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'}`}
    >
      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 z-50`}>
        <BasketHeader />
        {basketItems.length ? <BasketList /> : <BasketEmpty />}
      </div>
    </div>
  )
}
