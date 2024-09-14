chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "getCustomQuotes") {
        chrome.storage.sync.get(['customQuotes'], function (result) {
            sendResponse({ customQuotes: result.customQuotes });
        });
        return true; // Indicates asynchronous response handling
    }
});