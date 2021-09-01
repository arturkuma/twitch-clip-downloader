const fs = require('fs');
const axios = require('axios').default;
const puppeteer = require('puppeteer');

function downloadFile(fileUrl, downloadDest) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'GET',
                url: fileUrl,
                responseType: 'stream'
            });

            const w = response.data.pipe(fs.createWriteStream(downloadDest));

            w.on('finish', () => {
                resolve(true);
            });
        } catch (err) {
            reject(err);
        }
    });
}

async function findVideoUrl(clipUrl, browserExecutablePath) {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: browserExecutablePath
    });

    const page = await browser.newPage();
    await page.goto(clipUrl, { waitUntil: 'networkidle2' });

    const url = await page.evaluate('document.querySelector("video").getAttribute("src")')

    await browser.close();

    return url;
}

async function downloadTwitchClip(clipUrl, downloadDest, browserExecutablePath) {
    const url = await findVideoUrl(clipUrl, browserExecutablePath);
    await downloadFile(url, downloadDest);
}

module.exports = function (browserExecutablePath) {
    return function(clipUrl, downloadDest) {
        downloadTwitchClip(clipUrl, downloadDest, browserExecutablePath);
    }
};
