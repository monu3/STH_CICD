"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useTheme } from "../theme-provider"
import { cn } from "../../lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const location = useLocation()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    // { name: "Packages", path: "/packages" },
    { name: "Book Now", path: "/booking" },
    { name: "Contact", path: "/contact" },
    { name: "Outlets", path: "/outlets" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement search functionality
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/assets/eventlogo.png" alt="SH Events" className="h-24 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.path ? "text-primary" :  isScrolled ? "text-foreground/80" : "text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center ml-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search events..."
              className="w-[200px] pr-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white">
            {theme === "dark" ? "🌙" : "☀️"}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden">
            <div className="container mx-auto px-4 py-4">
              <form onSubmit={handleSearch} className="relative mb-4">
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="w-full pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary p-2",
                      location.pathname === item.path ? "text-primary bg-muted" : "text-foreground/80",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="ghost" onClick={toggleTheme} className="justify-start">
                  {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
