import { useEffect, useState } from 'react'
import shortenerDesktop from '../images/bg-shorten-desktop.svg'
import shortenerMobile from '../images/bg-shorten-mobile.svg'

//GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html

const getLocalStorage = () => {
  let links = localStorage.getItem("links")

  if (links) {
    return JSON.parse(localStorage.getItem("links"))
  } else {
    return []
  }
}

const Shortener = () => {
  const [text, setText] = useState("")
  const [links, setLinks] = useState(getLocalStorage())
  const [copiedIndex, setCopiedIndex] = useState(null); // Add the state variable for the copied index

  const handleSubmit = (e) => {
    e.preventDefault()
    const urlInput = document.querySelector(".url-input");
    const errMsg = document.querySelector(".err-msg");

    const shortenLink = async () => {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
      const data = await res.json();
      console.log(data.result);

      const linksToAdd = Object.entries(data.result).map(([key, value]) => {
        if (key === "full_short_link") {
          return {
            original_link: data.result.original_link,
            shortened_link: value,
          };
        }
        return null;
      });

      setLinks((prevLinks) => [...prevLinks, ...linksToAdd.filter((link) => link !== null)]);
      setText("");
    };

    if (!text) {
      urlInput.classList.add("red")
      errMsg.style.display = "block"
    } else {
      urlInput.classList.remove("red")
      errMsg.style.block = "none"
      shortenLink();
    }
  }

  const handleCopy = (index) => { // Pass the index as an argument
    navigator.clipboard.writeText(links[index].shortened_link);
    setCopiedIndex(index); // Update the copied index state with the current index
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])

  return (
    <>
      <section className="shortener mx-5 max-w-4xl 2xl:px-0 md:mx-auto lg:max-w-5xl xl:max-w-6xl">
        <picture>
          <source media="(min-width: 768px)" srcSet={shortenerDesktop} />
          <img src={shortenerMobile} alt="Shortener"/>
        </picture>
        <form className="form w-full px-5 md:w-2/3" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row">
            <div className='w-full'>
              <input 
                type="url" 
                placeholder="Shorten a link here" 
                className="url-input relative w-full border-2 border-transparent py-2 px-5 rounded-lg"
                value={text}
                onChange={(e) => setText(e.target.value)}/>
              <p className='err-msg absolute text-sm md:text-normal'><em>Please add a link</em></p>
            </div>
            <button 
              type="submit" 
              className="btn-cta rounded-lg w-full md:w-40 md:ml-5 mt-6 md:mt-0"
              onClick={handleSubmit}>Shorten It!
            </button>
          </div>
        </form>

        {/* technically, map is not necessary but in case of appending more than 1 link from same url, it matters. */}
        {links.map((link, index) => ( 
            <div key={index} className='flex flex-col items-center justify-center bg-white md:flex-row md:justify-between py-3 px-5 mt-3 rounded-lg shadow'>
              <article className='w-full border-b-[2px] md:border-b-[0]'>
                <h6 className='mb-3 md:mb-0'>{link.original_link}</h6>
              </article>
              <article className='w-full'>
                <ul className='md:flex md:items-center md:justify-end'>
                  <li className='md:mr-5 py-3 md:py-0'>
                    <button className='text-cyan-500'>
                      {link.shortened_link}
                    </button>
                  </li>
                  <li>
                    {/* Pass the index to the handleCopy function */}
                    <button onClick={() => handleCopy(index)} className='w-full btn-cta rounded-lg text-sm focus:bg-slate-700'>
                      {copiedIndex === index ? "Copied!" : "Copy"}
                    </button>
                  </li>
                </ul>
              </article>
            </div>
        ))}
      </section>
    </>
  )
}

export default Shortener