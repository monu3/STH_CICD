import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import { useEffect } from "react"
import { useGallery } from "../../context/gallery-context"

export default function Layout() {
  const { loading } = useGallery()

  // Optional: You can add a loading indicator for the initial app load
  useEffect(() => {
    if (loading) {
      // You could set a global loading state here if desired
      console.log("Preloading gallery images...")
    }
  }, [loading])
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
