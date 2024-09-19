# Free Landing page templates

Contains free and open-sourced website templates, including but not limited to SaaS landing page, portfolio, Restaurant page and more. Useful, for freelancers, agencies, SaaS developers, and more.

**Download from browsable page**: https://awesome-landingpages.vercel.app/


#### Updated weekly
New templates will be uploaded every Friday. Feel free to star this repository 🌟. 

**Have a generic template in mind?**
- Create a new [template issue](https://github.com/PaulleDemon/landing-pages/issues/new/choose), once your template request have enough thumbs up, we'll make one. 

### Looking for a custom landing page?
- If you are looking for a custom one, contact [here](https://tally.so/r/woO0Kx)

### Consider supporting open-source.

when you support my open-source, I get funds to keep writing more free and open-source projects.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/L3L612WN7K)

## Table of content


- [Hover preview VsCode extension](#hover-preview-vscode-extension)

- [Features of Landing page templates](#features-of-landing-page-templates)
- [Whom is this suitable for?](#whom-is-this-suitable-for)
- [Why use website templates?](#why-use-website-templates)
- [Installation and setup](#installation-and-setup)
  - [Downloading the folder](#downloading-the-folder)
  - [Cloning the folder you want](#cloning-the-folder-you-want)
  - [Folder structure](#folder-structure)
  - [Setting up tailwind](#setting-up-tailwind)
  - [Running and building](#running-and-building)
  - [Customizing](#customizing)
- [Website Templates](#website-templates)
  - [SaaS landing pages](#saas-landing-pages)
  - [App landing pages](#app-landing-pages)
  - [Restaurant landing page](#restaurant-landing-page)
  - [Real estate landing page](#real-estate-landing-page)
  - [Attorney landing page](#attorney-landing-page)
  - [Portfolio](#portfolio)
  - [Ngo](#ngo-landing-pages)
  - [Other website templates](#other-website-templates)
- [Credits](#credits)
  - [Images](#images)
- [Icons](#icons)
  - [Brand logos from](#brand-logos-from)



### Hover preview VsCode extension
It can sometimes be hard to quickly modify templates created by someone else without visual cues, 
so to overcome this I have created a vscode plugin called [Hover Preview](https://github.com/PaulleDemon/Hover-Preview). 

Make sure to check that out.

## Features of Landing page templates
* Responsive.
* Technical SEO optimized (uses correct tags, like h1, h2, section etc)
* Tailwind built in, for rapid development (uses `tw-` prefix to separate tailwind classes)
* Quick customization, change only texts.
* Frontend framework independent: Comes with basic html, css just enough for your perfect landing page, you are free to modify and use any frontend framework (React, Vue) if required.

## Whom is this suitable for?
* Developers who have tight deadlines.
* Freelancers looking to show a prototype or use a template to build faster.
* SaaS Developers who don't want to spend too much time focusing on landing page, but instead want to ship more.
* App developer who wants to have a web landing page. (helps with your SEO game)
* People who are learning HTML, css and JS.
* People looking for inspiration and ideas.

## Why use website templates?
Honestly at the end of the day most client/customer don't care if you 
created your website from scratch or used a template, they just want their
website running/ solve problem as quickly as possible.

Using website templates will save you hours of work, so you can start looking
for clients or dedicate your time elsewhere.


## Installation and setup
Installation and set up is same for almost all the templates

### Downloading the folder
You can use the browsable page to download a specific repo: [https://awesome-landingpages.vercel.app/](https://awesome-landingpages.vercel.app/)

### Cloning the folder you want

To clone a specific repo read this [Stackoverflow answer](https://stackoverflow.com/a/73254328/15993687)

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
> If you don't want devDependencies, Install dependencies from `.package.json` not package.json, as package.json contains additional dev dependencies to help with types

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
3. Now add `postcss.config.js`
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

Also refer the official [tailwind documentation](https://tailwindcss.com/docs/installation)

> [!NOTE]
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

**3. [AI SaaS](src/saas/SaaS-AI/)** - [[`Live preview`](https://ai-code.netlify.app/)]

**4. [SaaSy Dark](src/saas/SaaSyDark//)** - [[`Live preview`](https://saasy-dark.netlify.app/)]


### App landing pages
![app landing page](src/apps/screenshots/chat-origin.png)

1. **[Chatorigin](src/apps/chatorigin)** - [[`Live preview`](https://chatorigin.netlify.app/)]

2. **[AiSales](src/apps/AISales/)** - [[`Live preview`](https://aisales-app.netlify.app/)]

3. **[Navigator](src/apps/navigator)** - [[`Live preview`](https://navigator-app.netlify.app/)]

4. **[Traveler](src/apps/traveler)** - [[`Live preview`](https://traveler-dyno.netlify.app/)]



### Restaurant landing page

![restaurant landing page](src/restaurant/screenshots/bistro.png)

1. **[Bistro](src/restaurant/bistro)** - [[`Live preview`](https://bistro-rest.netlify.app/)]
  
2. **[Nutrio](src/restaurant/nutrio)** - [[`Live preview`](https://nutrio-rest.netlify.app/)]


### Real estate landing page

![realestate landing pages](src/realestate/screenshots/brickstone.png)

1. **[Brick property](src/realestate/brickproperty)** - [[`Live preview`](https://brickproperty.netlify.app/)]

### Attorney landing page

![lawyer landing page](src/law/screenshots/law-fire.png)

1. **[Law Group](src/law/lawgroup)** - [[`Live preview`](https://lawgroup.netlify.app/)]

2. **[Law Fire](src/law/lawfire)** - [[`Live preview`](https://law-fire.netlify.app/)]


### Portfolio

![portfolio landing page](src/portfolio/screenshots/bella.png) 

1. **[Bella Youtuber](src/portfolio/bella)** - [[`Live preview`](https://bella-youtuber.netlify.app/)]

2. **[Jrdev - developers portfolio](src/portfolio/jrdev)** - [[`Live preview`](https://jrdev-port.netlify.app/)]

3. **[Jamie - developers portfolio](src/portfolio/Jamie-portfolio/)** - [[`Live preview`](https://jamie-dev-portfolio.netlify.app/)]

4. **[Notion - portfolio](src/portfolio/notion/)** - [[`Live preview`](https://notion-portfolio.netlify.app/)]


### NGO landing pages

![Ngo landing page](src/ngo/screenshots/project-africa.png)

1. **[Project Africa](src/ngo/project-africa/)** - [[`Live preview`](https://project-africa.netlify.app/)]


### Other website templates

![carwash landing page](src/others/screenshots/carwash.png) 


1. **[Supreme Carwash](src/others/carwash)** - [[`Live preview`](https://supremecarwash.netlify.app/)]


## Credits
Elements in the templates are taken from free to use sources

### Images
Pexels.com - https://pexels.com
Unsplash - https://unsplash.com
Pixabay - https://pixabay.com

## Icons

- Bootstrap icons 
- Material icons by Google

### Brand logos from
https://brandfetch.com/
