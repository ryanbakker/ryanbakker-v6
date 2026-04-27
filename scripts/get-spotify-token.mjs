// Run this with: node scripts/get-spotify-token.mjs
import fs from 'fs';

// Simple .env.local parser to avoid dependencies
const envFile = fs.readFileSync('.env.local', 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const [key, ...value] = line.split('=');
  if (key && value) env[key.trim()] = value.join('=').trim();
});

const client_id = env.SPOTIFY_CLIENT_ID;
const client_secret = env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://127.0.0.1:3000/api/callback'; // Updated to match your whitelisted URI
const scope = 'user-top-read';

if (!client_id || !client_secret) {
  console.error('❌ Error: SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET missing in .env.local');
  process.exit(1);
}

const authUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scope)}`;

console.log('\n1. Open this URL in your browser and log in:');
console.log('\x1b[36m%s\x1b[0m', authUrl);

console.log('\n2. After logging in, you will be redirected to 127.0.0.1:3000/api/callback');
console.log('3. Copy the "code" parameter from the URL in your browser address bar.');

import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\n4. Paste the code here: ', async (code) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri,
      }),
    });

    const data = await response.json();

    if (data.refresh_token) {
      console.log('\n✅ Your Refresh Token:');
      console.log('\x1b[32m%s\x1b[0m', data.refresh_token);
      console.log('\nCopy this into your .env.local as SPOTIFY_REFRESH_TOKEN');
    } else {
      console.error('\n❌ Error fetching token:', data);
    }
  } catch (err) {
    console.error('\n❌ Network Error:', err);
  }
  rl.close();
});
