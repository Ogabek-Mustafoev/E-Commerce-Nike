import { useSelector } from "react-redux";
import { BasketItem } from "./";

export default function BasketList() {
  const { basketItems } = useSelector(state => state.basket);
  const totalPrice = basketItems.reduce((sum, el) => sum + el.price * el.productQty, 0);
  const formatCurrency = (currency) => currency.toLocaleString("en-US", { style: 'currency', currency: 'USD', });

  return (
    <>
      <div className="grid gap-y-7 lg:gap-y-5 mt-3 overflow-y-auto scroll-smooth scroll-hidden max-h-[82vh]">
        {basketItems.map(item => (
          <BasketItem key={item.id} {...item} />
        ))}
      </div>
      <div className="fixed bottom-0 bg-gray-900 w-full px-5 py-2 grid items-center">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-semibold uppercase text-white">SubTotal</h1>
          <span className="text-sm font-semibold rounded bg-theme-cart text-slate-900 px-1 py-0.5 hover:text-slate-200">
            {formatCurrency(totalPrice)}
          </span>
        </div>
        <div className="grid items-center gap-2">
          <p className="text-sm font-medium text-center text-slate-300">Taxes and Shipping Will Calculate At Shipping</p>
          <button type="button" className="py-1 bg-slate-300 hover:bg-transparent hover:border text-black hover:text-white">Check Out</button>
        </div>
      </div>
    </>
  )
}
