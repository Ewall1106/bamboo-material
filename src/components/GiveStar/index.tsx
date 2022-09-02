import React, { useEffect } from 'react'
import lottie from 'lottie-web'

export const GiveStar = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('drawerLottieStar'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets4.lottiefiles.com/packages/lf20_083h7wcs.json'
    })
  }, [])

  return <div id="drawerLottieStar" style={{ width: 50, height: 50 }}></div>
}

export default GiveStar
