import logoFooter from "../images/logo-footer.svg"
import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import instagram from "../images/icon-instagram.svg"


const Footer = () => {

  return (
    <>
      <footer className="bg-slate-900 py-10 lg:py-20 text-center md:text-left">
        <div className="max-w-4xl px-5 2xl:px-0 lg:mx-auto lg:max-w-5xl xl:max-w-6xl grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6">
          <div className="grid place-content-center md:place-content-start md:col-span-2">
            <img src={logoFooter} alt="Company Logo"/>
          </div>
          <article>
            <h3 className="text-white text-lg font-bold pb-4 tracking-wide">Features</h3>
            <ul>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">Link Shortening</a></li>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">Branded Links</a></li>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">Analytics</a></li>
            </ul>
          </article>
          <article>
            <h3 className="text-white text-lg font-bold pb-4 tracking-wide">Resources</h3>
            <ul>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">Blog</a></li>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">Developers</a></li>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">Support</a></li>
            </ul>
          </article>
          <article>
            <h3 className="text-white text-lg font-bold pb-4 tracking-wide">Company</h3>
            <ul>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">About</a></li>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">Our team</a></li>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">Careers</a></li>
              <li className="mt-1"><a href="#" className="cyan-link text-slate-400 text-sm mt-1">Contact</a></li>
            </ul>
          </article>
          <div>
            <ul className="flex items-center justify-center mt-5 md:mt-0 gap-x-6">
              <li><a href="#"><img className="social-media-icon" src={facebook} alt="Facebook" /></a></li>
              <li><a href="#"><img className="social-media-icon" src={twitter} alt="Twitter" /></a></li>
              <li><a href="#"><img className="social-media-icon" src={pinterest} alt="Pinterest" /></a></li>
              <li><a href="#"><img className="social-media-icon" src={instagram} alt="Instagram" /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer