export default function manifest() {
    return {
      name: 'Noted',
      short_name: 'Noted',
      description: 'A personalised app to make notes.',
      start_url: '/',
      display: 'standalone',
      background_color: '',
      theme_color: '',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }