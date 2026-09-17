import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          border: '1.5px solid #3e484f',
          borderRadius: 7,
          color: '#8ed5ff',
          fontSize: 15,
          fontWeight: 600,
          fontFamily: 'monospace',
          letterSpacing: -0.5,
        }}
      >
        FG
      </div>
    ),
    { ...size }
  )
}
