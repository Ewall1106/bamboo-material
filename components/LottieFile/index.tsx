import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export const GiveStar = ({ path }) => {
  const ref = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: ref.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path
    })
  }, [path])

  return <div ref={ref} style={{ width: 50, height: 50 }}></div>
}

export default GiveStar
