// Favicon mapping utility
export const getFaviconPath = (url) => {
  try {
    const domain = new URL(url).hostname.toLowerCase();

    // Domain to favicon mapping
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
      'www.biography.com': '/src/assets/favicons/biography.png', // Note: this one is PNG
      'www.janisjoplin.net': '/src/assets/favicons/kozmicblues.ico',
      // Facebook URLs - use a generic social media icon or Facebook's favicon
      'www.facebook.com': '/src/assets/favicons/facebook.ico',
      // Add more mappings as needed
    };

    return faviconMap[domain] || null;
  } catch (error) {
    console.warn('Error parsing URL for favicon:', url);
    return null;
  }
};

// Alternative: Get favicon by extracting domain and using a consistent naming pattern
export const getFaviconByDomain = (url) => {
  try {
    const domain = new URL(url).hostname.toLowerCase();
    const domainParts = domain.split('.');

    // Extract the main domain name (e.g., 'google' from 'www.google.com')
    let mainDomain;
    if (domainParts.length >= 2) {
      // Handle cases like 'www.google.com' -> 'google'
      mainDomain = domainParts[domainParts.length - 2];
    } else {
      mainDomain = domainParts[0];
    }

    // Special cases for complex domains
    const specialCases = {
      'timesofindia': 'timesofindia',
      'hawkeyesports': 'hawkeyesports',
      'janisjoplin': 'janisjoplin',
      'kozmicblues': 'kozmicblues',
      'npshistory': 'npshistory',
      'humanrights': 'humanrights',
      'womenshistory': 'womenshistory',
      'fdrlibrary': 'fdrlibrary',
      'pagesix': 'pagesix',
      'dailymail': 'dailymail',
      'abcnews': 'abcnews',
      'thecut': 'thecut',
      'indystar': 'indystar'
    };

    const faviconName = specialCases[mainDomain] || mainDomain;
    return `/src/assets/favicons/${faviconName}.ico`;
  } catch (error) {
    console.warn('Error parsing URL for favicon:', url);
    return null;
  }
};