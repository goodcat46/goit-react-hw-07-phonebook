import fetchContactsApi from './contactsApi';

export async function fetchDeleteContact(id) {
  try {
    const response = await fetchContactsApi.delete(`/contacts`, {
      params: {
        id: id,
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
