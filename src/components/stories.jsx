import { Splide } from '@splidejs/react-splide';
import { SlideCard, Title } from "./";
import '@splidejs/react-splide/css';

export default function Stories({ title, news }) {
  const options = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    autoplay: 'play',
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    }
  }
  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <div className='mt-7'>
        <Splide options={options}>
          {news?.map((item, idx) => (
            <SlideCard key={idx} {...item} />
          ))}
        </Splide>
      </div>
    </div >
  )
}
