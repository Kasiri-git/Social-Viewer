document.getElementById('openTwitterButton').addEventListener('click', function() {
  openNewWindow('https://twitter.com/home');
});

document.getElementById('openInstagramButton').addEventListener('click', function() {
  openNewWindow('https://www.instagram.com');
});

document.getElementById('openFacebookButton').addEventListener('click', function() {
  openNewWindow('https://www.facebook.com');
});

document.getElementById('openYouTubeButton').addEventListener('click', function() {
  openNewWindow('https://www.youtube.com');
});

document.getElementById('openTikTokButton').addEventListener('click', function() {
  openNewWindow('https://www.tiktok.com/ja-JP/');
});

document.getElementById('openTaittsuuButton').addEventListener('click', function() {
  openNewWindow('https://taittsuu.com/home');
});

function openNewWindow(url) {
  const width = 500; // 新しいウィンドウの幅
  chrome.windows.create({
    url: url,
    width: width,
    height: screen.height,
    left: screen.width - width
  });
}
