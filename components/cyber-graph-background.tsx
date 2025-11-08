// "use client"

// import { useEffect, useRef, useState } from "react"



// console.log('🔵 CyberGraphBackground file loaded!')



// export default function CyberGraphBackground() {
//   console.log('🟢 CyberGraphBackground component rendering!')
//   console.log('Window exists?', typeof window !== 'undefined')
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

//   // useEffect(() => {
//   //   console.log('🟡 useEffect running!')
//   //   const canvas = canvasRef.current
//   //   if (!canvas) return

//   //   const ctx = canvas.getContext("2d")
//   //   if (!ctx) return

//   //   canvas.width = window.innerWidth
//   //   canvas.height = window.innerHeight


//   //   console.log('Canvas size:', canvas.width, 'x', canvas.height)
//   //   // console.log('Particles created:', particles.length)

//   //   const particles: Array<{
//   //     x: number
//   //     y: number
//   //     vx: number
//   //     vy: number
//   //     size: number
//   //   }> = []

//   //   // Create particles
//   //   for (let i = 0; i < 50; i++) {
//   //     particles.push({
//   //       x: Math.random() * canvas.width,
//   //       y: Math.random() * canvas.height,
//   //       vx: (Math.random() - 0.5) * 0.3,
//   //       vy: (Math.random() - 0.5) * 0.3,
//   //       size: Math.random() * 1.5,
//   //     })
//   //   }

//   useEffect(() => {
//   console.log('🟡 useEffect running!')
  
//   const canvas = canvasRef.current
//   if (!canvas) {
//     console.log('❌ Canvas ref is null!')
//     return
//   }

//   const ctx = canvas.getContext("2d")
//   if (!ctx) {
//     console.log('❌ Context not found!')
//     return
//   }

//   // Set canvas size
//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight
//   console.log('✅ Canvas size:', canvas.width, 'x', canvas.height)

//   const particles: Array<{
//     x: number
//     y: number
//     vx: number
//     vy: number
//     size: number
//   }> = []

//   // Create particles
//   for (let i = 0; i < 50; i++) {
//     particles.push({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.3,
//       vy: (Math.random() - 0.5) * 0.3,
//       size: Math.random() * 3 + 2, // Larger for visibility
//     })
//   }
  
//   console.log('Particles created:', particles.length)

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       // ctx.strokeStyle = "rgba(0, 191, 166, 0.15)"
//       // ctx.fillStyle = "rgba(0, 191, 166, 0.25)"

//       // Inside the animate function, change these lines:
//     ctx.strokeStyle = "rgba(255, 0, 0, 1)" // Bright red
//     ctx.fillStyle = "rgba(255, 0, 0, 1)" // Bright red

//       // Update and draw particles
//       particles.forEach((p, i) => {
//         p.x += p.vx
//         p.y += p.vy

//         p.vx *= 0.99
//   p.vy *= 0.99

//         if (p.x < 0) p.x = canvas.width
//         if (p.x > canvas.width) p.x = 0
//         if (p.y < 0) p.y = canvas.height
//         if (p.y > canvas.height) p.y = 0

//         ctx.beginPath()
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
//         ctx.fill()

//         // Draw connections
//         particles.forEach((other, j) => {
//           if (i < j) {
//             const dx = p.x - other.x
//             const dy = p.y - other.y
//             const distance = Math.sqrt(dx * dx + dy * dy)

//             if (distance < 150) {
//               ctx.globalAlpha = (1 - distance / 150) * 0.3
//               ctx.beginPath()
//               ctx.moveTo(p.x, p.y)
//               ctx.lineTo(other.x, other.y)
//               ctx.stroke()
//               ctx.globalAlpha = 1
//             }
//           }
//         })

//         // Parallax with mouse
//         const dx = mousePos.x - p.x
//         const dy = mousePos.y - p.y
//         const distance = Math.sqrt(dx * dx + dy * dy)
//         if (distance <1000) {
//           p.vx -= (dx / distance) * 1
//           p.vy -= (dy / distance) * 1
//         }
//       })

//       requestAnimationFrame(animate)
//     }

//     animate()

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePos({ x: e.clientX, y: e.clientY })
//     }

//     const handleResize = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     window.addEventListener("mousemove", handleMouseMove)
//     window.addEventListener("resize", handleResize)

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove)
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [mousePos])

//   // return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{ opacity: 1}} />
//   return <canvas 
//   ref={canvasRef} 
//   className="fixed inset-0 pointer-events-none" 
//   style={{ 
//     opacity: 0.5,
//     zIndex: 1,
//     width: '100vw',
//     height: '100vh'
//   }} 
// />
// }

"use client"

import { useEffect, useRef } from "react"

export default function CyberGraphBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Fewer, slower particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 1.5 + 0.5,
      })
    }

    let mouseX = -1000
    let mouseY = -1000

    const animate = () => {
      // Fade effect instead of clear
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        // Gentle drift
        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Subtle mouse attraction (not repulsion)
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 300 && dist > 50) {
          const force = (300 - dist) / 300
          p.vx += (dx / dist) * 0.001 * force
          p.vy += (dy / dist) * 0.001 * force
        }

        // Damping
        p.vx *= 0.98
        p.vy *= 0.98

        // Draw particle glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        gradient.addColorStop(0, "rgba(0, 191, 166, 0.3)")
        gradient.addColorStop(1, "rgba(0, 191, 166, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections (only close ones)
        particles.forEach((other, j) => {
          if (i < j) {
            const dx = p.x - other.x
            const dy = p.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 180) {
              const alpha = (1 - distance / 180) * 0.15
              ctx.strokeStyle = `rgba(0, 191, 166, ${alpha})`
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(other.x, other.y)
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        opacity: 0.6,
        zIndex: 1,
      }}
    />
  )
}