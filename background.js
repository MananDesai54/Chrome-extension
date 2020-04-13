console.log("fhgb");
chrome.browserAction.onClicked.addListener(buttonClicked)
  // // Send a message to the active tab
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   var activeTab = tabs[0];
  //   var activeurl = tabs[0].url;
  //   console.log(activeurl)
  //   chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  // });
function buttonClicked(tab) {
  console.log(tab)
  chrome.tabs.sendMessage(tab.id,{run:true});
}