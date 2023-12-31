import working from "../images/illustration-working.svg"

const Showcase = () => {
  return (
    <>
      <div className="py-10 lg:py-20">
        <div className="max-w-4xl px-5 2xl:px-0 lg:mx-auto lg:max-w-5xl grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
          <div className="text-center md:text-left">
            <p className="heading text-5xl lg:text-6xl mb-5 font-bold text-slate-800">More than just shorter links</p>
            <p className="lg:text-lg text-slate-400 mb-10">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className="btn-cta rounded-full">Get Started</button>
          </div>
          <div>
            <img src={working} alt="Working Illustration"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Showcase