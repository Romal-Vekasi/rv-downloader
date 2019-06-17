const STORAGE_KEY = 'rv-download-links';
const linkListElement = document.querySelector('ul.link-list');
const links = JSON.parse(localStorage.getItem(STORAGE_KEY)); // Array of objects

let listItems = '', i = 1;
for (let link of links) {
	listItems += `<li class="link">
		<span class="link__name">${i++}. ${link.filename.substr(0, 20)}</span>- 
		<a target="_blank" class="link__btn" href="${link.location}">Скачать</a>
	</li>`;
}

linkListElement.innerHTML = listItems;