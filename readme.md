# Free Landing page templates

Contains free and open-sourced website templates, including but not limited to SaaS landing page, portfolio, Restaurant page and more. Useful, for freelancers, SaaS developers, and more.

**[Continuously developed]** Feel free to star this repository. More templates will be uploaded from time to time.

## Features
* Responsive
* Tailwind built in, for rapid development (uses tw- to separate tailwind classes)
* Quick customization, change only texts.
* Frontend framework independent: Comes with basic html, css just enough for your perfect landing page, you are free to modify and use any frontend framework (React, Vue) if required.

## Whom is this suitable for?
* Developers who have tight deadlines.
* Freelancers looking to show a prototype
* SaaS Developers who don't want to spend too much time focusing on landing page, but instead want to ship more.
* People who are learning HTML, css and JS 
* People looking for inspiration and ideas

## Why use website templates?
Honestly at the end of the day most client/customer don't care if you 
created your website from scratch or used a template, they just want their
website running/ solve problem as quickly as possible.

Using website templates will save you hours of work, so you can start looking
for clients or dedicate your time elsewhere.


## Installation and setup
Installation and set up is same for almost all the templates

### Cloning the folder you want
1. First go into a directory of your choice and use the following command 
```
git clone --filter=blob:none --sparse  https://github.com/PaulleDemon/landing-pages
 ```
The above command will clone a empty repo. So now cd inside the repo 
``` 
cd %the repository directory%
```
Now
```
git sparse-checkout add saas/finance
``` 
read more on this [Stackoverflow answer](https://stackoverflow.com/a/73254328/15993687)

### Folder structure
Almost all the folder structure is similar to below shown
```
.
└── Landingpage/
    ├── assets/
    ├── css/
    │   ├── index.css
    │   ├── tailwind-build.css
    │   └── tailwind.css
    ├── index.html
    ├── index.js
    ├── tailwind.config.js
    └── readme.md
```

### Setting up tailwind
1. If you are planning to modify tailwind you must have node installed.

> [!NOTE] 
> Install dependencies from `.package.json` not package.json, as package.json contains additional dependencies to help with types

2.Add a file called `tailwind.config.js` (Note: every folder has this file, with theme)
```js
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./**/*.{html, jsx, js}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
```
3. Now add `postcss.config.js
```js
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-simple-vars": {},
    "postcss-nested": {}
  },
}
```
4. You should also have a base tailwind file called `tailwind.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components{
}
```

**For django developers:**
If you are using Django + tailwind see how to set up in this article: [Adding tailwind to django](https://dev.to/paul_freeman/adding-tailwind-css-to-django-14a)

### Running and building
1. To run the tailwind use `npm run start:tailwind`
2. To build the tailwind use `npm run build:tailwind`

During development add the following to head tag
```html
<link rel="stylesheet" href="tailwind-runtime.css"><!--replace with path to your tailwind runtime-->
```
During production use 
```html
<link rel="stylesheet" href="tailwind-build.css"><!--replace with path to your tailwind build-->
```

### Customizing
1. You can start by changing the text.
2. If you want to change the primary color, you can check the `tailwind.config.js` file, it
   contains a primary color, changing that would affect the colors in the page.
3. `index.css` also contains variables and colors for button, input, change that file for changing the
   button colors and more.


## Website Templates

Here's the list of website templates


### SaaS landing pages

![Saas landing pages](src/saas/screenshots/finance.png)

**1. [Simple Finance](src/saas/finance)** - [[`Live preview`](https://finance-saas-template.netlify.app/)]

**2. [CelestialSaaS](src/saas/CelestialSaaS/)** - [[`Live preview`](https://celestialsaas.netlify.app/)]


### App landing pages

### Restaurant landing page

![restaurant landing page](src/restaurant/screenshots/bistro.png)

1. **[Bistro](src/restaurant/bistro)** - [[`Live preview`](https://bistro-rest.netlify.app/)]


### Real estate landing page

![realestate landing pages](src/realestate/screenshots/brickstone.png)

1. **[Brick property](src/realestate/brickproperty)** - [[`Live preview`](https://brickproperty.netlify.app/)]

### Attorney landing page


### Portfolio

![portfolio landing page](src/portfolio/screenshots/bella.png) 

1. **[Bella Youtuber](src/portfolio/bella)** - [[`Live preview`](https://bella-youtuber.netlify.app/)]


### Other website templates

![carwash landing page](src/others/screenshots/carwash.png) 


1. **[Supreme Carwash](src/others/carwash)** - [[`Live preview`](https://supremecarwash.netlify.app/)]


## Credits
Elements in the templates are taken from free to use sources

### Images
Pexels.com - https://pexels.com
Unsplash - https://unsplash.com
Pixabay - https://pixabay.com

### Brand icons from
https://brandfetch.com/