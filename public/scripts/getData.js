// eslint-disable-next-line consistent-return
export default async function getData(query = '') {
  try {
    const response = await fetch(`http://127.0.0.1:3000${query}`);
    return response.json();
  } catch (err) {
    if (err) {
      const errMsg = document.createElement('div');
      errMsg.textContent = `Ошибка, не удалось получить данные! ${err}`;
      errMsg.style.color = 'red';
      errMsg.style.fontSize = '32px';
      const app = document.getElementById('app');
      app.append(errMsg);
    }
  }
}
