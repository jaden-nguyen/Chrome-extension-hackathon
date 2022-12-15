// add new element to right-click menu (context menu)
chrome.contextMenus.create({
    id: "searchYoutbe",
    title: "Search with YouTube",
    // gets selected text
    contexts: ["selection"],
});

// create event listener for context menu button
chrome.contextMenus.onClicked.addListener(function(data) {
    // base url for youtube search page
    const baseUrl = "https://www.youtube.com/results?search_query=";
    const newUrl = baseUrl + data.selectionText.toString().replace(" ", "+");
    // open new tab with the newUrl
    chrome.tabs.create({ url: newUrl });
})