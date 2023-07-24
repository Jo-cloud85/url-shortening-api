# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

- Main: ![./src/screenshots/main.png](./src/screenshots/main.png)
- Error Handing & localStorage: ![./src/screenshots/err-handling%20&%20local-storage.png](./src/screenshots/err-handling%20&%20local-storage.png)
- Mobile and menu-close: ![./src/screenshots/mobile%20w%20menu-close.png](./src/screenshots/mobile%20w%20menu-close.png)

### Links

- Solution URL: [https://github.com/Jo-cloud85/url-shortening-api.git](https://github.com/Jo-cloud85/url-shortening-api.git)
- Live Site URL: [https://Jo-cloud85.github.io/url-shortening-api](https://Jo-cloud85.github.io/url-shortening-api)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

- The trickest part of this challenge is to dynamically generate the shortened links results and render them using React as I am still very new to React.
- Here I used familiar Javascript methods like Object.entries and map to return the 2 sets of links that I want.
- setLinks is used to set items to the localStorage
```
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
```


## Author

- Frontend Mentor - [@Jo-cloud85](https://www.frontendmentor.io/profile/Jo-cloud85)
