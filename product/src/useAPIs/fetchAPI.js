import fetch from 'node-fetch';

const fetchAccount = async (id) => {
  const cliente = await fetch(`http://account:3002/api/admin/accounts/${id}`);
  const clienteData = await cliente.json();
  if (clienteData.message === 'Account não encontrada.') {
    throw new Error('Token inválido.');
  }
  return clienteData;
};

export default fetchAccount;
