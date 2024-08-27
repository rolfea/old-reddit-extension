
const updateToOldUrl = (currentRedditUrl) => window.location.replace(currentRedditUrl.replace('https://www', 'https://old'));
const currentUrl = updateToOldUrl(document.location.href);

