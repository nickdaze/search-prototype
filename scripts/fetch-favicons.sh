#!/bin/bash

# Create favicons directory if it doesn't exist
mkdir -p src/assets/favicons

# Function to download favicon
download_favicon() {
    local url=$1
    local filename=$2

    echo "Downloading favicon for $url..."

    # Try common favicon locations
    curl -s -L --max-time 10 "${url}/favicon.ico" -o "src/assets/favicons/${filename}.ico" 2>/dev/null

    # Check if file was downloaded and has content
    if [ -s "src/assets/favicons/${filename}.ico" ]; then
        echo "✅ Successfully downloaded ${filename}.ico"
    else
        # Try alternative locations
        curl -s -L --max-time 10 "${url}/apple-touch-icon.png" -o "src/assets/favicons/${filename}.png" 2>/dev/null
        if [ -s "src/assets/favicons/${filename}.png" ]; then
            echo "✅ Successfully downloaded ${filename}.png (apple-touch-icon)"
        else
            echo "❌ Failed to download favicon for $url"
            rm -f "src/assets/favicons/${filename}.ico" "src/assets/favicons/${filename}.png"
        fi
    fi
}

echo "🔄 Starting favicon download process..."

# Wikipedia
download_favicon "https://en.wikipedia.org" "wikipedia"

# ESPN
download_favicon "https://www.espn.com" "espn"

# WNBA
download_favicon "https://www.wnba.com" "wnba"

# Hawkeye Sports
download_favicon "https://hawkeyesports.com" "hawkeyesports"

# IndyStar
download_favicon "https://www.indystar.com" "indystar"

# Daily Mail
download_favicon "https://www.dailymail.co.uk" "dailymail"

# ABC News
download_favicon "https://abcnews.go.com" "abcnews"

# The Cut
download_favicon "https://www.thecut.com" "thecut"

# IMDb
download_favicon "https://www.imdb.com" "imdb"

# Marca
download_favicon "https://www.marca.com" "marca"

# Yahoo
download_favicon "https://www.yahoo.com" "yahoo"

# Times of India
download_favicon "https://timesofindia.indiatimes.com" "timesofindia"

# Page Six
download_favicon "https://pagesix.com" "pagesix"

# FDR Library
download_favicon "https://www.fdrlibrary.org" "fdrlibrary"

# National Women's History Museum
download_favicon "https://www.womenshistory.org" "womenshistory"

# Quora
download_favicon "https://www.quora.com" "quora"

# United for Human Rights
download_favicon "https://www.humanrights.com" "humanrights"

# NPS History
download_favicon "https://npshistory.com" "npshistory"

# Janis Joplin Official
download_favicon "https://janisjoplin.com" "janisjoplin"

# Spotify
download_favicon "https://open.spotify.com" "spotify"

# Apple Music
download_favicon "https://music.apple.com" "applemusic"

# Biography.com
download_favicon "https://www.biography.com" "biography"

# Rock & Roll Hall of Fame
download_favicon "https://rockhall.com" "rockhall"

# Kozmic Blues
download_favicon "https://www.janisjoplin.net" "kozmicblues"

echo "🎉 Favicon download process completed!"
echo "📁 Check src/assets/favicons/ for downloaded files"