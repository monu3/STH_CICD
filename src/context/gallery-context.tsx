// "use client"

// import type React from "react"
// import { createContext, useContext, useState, useEffect } from "react"

// const BACKEND_URL = "http://localhost:5000"

// interface GalleryImage {
//   src: string
//   alt: string
//   category: string
// }

// interface GalleryContextType {
//   images: Record<string, GalleryImage[]>
//   loading: boolean
//   error: string | null
//   refreshImages: () => Promise<void>
// }

// const GalleryContext = createContext<GalleryContextType>({
//   images: {},
//   loading: true,
//   error: null,
//   refreshImages: async () => {},
// })

// export const useGallery = () => useContext(GalleryContext)

// export const GalleryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [images, setImages] = useState<Record<string, GalleryImage[]>>({})
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   const fetchImages = async () => {
//     setLoading(true)
//     setError(null)

//     try {
//       const folders = ["weddings", "decoration", "pasni", "school"]
//       const categoryImages: Record<string, GalleryImage[]> = {}

//       // Fetch images for each category in parallel
//       await Promise.all(
//         folders.map(async (folder) => {
//           try {
//             const res = await fetch(`${BACKEND_URL}/api/gallery?folder=${folder}`)
//             if (!res.ok) {
//               const text = await res.text()
//               console.error(`Error fetching folder ${folder}:`, res.status, text)
//               return
//             }
//             const data = await res.json()
//             categoryImages[folder] = data
//           } catch (err) {
//             console.error(`Failed to fetch folder ${folder}:`, err)
//           }
//         }),
//       )

//       // Create the "all" category by combining all images
//       categoryImages["all"] = Object.values(categoryImages).flat()

//       setImages(categoryImages)
//     } catch (err) {
//       console.error("Failed to fetch gallery images:", err)
//       setError("Failed to load images. Please try again later.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Load images when the app first mounts
//   useEffect(() => {
//     fetchImages()
//   }, [])

//   return (
//     <GalleryContext.Provider value={{ images, loading, error, refreshImages: fetchImages }}>
//       {children}
//     </GalleryContext.Provider>
//   )
// }

// In your React component file
"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryContextType {
  images: Record<string, GalleryImage[]>;
  loading: boolean;
  error: string | null;
  refreshImages: () => Promise<void>;
}

const GalleryContext = createContext<GalleryContextType>({
  images: {},
  loading: true,
  error: null,
  refreshImages: async () => {},
});

export const useGallery = () => useContext(GalleryContext);

export const GalleryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [images, setImages] = useState<Record<string, GalleryImage[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const folders = ["weddings", "decoration", "pasni", "school"];
      const categoryImages: Record<string, GalleryImage[]> = {};

      await Promise.all(
        folders.map(async (folder) => {
          try {
            const res = await fetch(`/api/gallery?folder=${folder}`);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            categoryImages[folder] = data;
          } catch (err) {
            console.error(`Failed to fetch folder ${folder}:`, err);
          }
        })
      );

      categoryImages["all"] = Object.values(categoryImages).flat();
      setImages(categoryImages);
    } catch (err) {
      console.error("Failed to fetch gallery images:", err);
      setError("Failed to load images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <GalleryContext.Provider
      value={{ images, loading, error, refreshImages: fetchImages }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
