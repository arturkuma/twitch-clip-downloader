# Twitch Clip Downloader

Super simple way to download Twitch clips.

```javascript
import twitchDownloader from 'twitch-clip-downloader';

// Windows
const browserUrl = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

// MacOS
const browserUrl = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Linux
const browserUrl = '/usr/bin/google-chrome-stable';

const downloadTwitchClip = twitchDownloader(browserUrl);

downloadTwitchClip(
    'https://www.twitch.tv/user/clip/id',
    'videos/test.mp4'
);
```
