#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Favicon mapping function
const getFaviconPath = (url) => {
  try {
    const domain = new URL(url).hostname.toLowerCase();

    const faviconMap = {
      'en.wikipedia.org': '/src/assets/favicons/wikipedia.ico',
      'www.espn.com': '/src/assets/favicons/espn.ico',
      'www.wnba.com': '/src/assets/favicons/wnba.ico',
      'hawkeyesports.com': '/src/assets/favicons/hawkeyesports.ico',
      'www.indystar.com': '/src/assets/favicons/indystar.ico',
      'www.dailymail.co.uk': '/src/assets/favicons/dailymail.ico',
      'abcnews.go.com': '/src/assets/favicons/abcnews.ico',
      'www.thecut.com': '/src/assets/favicons/thecut.ico',
      'www.imdb.com': '/src/assets/favicons/imdb.ico',
      'www.marca.com': '/src/assets/favicons/marca.ico',
      'www.yahoo.com': '/src/assets/favicons/yahoo.ico',
      'timesofindia.indiatimes.com': '/src/assets/favicons/timesofindia.ico',
      'pagesix.com': '/src/assets/favicons/pagesix.ico',
      'www.fdrlibrary.org': '/src/assets/favicons/fdrlibrary.ico',
      'www.womenshistory.org': '/src/assets/favicons/womenshistory.ico',
      'www.quora.com': '/src/assets/favicons/quora.ico',
      'www.humanrights.com': '/src/assets/favicons/humanrights.ico',
      'npshistory.com': '/src/assets/favicons/npshistory.ico',
      'janisjoplin.com': '/src/assets/favicons/janisjoplin.ico',
      'open.spotify.com': '/src/assets/favicons/spotify.ico',
      'music.apple.com': '/src/assets/favicons/applemusic.ico',
      'www.biography.com': '/src/assets/favicons/biography.png',
      'www.janisjoplin.net': '/src/assets/favicons/kozmicblues.ico',
      'rockhall.com': null, // This one failed to download
      // Special handling for Facebook URLs
      'www.facebook.com': null, // No favicon available for this complex URL
      'salemleader.com': null, // This appears to be a suspended page
    };

    return faviconMap[domain] || null;
  } catch (error) {
    console.warn('Error parsing URL for favicon:', url);
    return null;
  }
};

// Read the current searchData.js file
const searchDataPath = path.join(__dirname, '../src/data/searchData.js');
const searchDataContent = fs.readFileSync(searchDataPath, 'utf8');

// Parse the content to extract the data object
const dataMatch = searchDataContent.match(/export const searchData = ({[\s\S]*});/);
if (!dataMatch) {
  console.error('Could not parse searchData.js file');
  process.exit(1);
}

// Evaluate the data object (be careful with this in production!)
const searchData = eval(`(${dataMatch[1]})`);

// Update each result with favicon path
Object.keys(searchData).forEach(queryKey => {
  searchData[queryKey].results.forEach(result => {
    const faviconPath = getFaviconPath(result.url);
    result.thumbnail = faviconPath;
  });
});

// Generate the updated file content
const updatedContent = `export const searchData = ${JSON.stringify(searchData, null, 2)};`;

// Write the updated content back to the file
fs.writeFileSync(searchDataPath, updatedContent, 'utf8');

console.log('✅ Successfully updated searchData.js with favicon paths!');
console.log('📁 Favicon paths have been added to the thumbnail field of each result.');