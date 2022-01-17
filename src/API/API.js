import axios from "axios";

axios.defaults.baseURL =
  "https://61e5d9c3c14c7a0017124eb9.mockapi.io/";

export async function getContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}