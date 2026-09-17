import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1c20',
          color: '#8ed5ff',
          fontSize: 80,
          fontWeight: 600,
          fontFamily: 'monospace',
          letterSpacing: -3,
        }}
      >
        FG
      </div>
    ),
    { ...size }
  )
}
