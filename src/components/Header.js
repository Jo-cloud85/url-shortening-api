import {useState} from "react"
import logo from "../images/logo.svg"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="header max-w-4xl px-5 2xl:px-0 lg:mx-auto lg:max-w-5xl xl:max-w-6xl py-5">
        <div className="flex items-center justify-between">
          <article className="flex items-center">
            <img src={logo} alt="Compoany Logo" />
            <nav className="hidden md:block md:ml-4">
              <ul className="flex items-start justify-start"> 
                <li className="my-5 md:my-0 md:mx-4">
                  <a href="#" className="purple-link text-slate-400">Features</a>
                </li>
                <li className="my-5 md:my-0 md:mx-4">
                  <a href="#" className="purple-link text-slate-400">Pricing</a>
                </li>
                <li className="my-5 md:my-0 md:mx-4">
                  <a href="#" className="purple-link text-slate-400">Resources</a>
                </li>
              </ul>
            </nav>
          </article>

          {isOpen && (
            <div className="absolute left-5 right-5 top-20 rounded bg-slate-900 text-slate-200 text-center py-10 
            md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 
            md:flex md:items-center">
              <nav className="md:hidden">
                <ul className="flex flex-col items-center justify-center">
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li className="my-5">
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                </ul>
              </nav>
              <ul className="flex flex-col items-center justify-center">
                <li className="my-5">
                  <a href="#" className="purple-link text-slate-400">Login</a>
                </li>
                <li>
                  <button className="btn-cta rounded-full">Sign Up</button>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden md:block">
            <ul className="flex items-center ml-5">
              <li className="my-5 md:my-0 md:mr-5">
                <a href="#" className="purple-link text-slate-400">Login</a>
              </li>
              <li>
                <button className="btn-cta rounded-full">Sign Up</button>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="uppercase text-sm tracking-wide md:hidden">
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header