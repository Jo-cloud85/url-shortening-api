import brand from "../images/icon-brand-recognition.svg"
import detail from "../images/icon-detailed-records.svg"
import fullCustomize from "../images/icon-fully-customizable.svg"

const Advanced = () => {
  return (
    <>
      <section className="bg-gray-100 pt-52 lg:pt-40 pb-10 lg:pb-40">
        <div className="max-w-4xl px-5 2xl:px-0 lg:mx-auto lg:max-w-5xl xl:max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-800 mb-3 text-center">Advanced Statistics</h2>
          <p className="text-slate-400 text-center mb-10 lg:mb-20">Track how your links are performing across the web <br />with our advanced statistics dashboard.</p>
          <div className="relative card grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="line"></div>
            <div className="relative bg-white p-5 rounded">
              <img src={brand} alt="Brand Recognition" className="p-3 -mt-12 bg-slate-800 rounded-full w-16"/>
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Brand Recognition</h3>
              <p className="text-slate-400 text-sm">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
            </div>

            <div className="relative bg-white p-5 rounded">
              <img src={detail} alt="Detailed Records" className="p-3 -mt-12 bg-slate-800 rounded-full w-16"/>
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Detailed Records</h3>
              <p className="text-slate-400 text-sm">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>

            <div className="relative bg-white p-5 rounded">
              <img src={fullCustomize} alt="Fully Customizable" className="p-3 -mt-12 bg-slate-800 rounded-full w-16"/>
              <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Fully Customizable</h3>
              <p className="text-slate-400 text-sm">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Advanced