import { Title, Item } from "./";

export default function Sales({ title, items, check }) {
  return (
    <div className="nike-container">
      <Title title={title} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${check ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items?.map((item, idx) => (
          <Item key={idx} {...item} check={check} />
        ))}
      </div>
    </div>
  )
}
