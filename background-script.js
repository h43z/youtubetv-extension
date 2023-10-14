browser.webRequest.onBeforeSendHeaders.addListener(e => {
  console.log(e)
  for(let header of e.requestHeaders) {
    if(header.name.toLowerCase() !== "user-agent")
      continue

    header.value = `Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1`
  }
  return {
    requestHeaders: e.requestHeaders
  }
}, {
  urls: ["*://*.youtube.com/tv*"]
}, ["blocking", "requestHeaders"])
