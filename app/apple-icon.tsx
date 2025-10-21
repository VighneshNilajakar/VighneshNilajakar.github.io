import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const dynamic = 'force-static'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: '#0D9488',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '20px',
        }}
      >
        VN
      </div>
    ),
    {
      ...size,
    }
  )
}
