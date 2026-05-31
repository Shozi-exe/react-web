import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Mouse = () => {
  const cursorRef = useRef(null)
  const cursorVisible = useRef(true)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    gsap.set(cursor, { opacity: 1, scale: 1, x: 0, y: 0 })

    const handleMouseMove = (event) => {
      if (!cursorVisible.current) return
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 2,
        ease: 'power3.out',
      })
    }

    const handleMouseEnter = () => {
      cursorVisible.current = true
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.2, ease: 'power3.out' })
    }

    const handleMouseLeave = () => {
      cursorVisible.current = false
      gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.2, ease: 'power3.out' })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      id="mm"
      className="fixed cursor-none z-50 pointer-events-none h-20 w-20 rounded-full bg-white/10 backdrop-blur-[2px] shadow-lg transparent shadow-gray-500/50 inset-shadow-sm inset-shadow-white outline-none"
    />
  )
}

export default Mouse
