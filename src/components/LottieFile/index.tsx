import React, { useEffect } from 'react'
import lottie from 'lottie-web'
import { nanoid } from 'nanoid'

export const GiveStar = ({ path }) => {
  const docId = nanoid()

  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById(docId), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path
    })
  }, [])

  return <div id={docId} style={{ width: 50, height: 50 }}></div>
}

export default GiveStar
