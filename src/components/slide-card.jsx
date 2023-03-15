import { SplideSlide } from '@splidejs/react-splide';
import { HashtagIcon, HeartIcon } from '@heroicons/react/24/solid';
import { ClockIcon } from '@heroicons/react/24/outline';
import { truncate } from 'lodash';

export default function SlideCard({ img, title, like, time, by, text, url, btn }) {
  return (
    <SplideSlide className='mb-0.5 flex items-stretch'>
      <div className='relative grid gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200'>
        <div className='flex items-center justify-center'>
          <img
            src={img} alt={title}
            className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className='flex items-center justify-between w-full px-4'>
          <div className='flex items-center gap-0.5 sm:flex-col'>
            <HeartIcon className='icon-style text-red-500 w-5 h-5' />
            <span className='text-xs font-bold'>{like}</span>
          </div>
          <div className='flex items-center gap-0.5 sm:flex-col'>
            <ClockIcon className='icon-style w-4 h-4 text-black' />
            <span className='text-xs font-bold'>{time}</span>
          </div>
          <div className='flex items-center gap-0.5 sm:flex-col'>
            <HashtagIcon className='icon-style text-blue-600 w-4 h-4' />
            <span className='text-xs font-bold text-blue-600'>{by}</span>
          </div>
        </div>
        <div className='grid items-center justify-items-start px-4'>
          <h1 className='text-base font-semibold lg:text-sm'>{title}</h1>
          <p className='text-sm text-justify lg:text-xs mt-1'>{truncate(text, { length: 165 })}</p>
        </div>
        <div className='flex items-center justify-center px-4 w-full'>
          <a
            href={url} target="_blank" rel="noopener noreferrer" role='button'
            className='w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme'
          >
            {btn}
          </a>
        </div>
      </div>
    </SplideSlide>
  )
}
