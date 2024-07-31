

function isValidHttpUrl(link) {
    let url;
    
    try {
        url = new URL(link);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}


function isFilePath(str) {
    // Check for Unix-like paths
    const unixPattern = /^(\/|~\/|\.\/)/
    
    // Check for Windows paths
    const windowsPattern = /^[a-zA-Z]:\\/
  
    // Check for typical file extensions
    const fileExtensionPattern = /\.[a-zA-Z0-9]+$/
  
    return unixPattern.test(str) || windowsPattern.test(str) || fileExtensionPattern.test(str)
}

function isFileOrLink(path){

    return isFilePath(path) || isValidHttpUrl(path)
}

