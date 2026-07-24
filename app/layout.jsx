import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Mouad El Bahraoui — Fullstack Developer',
  description:
    'Fullstack Developer (Spring Boot & React.js). I design reliable, performant, and secure systems using modern technologies.',
  keywords: [
    'Mouad El Bahraoui',
    'Fullstack Developer',
    'Spring Boot',
    'React.js',
    'Java',
    'Portfolio',
    'Morocco',
  ],
  author: 'Mouad El Bahraoui',
  openGraph: {
    title: 'Mouad El Bahraoui — Fullstack Developer',
    description:
      'I design reliable, performant, and secure systems using modern technologies.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('theme');
                  var p = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (t === 'dark' || (!t && p)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e){}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased transition-colors duration-300`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
