    /*global chrome*/
const getCurrentTab = async () => {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

const updateToOldUrl = (currentRedditUrl) => window.location.replace(currentRedditUrl.replace('https://www', 'https://old'));

const updateToOld = async (oldifiedUrl) => 
  await chrome.tabs.update((getCurrentTab()).id, {url: oldifiedUrl}); 

console.log(chrome);

chrome.action.onClicked.addListener(async (tab) => {
  if (isNewReddit(tab.url)) {
    await updateToOld(updateToOldUrl(tab.url));
  }
});
