/* eslint-disable import/extensions */
import buildList from './buildList.js';
import searchRecord from './searchRecord.js';

const searchInput = document.createElement('input');
searchInput.classList.add('container__search-input');

const container = document.getElementById('app');
let timeout;
let list;

async function searchRefresh() {
  const query = searchRecord(searchInput);
  list.remove();
  list = await buildList(query);
  container.append(list);
}

searchInput.addEventListener('input', () => {
  clearTimeout(timeout);
  timeout = setTimeout(searchRefresh, 500);
});
list = await buildList();
if (list) {
  container.append(searchInput);
  container.append(list);
}
