import fetch from 'node-fetch';
import status from './constantes.js';

export const fetchAccount = async (id) => {
  const cliente = await fetch(`http://account:3002/api/admin/accounts/${id}`);
  const clienteData = await cliente.json();
  if (cliente.status === status.NOT_FOUND) {
    throw new Error('Token inválido.');
  }
  return clienteData;
};

export const fetchPayment = async (payload, id, authHeader) => {
  const descricao = JSON.stringify(payload);
  const response = await fetch(`http://finance:3003/admin/payments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      status: status.STATUS_CONFIRMADO,
      descricao,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: authHeader,
    },
  });
  const content = await response.json();
  // console.log(content);
  return content;
};
