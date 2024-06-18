import Link from "next/link"
import Counter from "../components/Counter"
import "./global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h1>Labb 3</h1>
        </header>
        <nav>
<div><Link href="/">Home</Link></div>
                
<div><Link href="/about">About Us</Link></div>
                
<div><Link href="/contact">Contact Us</Link></div>
            
          </nav>
        {children}

      </body>
    </html>
  )
}
