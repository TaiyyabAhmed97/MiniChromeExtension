chrome.runtime.onInstalled.addListener(function() {
  var runtimeOrExtension =
    chrome.runtime && chrome.runtime.sendMessage ? "runtime" : "extension";
  console.log(runtimeOrExtension);
  // Send message:
  chrome.runtime.sendMessage({ greeting: "hello" });
});
