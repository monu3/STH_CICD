"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { X, Download } from "lucide-react";
import { Button } from "../components/ui/button";
import { useGallery } from "../context/gallery-context";

export default function GalleryPage() {
  const { images, loading, error, refreshImages } = useGallery();
  const [category, setCategory] = useState("all");
  const [, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Events" },
    { id: "weddings", name: "Weddings" },
    { id: "decoration", name: "Decoration" },
    { id: "pasni", name: "Pasni" },
    { id: "school", name: "School Events" },
  ];
  const currentImages = images[category] || [];

  const handleDownload = async (imageUrl: string, imageName: string) => {
    try {
      // Show loading state or indicator here if needed

      // Fetch the image as a blob
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error("Failed to download image");
      }

      // Convert the response to a blob
      const blob = await response.blob();

      // Create a blob URL
      const blobUrl = URL.createObjectURL(blob);

      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = imageName || "image.jpg";

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl); // Free up memory
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      // Show error message to user if needed
      alert("Failed to download image. Please try again.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <img
            src="/assets/heroimage.png?height=600&width=1200"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Our Event Gallery
            </h1>
            <p
              className="text-xl text-white/90"
              style={{ fontFamily: "cursive" }}
            >
              Browse through our portfolio of successful events
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Work</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Take a look at some of the amazing events we've had the privilege
              to organize and manage.
            </p>
          </div>

          <Tabs
            defaultValue="all"
            value={category}
            onValueChange={setCategory}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList>
                {categories.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id}>
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={category} className="mt-0">
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                  <p className="mt-4 text-muted-foreground">
                    Loading images...
                  </p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-red-500">{error}</p>
                  <Button onClick={refreshImages} className="mt-4">
                    Retry
                  </Button>
                </div>
              ) : currentImages.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No images found for this category.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentImages.map((image, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <div
                          className="relative group cursor-pointer overflow-hidden rounded-lg"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                              {/* <p className="font-medium">{image.alt}</p>
                              <p className="text-sm">Click to enlarge</p> */}
                            </div>
                          </div>

                          {/* Download button */}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute bottom-2 right-2 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent dialog from opening
                              handleDownload(image.src, image.alt);
                            }}
                          >
                            <Download className="h-5 w-5" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                        <div className="relative">
                          <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                          <div className="absolute top-2 right-2 flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="bg-black/50 text-white hover:bg-black/70"
                              onClick={() =>
                                handleDownload(image.src, image.alt)
                              }
                            >
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="bg-black/50 text-white hover:bg-black/70"
                              onClick={() => setSelectedImage(null)}
                            >
                              <X className="h-5 w-5" />
                              <span className="sr-only">Close</span>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Own Memorable Event?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
            Let us help you plan and execute an event that will be remembered
            for years to come.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/booking">Book Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
