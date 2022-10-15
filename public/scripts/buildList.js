// eslint-disable-next-line import/extensions
import getData from './getData.js';
// eslint-disable-next-line import/prefer-default-export
export default async function buildList(query) {
  const appList = document.createElement('ul');
  appList.setAttribute('uk-grid', '');
  appList.setAttribute('uk-scrollspy', 'target: >  li; cls: uk-animation-fade; delay: 100; offset-top: 0;');
  appList.classList.add('uk-grid-column-medium', 'uk-grid-row-medium', 'uk-child-width-1-3@s');
  appList.classList.add('container__card-list', 'card-list');

  const data = await getData(query);
  let index = 0;
  if (data) {
    /* cards */
    for (const cardData of data) {
      index++;
      const card = document.createElement('li');
      const cardBody = document.createElement('div');
      cardBody.setAttribute('uk-toggle', `target: #m${index}`);
      card.classList.add('card-list__card');
      cardBody.classList.add('card-list__card-body', 'uk-card', 'uk-card-default', 'uk-card-hover', 'uk-card-large', 'uk-card-body');
      const cardName = document.createElement('h2');
      cardName.classList.add('card-list__card-header', 'uk-card-title');
      const cardTel = document.createElement('p');
      cardTel.classList.add('card-list__card-phone', 'card-list__card-content');
      const cardEmail = document.createElement('a');
      cardEmail.addEventListener('click', (el) => {
        el.stopPropagation();
      });
      cardEmail.classList.add('card-list__card-mail', 'card-list__card-content');
      cardBody.append(cardName);
      cardBody.append(cardTel);
      cardBody.append(cardEmail);
      card.append(cardBody);
      cardName.textContent = cardData.name;
      cardTel.textContent = cardData.phone;
      cardEmail.setAttribute('href', `mailto:${cardData.email}`);
      cardEmail.textContent = cardData.email;
      appList.append(card);
      /* modal */
      const modal = document.createElement('div');
      const modalBody = document.createElement('div');
      const modalHeader = document.createElement('h2');
      modalHeader.classList.add('card__modal-header');
      const modalPhone = document.createElement('div');
      modalPhone.classList.add('card__modal-body');
      const modalMail = document.createElement('div');
      modalMail.classList.add('card__modal-body');
      const modalDate = document.createElement('div');
      modalDate.classList.add('card__modal-body');
      const modalJob = document.createElement('div');
      modalJob.classList.add('card__modal-body');
      const modalDepartment = document.createElement('div');
      modalDepartment.classList.add('card__modal-body');
      const modalCloseBtn = document.createElement('button');
      const modalPhoneKey = document.createElement('span');
      modalPhoneKey.classList.add('card__modal-body-key');
      const modalPhoneDescription = document.createElement('a');
      modalPhoneDescription.classList.add('card__modal-body-description', 'phone-description');
      const modalMailKey = document.createElement('span');
      modalMailKey.classList.add('card__modal-body-key');
      const modalMailDescription = document.createElement('a');
      modalMailDescription.classList.add('card__modal-body-description', 'mail-description');
      const modalDateKey = document.createElement('span');
      modalDateKey.classList.add('card__modal-body-key');
      const modalDateDescription = document.createElement('span');
      modalDateDescription.classList.add('card__modal-body-description');
      const modalJobKey = document.createElement('span');
      modalJobKey.classList.add('card__modal-body-key');
      const modalJobDescription = document.createElement('span');
      modalJobDescription.classList.add('card__modal-body-description');
      const modalDepartmentKey = document.createElement('span');
      modalDepartmentKey.classList.add('card__modal-body-key');
      const modalDepartmentDescription = document.createElement('span');
      modalDepartmentDescription.classList.add('card__modal-body-description');
      const modalAdditionalInfo = document.createElement('div');
      modalAdditionalInfo.classList.add('card__modal-body', 'card__modal-body-add-inf');
      const modalAdditionalInfoKey = document.createElement('p');
      modalAdditionalInfoKey.classList.add('card__modal-body-key', 'card__modal-body-key-inf');
      const modalAdditionalIndoDescription = document.createElement('p');
      modalAdditionalIndoDescription.classList.add('card__modal-body-description', 'card__modal-body-description-inf');
      modal.setAttribute('uk-modal', '');
      modal.setAttribute('id', `m${index}`);
      modal.classList.add('card__modal');
      modalBody.classList.add('uk-modal-dialog', 'uk-modal-body');
      modalCloseBtn.classList.add('card__modal-close-btn', 'uk-modal-close-outside', 'uk-position-center-top');
      modalCloseBtn.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t viewBox="0 0 511.999 511.999" " xml:space="preserve">
<circle style="fill:#b34bcd;" cx="255.999" cy="255.999" r="255.999"/>
<g>
\t
\t\t<rect x="244.002" y="120.008" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0397 256.0022)" style="fill:#FFFFFF;" width="14" height="271.988"/>
\t
\t\t<rect x="120.008" y="244.007" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0428 256.0035)" style="fill:#FFFFFF;" width="271.988" height="14"/>
</g>

</svg>
`;

      modalHeader.textContent = cardData.name;
      modalPhone.append(modalPhoneKey, modalPhoneDescription);
      modalPhoneKey.textContent = 'Телефон:';
      modalPhoneDescription.setAttribute('href', `tel: ${cardData.phone}`);
      modalPhoneDescription.textContent = cardData.phone;
      modalMail.append(modalMailKey, modalMailDescription);
      modalMailKey.textContent = 'Почта:';
      modalMailDescription.setAttribute('href', `mailto: ${cardData.email}`);
      modalMailDescription.textContent = cardData.email;
      modalDate.append(modalDateKey, modalDateDescription);
      modalDateKey.textContent = 'Дата приема:';
      modalDateDescription.textContent = cardData.hire_date;
      modalJob.append(modalJobKey, modalJobDescription);
      modalJobKey.textContent = 'Должность:';
      modalJobDescription.textContent = cardData.position_name;
      modalDepartment.append(modalDepartmentKey, modalDepartmentDescription);
      modalDepartmentKey.textContent = 'Подразделение:';
      modalDepartmentDescription.textContent = cardData.department;
      modalAdditionalInfo.append(modalAdditionalInfoKey, modalAdditionalIndoDescription);
      modalAdditionalInfoKey.textContent = 'Дополнительная информация:';
      modalAdditionalIndoDescription.textContent = `Разработчики используют текст Lorem ipsum
     в качестве заменителя макета страницы. Так как дополнительной информации в JSON нет,
     а адрес нигде не используется закинул его сюда: ${cardData.address}`;
      modal.append(modalBody);
      modalBody.append();
      modalBody.append(
        modalCloseBtn,
        modalHeader,
        modalPhone,
        modalMail,
        modalDate,
        modalJob,
        modalDepartment,
        modalAdditionalInfo,
      );

      appList.append(modal);
    }
    return appList;
  }
  return null;
}
