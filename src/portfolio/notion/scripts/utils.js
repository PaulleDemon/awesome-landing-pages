

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


function isEmoji(str) {
    const emojiPattern = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2702}-\u{27B0}\u{24C2}-\u{1F251}]/u;
    return emojiPattern.test(str);
}
