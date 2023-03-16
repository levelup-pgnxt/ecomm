import redis from 'redis';

const client = redis.createClient({
  host: 'redis',
  prefix: 'blocklist: ',
});

export default client;
