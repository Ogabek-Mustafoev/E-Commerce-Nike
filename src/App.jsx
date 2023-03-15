import { Basket, FlexContent, Footer, Header, Hero, Sales, Stories } from "./components";
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story } from './data';

export default function App() {
  return (
    <>
      <Header />
      <Basket />
      <main className="flex flex-col gap-16 relative">
        <Hero {...heroapi} />
        <Sales {...popularsales} check />
        <FlexContent {...highlight} check />
        <Sales {...toprateslaes} />
        <FlexContent {...sneaker} />
        <Stories {...story} />
      </main>
      <Footer />
    </>
  )
}
