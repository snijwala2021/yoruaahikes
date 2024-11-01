import { Menu, Mountain, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold text-xl">Yoruaa Hikes</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Treks
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Book Now</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {isMenuOpen && (
        <div className="fixed bg-white h-screen inset-0 z-50 md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6" />
              <span className="font-bold text-xl">Yoruaa Hikes</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container bg-white mt-4 flex flex-col space-y-4">
            <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
              Treks
            </Link>
            <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
