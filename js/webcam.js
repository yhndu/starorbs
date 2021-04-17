window.onload = function () {
  const video = document.querySelector('#yourBeautifulFace')
  
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream
        video.play()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
