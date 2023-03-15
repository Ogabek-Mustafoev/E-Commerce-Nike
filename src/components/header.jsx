import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasketState } from '../features/basket-slice';
import logo from "../assets/logo.png";

export default function Header() {
  const [navState, setNavState] = useState(false);
  const { basketItems } = useSelector(state => state.basket);
  const dispatch = useDispatch();

  function onScroll() {
    if (window.scrollY > 30) {
      setNavState(true);
    }
    else {
      setNavState(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${navState
      ? 'fixed top-0 left-0 right-0 h-16 sm:h-14 flex items-center justify-center opacity-100 z-40 blur-effect-theme'
      : 'absolute top-7 left-0 right-0 opacity-100 z-40'}`}>
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img src={logo} alt="logo-img" className="w-16 h-auto" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => dispatch(setBasketState(true))}
            type="button"
            className="border-none outline-none active:scale-110 transition-all duration-300 relative"
          >
            <ShoppingBagIcon className="icon-style" />
            <span
              className={`absolute top-5 -right-2 bg-white text-slate-900 shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-bold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}
            >
              {basketItems.length}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
