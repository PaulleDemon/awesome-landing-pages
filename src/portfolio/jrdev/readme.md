

This is a multi-themed portfolio landing page 

## Customizing

### Tabs

To add new tabs, add a button in tabs section
```html
 <!-- tabs section -->
<div class="tw-absolute tw-left-[50%] tw-translate-x-[-50%]  
            tw-flex tw-p-1 tw-px-4 tw-rounded-md tw-gap-4 
            tw-border-2 tw-border-primary">
    ...
    <button class="tab-btn" onclick="openTab(event, 'newtab')">New tab</button>
    ...
</div>
```

Now to display content add a section as follows with `tab-content` className and `data-tab-name` attribute
```html
<section class="tab-content tw-w-full tw-h-full
                    max-lg:tw-p-4 tw-flex tw-flex-col 
                    tw-overflow-hidden tw-relative"
                data-tab-name="skills"
                >
    ...
</section>
```

## Credits

Credits for programming icons: icons8.com