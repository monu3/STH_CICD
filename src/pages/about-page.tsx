import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, Users, Target, Lightbulb, Star } from "lucide-react";

export default function AboutPage() {
  const testimonials = [
    {
      name: "Monu Siddhique",
      role: "Bride",
      content:
        "Sami Tent House made our wedding day absolutely perfect. Every detail was handled with care and professionalism.",
      rating: 5,
    },
    {
      name: "Shyam kumar",
      role: "Principle of surkhet horizon academy",
      content:
        "Our company conference was flawlessly executed. The team's attention to detail and responsiveness was impressive.",
      rating: 5,
    },
    {
      name: "Sita K.C",
      role: "Birthday Celebrant",
      content:
        "My 30th birthday party exceeded all expectations. The theme, decorations, and coordination were spot on!",
      rating: 4,
    },
  ];

  const milestones = [
    {
      year: "2013",
      title: "Company Founded",
      description:
        "Sami Tent House was established with a vision to create exceptional events.",
    },
    {
      year: "2015",
      title: "Expanded Services",
      description:
        "Added corporate and School event planning to our service offerings.",
    },
    {
      year: "2018",
      title: "Award Recognition",
      description:
        "Received 'Best Event Planning Company' award in the region.",
    },
    {
      year: "2020",
      title: "Virtual Events",
      description: "Pioneered innovative virtual and hybrid event solutions.",
    },
    {
      year: "2023",
      title: "International Expansion",
      description:
        "Opened our first international office to serve global clients.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/assets/heroimage.png"
            alt="About Us"
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
              About Sami Tent House
            </h1>
            <p
              className="text-xl text-white/90"
              style={{ fontFamily: "cursive" }}
            >
              Creating unforgettable experiences since 2013
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/assets/heroimage.png"
                alt="Our Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-5"></div>
              <p className="text-lg">
                Sami Tent House is a premier event planning company dedicated to
                creating exceptional experiences for our clients. With over a
                decade of experience in the industry, we've built a reputation
                for excellence, creativity, and attention to detail.
              </p>
              <p>
                Our team of passionate event planners brings together diverse
                skills and expertise to transform your vision into reality. We
                believe that every event tells a story, and we're committed to
                making yours unforgettable.
              </p>
              <p>
                From intimate gatherings to grand celebrations, corporate
                functions to weddings, we approach each event with the same
                level of dedication and professionalism, ensuring that every
                detail is perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg mb-4">
                To create exceptional events that exceed client expectations by
                combining creativity, precision, and personalized service.
              </p>
              <p>
                We are committed to understanding our clients' unique visions
                and bringing them to life through meticulous planning,
                innovative design, and flawless execution.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-10 w-10 text-primary mr-4" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg mb-4">
                To be the leading event planning company known for creating
                transformative experiences that leave lasting impressions.
              </p>
              <p>
                We envision a world where every celebration becomes a cherished
                memory, every corporate event achieves its objectives, and every
                client feels valued and understood throughout the planning
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We offer comprehensive event planning services tailored to meet
              your specific needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted p-6 rounded-lg">
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Event Conceptualization
              </h3>
              <p>
                We work closely with you to develop a unique concept that
                reflects your vision, preferences, and objectives.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Venue Selection</h3>
              <p>
                We help you find the perfect venue that aligns with your event
                requirements, budget, and aesthetic preferences.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Vendor Management</h3>
              <p>
                We coordinate with trusted vendors to ensure all aspects of your
                event are handled professionally.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Design & Decor</h3>
              <p>
                Our creative team designs stunning event spaces that create the
                perfect atmosphere for your occasion.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Logistics & Coordination
              </h3>
              <p>
                We handle all the logistical details to ensure your event runs
                smoothly from start to finish.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">On-Site Management</h3>
              <p>
                Our team provides professional on-site management to address any
                issues and ensure a flawless experience.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              A decade of creating exceptional events and unforgettable
              experiences.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>

                  {/* Content */}
                  <div
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2 text-center md:text-right px-4 md:pr-12">
                      <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                    </div>
                    <div className="md:w-1/2 mt-2 md:mt-0 text-center md:text-left px-4 md:pl-12">
                      <p>{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to
              say about their experience with EventMaster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
