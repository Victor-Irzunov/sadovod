import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Купить саженцы яблонь | Доставка по РБ',
  description: 'Широкий выбор саженцев яблонь с доставкой по всей Республике Беларусь. Лучшие сорта, высокое качество и доступные цены. Гарантия сортового соответствия!',
  alternates: {
    canonical: ''
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="theme-color" content="#fff" />
        {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
       
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
