import { Clips, SocialLink } from "./";

export default function Hero({ btntext, img, sociallinks, subtitle, title, videos }) {
  return (
    <div className="relative h-[100vh] lg:h-[45rem] md:h-[35rem] w-auto flex flex-col">
      <div className="bg-theme clip-path h-[80vh] lg:h-[35rem] md:h-[30rem] w-auto absolute top-0 left-0 right-0 opacity-100 z-10" />
      <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
        <div className="grid items-center justify-items-center">
          <h1 className="text-6xl text-center lg:text-5xl md:text-4xl sm:text-[1.6rem] sm:leading-8 xsm:text-2xl font-extrabold drop-shadow-sm text-slate-200">
            {title}
          </h1>
          <h1 className="text-6xl text-center lg:text-5xl md:text-4xl sm:text-[1.6rem] sm:leading-8 xsm:text-2xl font-extrabold drop-shadow-sm text-slate-200">
            {subtitle}
          </h1>
          <button type="button" className="button-theme bg-slate-200 shadow-slate-200 rounded-xl mt-5 mb-10 lg:mb-12" >
            {btntext}
          </button>
          <div className="grid items-center gap-5 md:gap-3 absolute top-36 left-[8%] xl:left-0 w-auto h-auto">
            {videos?.map((item, idx) => (
              <Clips key={idx} {...item} />
            ))}
          </div>
          <div className="grid items-center absolute top-36 right-0 gap-3 z-30">
            {sociallinks?.map((item, idx) => (
              <SocialLink key={idx} {...item} />
            ))}
          </div>
        </div>
        <div className="">
          <img
            src={img} alt="hero img"
            className="w-auto h-80 lg:h-60 md:h-48 sm:h-36 xsm:h-32 transitions-theme rotate-[-25deg] hover:rotate-0 cursor-pointer object-contain"
          />
        </div>
      </div>
    </div>
  );
}
