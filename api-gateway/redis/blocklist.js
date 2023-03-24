import redis from 'redis';

const client = redis.createClient({
  host: 'redis',
  prefix: 'blocklist: ',
});

client.on('connect', () => {
  console.log('Conectado ao REDIS');
});

client.on('error', (err) => {
  console.log('Error:', err);
});

export default client;
