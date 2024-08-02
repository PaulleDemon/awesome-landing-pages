/** Plugins for markdown-it */

function centerImagesPlugin(md) {
    // Override the default image renderer
    const defaultRender = md.renderer.rules.image || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }
  
    md.renderer.rules.image = function(tokens, idx, options, env, self) {
      const token = tokens[idx]
  
      // Get the original image HTML
      const imgHtml = defaultRender(tokens, idx, options, env, self)
  
      // Wrap the image in a div with a centering class or inline style
      return `<p align="center">${imgHtml}</p>`
    }
}


function externalLinksPlugin(md) {
    const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options)
    }
  
    md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      const token = tokens[idx]
  
      // Add the target="_blank" attribute
      const aIndex = token.attrIndex('target')
      if (aIndex < 0) {
        token.attrPush(['target', '_blank']) // add new attribute
      } else {
        token.attrs[aIndex][1] = '_blank' // replace value of existing attribute
      }
  
      return defaultRender(tokens, idx, options, env, self)
    }
}