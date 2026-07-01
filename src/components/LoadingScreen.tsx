import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] bg-[#f1f0ee] flex flex-col items-center justify-center">
      <div className="w-16 h-16 mb-8">
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <path d="M8 20L32 8L56 20V44L32 56L8 44V20Z" stroke="#000" strokeWidth="2" fill="none" />
          <path d="M8 20L32 32L56 20" stroke="#000" strokeWidth="1.5" fill="none" />
          <path d="M32 32V56" stroke="#ff6600" strokeWidth="2" />
          <path d="M20 26L32 32L44 26" stroke="#ff6600" strokeWidth="1.5" opacity="0.5" />
        </svg>
      </div>
      <div className="caption-label mb-4">Loading</div>
      <div className="w-48 h-[2px] bg-[#e0e0e0] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#ff6600] transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  )
}
