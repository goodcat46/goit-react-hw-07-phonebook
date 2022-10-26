import fetchContactsApi from './contactsApi';

export async function fetchAddContact({ name, phone }) {
  try {
    const response = await fetchContactsApi.post(`/contacts`, {
      name: name,
      phone: phone,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
