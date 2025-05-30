import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Check, X } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default function PackagesPage() {
  const weddingPackages = [
    {
      name: "Essential",
      price: "$2,500",
      description: "Perfect for couples looking for basic planning assistance",
      features: [
        { name: "Day-of coordination", included: true },
        { name: "Venue selection assistance", included: true },
        { name: "Vendor recommendations", included: true },
        { name: "Timeline creation", included: true },
        { name: "Budget management", included: false },
        { name: "Full planning services", included: false },
        { name: "Decor design", included: false },
        { name: "Guest management", included: false },
      ],
    },
    {
      name: "Premium",
      price: "$5,000",
      description:
        "Our most popular package for comprehensive wedding planning",
      features: [
        { name: "Day-of coordination", included: true },
        { name: "Venue selection assistance", included: true },
        { name: "Vendor recommendations", included: true },
        { name: "Timeline creation", included: true },
        { name: "Budget management", included: true },
        { name: "Full planning services", included: true },
        { name: "Decor design", included: false },
        { name: "Guest management", included: false },
      ],
      highlighted: true,
    },
    {
      name: "Luxury",
      price: "$8,500",
      description:
        "The ultimate wedding planning experience with all services included",
      features: [
        { name: "Day-of coordination", included: true },
        { name: "Venue selection assistance", included: true },
        { name: "Vendor recommendations", included: true },
        { name: "Timeline creation", included: true },
        { name: "Budget management", included: true },
        { name: "Full planning services", included: true },
        { name: "Decor design", included: true },
        { name: "Guest management", included: true },
      ],
    },
  ];

  const corporatePackages = [
    {
      name: "Basic",
      price: "$3,000",
      description: "Essential services for small corporate events",
      features: [
        { name: "Venue selection", included: true },
        { name: "Event coordination", included: true },
        { name: "Basic AV setup", included: true },
        { name: "Catering coordination", included: true },
        { name: "Custom branding", included: false },
        { name: "Speaker management", included: false },
        { name: "Registration services", included: false },
        { name: "Post-event reporting", included: false },
      ],
    },
    {
      name: "Professional",
      price: "$6,500",
      description: "Comprehensive services for medium-sized corporate events",
      features: [
        { name: "Venue selection", included: true },
        { name: "Event coordination", included: true },
        { name: "Advanced AV setup", included: true },
        { name: "Catering coordination", included: true },
        { name: "Custom branding", included: true },
        { name: "Speaker management", included: true },
        { name: "Registration services", included: false },
        { name: "Post-event reporting", included: false },
      ],
      highlighted: true,
    },
    {
      name: "Executive",
      price: "$12,000",
      description:
        "Premium services for large corporate conferences and events",
      features: [
        { name: "Venue selection", included: true },
        { name: "Event coordination", included: true },
        { name: "Advanced AV setup", included: true },
        { name: "Catering coordination", included: true },
        { name: "Custom branding", included: true },
        { name: "Speaker management", included: true },
        { name: "Registration services", included: true },
        { name: "Post-event reporting", included: true },
      ],
    },
  ];

  const socialPackages = [
    {
      name: "Basic",
      price: "$1,500",
      description: "Essential services for small social gatherings",
      features: [
        { name: "Event coordination", included: true },
        { name: "Venue selection", included: true },
        { name: "Basic decor", included: true },
        { name: "Vendor coordination", included: true },
        { name: "Custom theme design", included: false },
        { name: "Entertainment booking", included: false },
        { name: "Photography services", included: false },
        { name: "Guest management", included: false },
      ],
    },
    {
      name: "Deluxe",
      price: "$3,500",
      description: "Comprehensive services for medium-sized social events",
      features: [
        { name: "Event coordination", included: true },
        { name: "Venue selection", included: true },
        { name: "Enhanced decor", included: true },
        { name: "Vendor coordination", included: true },
        { name: "Custom theme design", included: true },
        { name: "Entertainment booking", included: true },
        { name: "Photography services", included: false },
        { name: "Guest management", included: false },
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$6,000",
      description: "All-inclusive services for large social celebrations",
      features: [
        { name: "Event coordination", included: true },
        { name: "Venue selection", included: true },
        { name: "Luxury decor", included: true },
        { name: "Vendor coordination", included: true },
        { name: "Custom theme design", included: true },
        { name: "Entertainment booking", included: true },
        { name: "Photography services", included: true },
        { name: "Guest management", included: true },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Event Packages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Event Packages
            </h1>
            <p className="text-xl text-white/90">
              Choose the perfect package for your event needs
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Packages</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We offer a variety of packages designed to meet different needs
              and budgets. Choose the one that best fits your event requirements
              or contact us for a custom solution.
            </p>
          </div>

          <Tabs defaultValue="wedding" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="wedding">Wedding</TabsTrigger>
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
                <TabsTrigger value="social">Social Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="wedding" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {weddingPackages.map((pkg, index) => (
                  <Card
                    key={index}
                    className={`relative overflow-hidden ${
                      pkg.highlighted ? "border-primary shadow-lg" : ""
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">{pkg.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                            )}
                            <span
                              className={
                                feature.included ? "" : "text-muted-foreground"
                              }
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full ${
                          pkg.highlighted
                            ? ""
                            : "bg-muted-foreground hover:bg-muted-foreground/90"
                        }`}
                        asChild
                      >
                        <Link to="/booking">Select Package</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {corporatePackages.map((pkg, index) => (
                  <Card
                    key={index}
                    className={`relative overflow-hidden ${
                      pkg.highlighted ? "border-primary shadow-lg" : ""
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">{pkg.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                            )}
                            <span
                              className={
                                feature.included ? "" : "text-muted-foreground"
                              }
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full ${
                          pkg.highlighted
                            ? ""
                            : "bg-muted-foreground hover:bg-muted-foreground/90"
                        }`}
                        asChild
                      >
                        <Link to="/booking">Select Package</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="social" className="mt-0">
              <div className="grid md:grid-cols-3 gap-8">
                {socialPackages.map((pkg, index) => (
                  <Card
                    key={index}
                    className={`relative overflow-hidden ${
                      pkg.highlighted ? "border-primary shadow-lg" : ""
                    }`}
                  >
                    {pkg.highlighted && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-3xl font-bold">{pkg.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                            )}
                            <span
                              className={
                                feature.included ? "" : "text-muted-foreground"
                              }
                            >
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full ${
                          pkg.highlighted
                            ? ""
                            : "bg-muted-foreground hover:bg-muted-foreground/90"
                        }`}
                        asChild
                      >
                        <Link to="/booking">Select Package</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
              Don't see exactly what you need? We offer custom packages tailored
              to your specific requirements and budget.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us for Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                What's included in each package?
              </h3>
              <p className="text-muted-foreground">
                Each package includes different services as outlined in the
                package details. You can see a comprehensive list of included
                features for each package above.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Can I upgrade my package later?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade your package at any time before your event,
                subject to availability and timeline constraints. Contact us to
                discuss upgrade options.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Do you offer payment plans?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer flexible payment plans for all our packages.
                Typically, we require a deposit to secure your date, with the
                remaining balance due in installments.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                What if I need additional services?
              </h3>
              <p className="text-muted-foreground">
                We offer à la carte services that can be added to any package.
                Contact us to discuss your specific needs and we'll provide a
                custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Choose the perfect package for your event or contact us for a custom
            solution tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
