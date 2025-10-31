import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vivek Kumar - Business Analytics Portfolio',
    short_name: 'Vivek Kumar',
    description: 'MBA Business Analytics student portfolio showcasing data-driven insights and analytical capabilities',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}