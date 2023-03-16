import fetch from 'node-fetch';
import { NOT_FOUND } from '../constantes.js';

const fetchAccount = async (id) => {
  const cliente = await fetch(`http://account:3002/api/admin/accounts/${id}`);
  const clienteData = await cliente.json();
  if (cliente.status === NOT_FOUND) {
    throw new Error('Token inválido.');
  }
  return clienteData;
};

export default fetchAccount;
