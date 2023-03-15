import { ChevronDoubleLeftIcon, ArchiveBoxXMarkIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { clearBasket, setBasketState } from '../features/basket-slice';

export default function BasketHeader() {
  const dispatch = useDispatch();

  return (
    <div className='bg-gray-800 h-11 flex items-center justify-between px-3 sticky top-0 left-0 ring-0 w-full'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center' onClick={() => dispatch(setBasketState(false))}>
          <ChevronDoubleLeftIcon className='icon-style hover:text-blue-500 stroke-[2]' />
        </div>
        <div className='flex items-center'>
          <h1 className='text-base flex items-center gap-1 text-white font-medium'>
            Basket
            <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-900'>
              (Items)
            </span>
          </h1>
        </div>
      </div>
      <div className='flex items-center'>
        <button
          onClick={() => dispatch(clearBasket())} type="btn"
          className="rounded bg-theme-cart active:scale-90 p-0.5"
        >
          <ArchiveBoxXMarkIcon className='icon-style text-slate-900 hover:text-red-700 hover:scale-105 transition-all duration-200' />
        </button>
      </div>
    </div>
  )
}
