# Twitch Video Url Finder

Super simple way to get Twitch clips url.

This library uses [puppeteer](https://www.npmjs.com/package/puppeteer) library to render twitch page and find video url to download.

## Import
```javascript
import twitchUrlFinder from 'twitch-video-url-finder';
```

## Browser location
You need to specify browser executable location, so puppeteer knows what to use.

```javascript
// Windows
const browserLocation = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

// MacOS
const browserLocation = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Linux
const browserLocation = '/usr/bin/google-chrome-stable';
```

Please note that your location may be different.

## Usage
```javascript
const browserArgs = ['--no-sandbox']; // Sometimes you may have to specify browser arguments. This option is required to run chromium inside docker.
const downloadTwitchClip = twitchDownloader(browserLocation, browserArgs);

const clipUrl = 'https://www.twitch.tv/user/clip/id';
downloadTwitchClip(clipUrl).then(url => console.log(url));
```

## Example
```javascript
import twitchUrlFinder from 'twitch-video-url-finder';

const downloadTwitchClip = twitchDownloader('/usr/bin/google-chrome-stable', ['--no-sandbox']);

const { url } = await downloadTwitchClip('https://www.twitch.tv/user/clip/id');

console.log(url);
```
