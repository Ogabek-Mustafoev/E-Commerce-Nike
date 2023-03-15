import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useDispatch } from "react-redux"
import { incrDecrQTY, removeFromBasket } from "../features/basket-slice";

export default function BasketItem({ id, title, text, img, color, shadow, price, productQty }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between w-full px-5 last:mb-7">
      <div className="flex items-center gap-5">
        <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-300 ease-in-out flex items-center`}>
          <img src={img} alt={title} className='w-36 h-auto object-contain lg:w-28' />
          <span className="absolute font-medium right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
            ${price}
          </span>
        </div>
        <div className="grid items-center gap-4">
          <div className="grid items-center leading-none">
            <h1 className="font-medium text-lg text-slate-100 lg:text-sm">{title}</h1>
            <p className="text-small text-slate-300 lg:text-xs">{text}</p>
          </div>
          <div className="flex items-center gap-8 lg:gap-6 md:gap-5 sm:gap-3 w-full">
            <button
              type="button"
              onClick={() => dispatch(incrDecrQTY({ id, title, incrDecr: '-1' }))}
              className="text-slate-900 hover:text-white bg-theme-cart rounded sm:h-4 sm:w-4 icon-style flex items-center justify-center">
              <MinusIcon className="stroke-2" />
            </button>
            <span className="text-slate-900 hover:text-white bg-theme-cart rounded font-semibold lg:text-xs w-7 h-6 lg:h-5 lg:w-5 flex items-center justify-center">
              {productQty}
            </span>
            <button
              type="button"
              onClick={() => dispatch(incrDecrQTY({ id, title, incrDecr: '+1' }))}
              className="text-slate-900 hover:text-white bg-theme-cart rounded sm:h-4 sm:w-4 icon-style flex items-center justify-center">
              <PlusIcon className="stroke-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-5">
        <div className="grid items-end justify-items-end">
          <span className="text-lg lg:text-base text-slate-100 font-medium">${price * productQty}</span>
        </div>
        <div className="grid items-end justify-items-end">
          <button
            type="button"
            onClick={() => dispatch(removeFromBasket({ id, title }))}
            className="grid items-center justify-items-center bg-slate-200 hover:bg-red-700 text-red-800 hover:text-white rounded icon-style w-6 h-7 lg:h-6 lg:w-5 p-0.5">
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
