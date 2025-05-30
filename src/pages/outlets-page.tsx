import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function OutletsPage() {
  const outlets = [
    {
      id: 1,
      name: "Surkhet",
      image: "/assets/heroimage.png",
      address: "Birendranagar-6, Surkhet",
      phone: "9848262653",
      email: "samitenthouse@gmail.com",
      description:
        "Our flagship location in the heart of downtown, offering full-service event planning and consultations.",
    },
    {
      id: 2,
      name: "Dang",
      image: "/assets/heroimage.png",
      address: "Ghorahi-10,Dang",
      phone: "9876543210",
      email: "example@gmail.com",
      description:
        "Specializing in outdoor and garden events, our Westside location features a beautiful showroom with sample setups.",
    },
    {
      id: 3,
      name: "Tulsipur",
      image: "/assets/heroimage.png",
      address: "Tulsipur-1,Dang",
      phone: "9876543210",
      email: "example@gmail.com",
      description:
        "Our Eastside location focuses on corporate events and features meeting spaces for client consultations.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/assets/map.png"
            alt="Our Outlets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Outlets
            </h1>
            <p className="text-xl text-white/90">
              Find an EventMaster location near you
            </p>
          </div>
        </div>
      </section>

      {/* Outlets Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Locations</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We have three convenient locations to serve you. Visit us today to
              discuss your event needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outlets.map((outlet) => (
              <Card key={outlet.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={outlet.image || "/placeholder.svg"}
                    alt={outlet.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{outlet.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{outlet.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                      <span>{outlet.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-primary" />
                      <span>{outlet.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-primary" />
                      <span>{outlet.email}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        outlet.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={`mailto:${outlet.email}`}>Contact</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Visit one of our outlets or contact us online to start planning your
            perfect event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="/booking">Book Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
