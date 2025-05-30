import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
export default function ServicesPage() {
  const services = [
    {
      id: "wedding",
      title: "Wedding Planning",
      description:
        "Comprehensive wedding planning services to make your special day perfect. From venue selection to coordination on the day, we handle every detail.",
      image: "/assets/heroimage.png?height=600&width=400",
      features: [
        "Venue selection and booking",
        "Vendor coordination",
        "Budget management",
        "Timeline creation",
        "Day-of coordination",
        "Custom decor and styling",
      ],
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description:
        "Professional corporate event management for conferences, team building activities, product launches, and more.",
      image: "/assets/heroimage.png?height=600&width=400",
      features: [
        "Conference planning",
        "Team building activities",
        "Product launches",
        "Award ceremonies",
        "Client appreciation events",
        "Holiday parties",
      ],
    },
    {
      id: "cooking",
      title: "Cooking Services",
      description:
        "Creative birthday party planning for all ages with custom themes, entertainment, and memorable experiences.",
      image: "/assets/cooking.webp?height=600&width=400",
      features: [
        "Theme development",
        "Venue decoration",
        "Entertainment booking",
        "Custom cake and catering",
        "Party favors",
        "Photography services",
      ],
    },
    {
      id: "bratabandha",
      title: "Bratabandha Ceremony",
      description:
        "Elegant award ceremonies that recognize achievements with style, from corporate recognition to industry galas.",
      image: "/assets/bartha.webp?height=600&width=400",
      features: [
        "Venue selection",
        "Stage design",
        "Award presentation planning",
        "Entertainment coordination",
        "Red carpet experiences",
        "Photography and videography",
      ],
    },
    {
      id: "pasni",
      title: "Pasni Ceremony",
      description:
        "Book top-tier entertainment for your event, from live bands and DJs to performers and speakers.",
      image: "/assets/heroimage.png?height=600&width=400",
      features: [
        "Live music booking",
        "DJ services",
        "Performers and artists",
        "Keynote speakers",
        "Interactive entertainment",
        "Custom entertainment packages",
      ],
    },
    {
      id: "haldi and mehendi",
      title: "Haldi & Mehendi ceremony",
      description:
        "Capture your event with professional photography and videography services that document every special moment.",
      image: "/assets/heroimage.png?height=600&width=400",
      features: [
        "Event photography",
        "Videography services",
        "Photo booths",
        "Same-day editing",
        "Drone photography",
        "Digital galleries",
      ],
    },
    {
      id: "catering",
      title: "Catering Services",
      description:
        "Delicious catering options for any event, with custom menus tailored to your preferences and dietary needs.",
      image: "/assets/catring.jpg?height=600&width=400",
      features: [
        "Custom menu creation",
        "Buffet service",
        "Plated dinners",
        "Cocktail receptions",
        "Dessert stations",
        "Beverage service",
      ],
    },
    {
      id: "decor",
      title: "Decor & Styling",
      description:
        "Transform your venue with stunning decor and styling that creates the perfect atmosphere for your event.",
      image: "/assets/image3.jpeg",
      features: [
        "Theme development",
        "Floral arrangements",
        "Lighting design",
        "Table settings",
        "Backdrop creation",
        "Custom installations",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/assets/heroimage.png"
            alt="Our Services"
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
              Our Services
            </h1>
            <p
              className="text-xl text-white/90"
              style={{ fontFamily: "cursive" }}
            >
              Comprehensive event planning solutions for every occasion
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-5 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              At Sami Tent House, we offer a comprehensive range of event
              planning services tailored to meet your specific needs and
              preferences. From intimate gatherings to grand celebrations, we
              handle every detail with precision and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="group relative h-[500px] overflow-hidden border-0 rounded-lg shadow-md"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                {/* Light Overlay - Reduced opacity */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Content - Bottom positioned with slide-up effect */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <ul className="space-y-1 mb-4">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-white/90 flex items-center"
                      >
                        <span className="mr-2 text-white">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    asChild
                  >
                    <Link to={`/booking?service=${service.id}`}>
                      Book This Service
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
