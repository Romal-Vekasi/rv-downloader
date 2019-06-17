const STORAGE_KEY = 'rv-download-links';
const dowloadLinks = [];

chrome.webRequest.onBeforeRequest.addListener(({ url }) => { 
	const videoUrlRegExp = /\w*.(mp4|mkv)$/;
	if (videoUrlRegExp.test(url)) {
		// Check if the url already saved
		for (let link of dowloadLinks) {
			if (link.location === url) return;
		}

		dowloadLinks.unshift({
			filename: videoUrlRegExp.exec(url)[0],
			location: url
		});
		dowloadLinks.splice(6);
		
		// Save links to shared storage
		const links = JSON.stringify(dowloadLinks);
		localStorage.setItem(STORAGE_KEY, links);
	}
}, {
	urls: ['<all_urls>']
}, [
	'requestBody'
]);