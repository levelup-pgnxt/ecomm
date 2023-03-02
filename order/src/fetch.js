import fetch from 'node-fetch';
import STATUS_CONFIRMADO from './constantes.js';

export const fetchAccount = async (id) => {
  const cliente = await fetch(`http://account:3002/api/admin/accounts/${id}`);
  const clienteData = await cliente.json();
  // console.dir(clienteData)
  return clienteData;
};

export const fetchPayment = async (payload, id) => {
  const descricao = JSON.stringify(payload);
  const response = await fetch(`http://finance:3003/admin/payments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      status: STATUS_CONFIRMADO,
      descricao,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const content = await response.json();
  // console.log(content);
  return content;
};
