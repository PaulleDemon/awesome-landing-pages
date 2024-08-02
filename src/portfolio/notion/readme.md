## Usage

* This template uses tailwind css every tailwind class are prefixed with `tw-`, to help differentiate
  between tailwind classes and other classes  

During development add the following to head tag

```html
<link rel="stylesheet" href="tailwind-runtime.css"><!--replace with path to your tailwind runtime-->
```
During production use

```html
<link rel="stylesheet" href="tailwind-build.css"><!--replace with path to your tailwind build-->
```

To start Tailwind during development use
```html
npm run start:tailwind
```

To create a build file use
```html
npm run build:tailwind
```

### Using this template

Using this template is simple, go to data.json and modify according to your needs

`data.json`
```json
{
    "name": "Paul's portfolio",
    "icon": "./assets/images/home/paul.png",

    "pages": [
        {
            "icon": "./assets/images/home/paul.png", // icon can be image, a bootstrap icon class or an emoji
            "name": "About",
            "link": "/about",
            "content": "content/about.md" // this has to be a path to your md or your html content
        },
        {
            "icon": "📖",
            "name": "Blogs",
            "link": "/blogs",
            "content": "content/about.md"
        },
        {
            "icon": "bi bi-suitcase-lg-fill",
            "name": "Work Experience",
            "link": "/experience",
            "content": "content/projects.html"
        },
    ]

}
```