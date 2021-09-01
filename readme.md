# Twitch Clip Downloader

Super simple way to download Twitch clips.

This library uses [puppeteer](https://www.npmjs.com/package/puppeteer) library to render twitch page and find video url to download.

## Import
```javascript
import twitchDownloader from 'twitch-clip-downloader';
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
const videoLocation = 'videos/test.mp4';

await downloadTwitchClip(clipUrl, videoLocation);
```

## Example
```javascript
import twitchDownloader from 'twitch-clip-downloader';

const downloadTwitchClip = twitchDownloader('/usr/bin/google-chrome-stable', ['--no-sandbox']);
__
await downloadTwitchClip('https://www.twitch.tv/user/clip/id', 'videos/test.mp4');
```
