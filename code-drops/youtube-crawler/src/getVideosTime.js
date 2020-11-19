module.exports = async function(page, url) {
  await page.goto(url, {
    waitUntil: 'networkidle2'
  });
  
  const [hours, minutes, seconds] = await page.evaluate((body) => {
    const videos = document.querySelectorAll('.ytd-playlist-video-list-renderer span.ytd-thumbnail-overlay-time-status-renderer')
    
    let hours = 0, minutes = 0, seconds = 0;
    
    videos.forEach(video => {
      const fullTime = video.innerHTML.split(':')
      
      if (fullTime.length > 2) {
        hours += Number(fullTime[0])
        minutes += Number(fullTime[1])
        seconds += Number(fullTime[2])
      } else {
        minutes += Number(fullTime[0])
        seconds += Number(fullTime[1])
      }
    })
    
    return [hours, minutes, seconds]
  });
  
  return [hours, minutes, seconds];
}