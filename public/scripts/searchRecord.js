export default function searchRecord(searchInput = '') {
  // Поиск
  const searchString = [];
  let searchParams;
  const searchValue = searchInput.value.trim().split(' ');
  for (const i of searchValue) {
    if (i !== '') {
      // убираем лишние пробелы в запросе
      searchString.push(i);
    }
  }
  // eslint-disable-next-line guard-for-in
  for (const i in searchString) {
    searchString[i] = searchString[i].substring(0, 1).toUpperCase()
            + searchString[i].substring(1, searchString[i].length).toLowerCase();
  }
  if (searchString.length > 0) {
    searchParams = `?term=${searchString.join(' ')}`;
  } else {
    // Если обнулили запрос, обнуляем переменную
    searchParams = '';
  }
  return searchParams;
}
