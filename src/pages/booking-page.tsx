"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Calendar } from "../components/ui/calendar";
import { format } from "date-fns";
import { CheckCircle, Mail, Phone } from "lucide-react";
import { cn } from "../lib/utils";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    location: "",
    budget: "",
    additionalInfo: "",
  });

  // Contact information for sending booking details
  const whatsappNumber = "+15551234567"; // Replace with your actual WhatsApp number
  const contactEmail = "info@eventmaster.com";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setFormData((prev) => ({
        ...prev,
        eventDate: format(selectedDate, "PPP"),
      }));
    }
  };

  const nextStep = () => {
    // For step 1, check if date is selected
    if (step === 1 && !date) {
      alert("Please select an event date");
      return;
    }

    setStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message content
    const createWhatsAppMessage = () => {
      return `
*New Event Booking Request*

*Event Details:*
- Event Type: ${formData.eventType}
- Event Date: ${formData.eventDate}
- Guest Count: ${formData.guestCount}
- Location: ${formData.location}
- Budget Range: ${formData.budget}
- Additional Info: ${formData.additionalInfo}

*Contact Information:*
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
    `;
    };

    // Log form data
    console.log("Form submitted:", formData);

    // Move to confirmation step
    setStep(3);

    // Automatically open WhatsApp with the booking information
    setTimeout(() => {
      const message = createWhatsAppMessage();
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank");
    }, 1000);
  };

  // Function to send booking via email
  const sendViaEmail = () => {
    const subject = `New Event Booking Request from ${formData.name}`;
    const body = `
New Event Booking Request

Event Details:
- Event Type: ${formData.eventType}
- Event Date: ${formData.eventDate}
- Guest Count: ${formData.guestCount}
- Location: ${formData.location}
- Budget Range: ${formData.budget}
- Additional Information: ${formData.additionalInfo}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Please contact the customer to discuss their event requirements.
    `;
    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  // Function to send booking via WhatsApp
  const sendViaWhatsApp = () => {
    const message = `
*New Event Booking Request*

*Event Details:*
- Event Type: ${formData.eventType}
- Event Date: ${formData.eventDate}
- Guest Count: ${formData.guestCount}
- Location: ${formData.location}
- Budget Range: ${formData.budget}
- Additional Info: ${formData.additionalInfo}

*Contact Information:*
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
    `;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/assets/heroimage.png"
            alt="Book Your Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Event
            </h1>
            <p className="text-xl text-white/90">
              Fill out the form below to start planning your perfect event
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-2">
                {[1, 2, 3].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium",
                      step === stepNumber
                        ? "bg-primary text-primary-foreground"
                        : step > stepNumber
                        ? "bg-primary/80 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {step > stepNumber ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      stepNumber
                    )}
                  </div>
                ))}
              </div>
              <div className="relative h-2 bg-muted rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${(step - 1) * 50}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>Event Details</span>
                <span>Personal Info</span>
                <span>Confirmation</span>
              </div>
            </div>

            {/* Step 1: Event Details */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                  <CardDescription>
                    Tell us about the event you're planning
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("eventType", value)
                      }
                      value={formData.eventType}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">
                          Corporate Event
                        </SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="social">Social Gathering</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <div className="p-4 border rounded-md">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateChange}
                        className="rounded-md"
                        disabled={(date) => date < new Date()}
                      />
                    </div>
                    {date && (
                      <p className="text-sm text-muted-foreground">
                        Selected date: {format(date, "PPP")}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guestCount">Estimated Guest Count *</Label>
                    <Input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      placeholder="Number of guests"
                      value={formData.guestCount}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Event Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="City, State or Venue (if known)"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("budget", value)
                      }
                      value={formData.budget}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="under5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-20k">
                          $10,000 - $20,000
                        </SelectItem>
                        <SelectItem value="20k-50k">
                          $20,000 - $50,000
                        </SelectItem>
                        <SelectItem value="over50k">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">
                      Additional Information
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Tell us more about your event vision, special requirements, etc."
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleChange}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-muted-foreground">
                    * Required fields
                  </p>
                  <Button onClick={nextStep}>Next Step</Button>
                </CardFooter>
              </Card>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Tell us how to reach you</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground">
                        By submitting this form, you agree to our{" "}
                        <a href="#" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                    <Button type="submit">Submit Booking</Button>
                  </CardFooter>
                </Card>
              </form>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Booking Submitted!
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <p className="text-lg mb-4">
                    Thank you for your booking request, {formData.name}!
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    We've received your information and will contact you within
                    24 hours to discuss your event in more detail.
                  </p>
                  <div className="bg-muted p-4 rounded-md text-left mb-6">
                    <h3 className="font-medium mb-2">Booking Summary:</h3>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <span className="font-medium">Event Type:</span>{" "}
                        {formData.eventType}
                      </li>
                      <li>
                        <span className="font-medium">Date:</span>{" "}
                        {formData.eventDate}
                      </li>
                      <li>
                        <span className="font-medium">Guests:</span>{" "}
                        {formData.guestCount}
                      </li>
                      <li>
                        <span className="font-medium">Location:</span>{" "}
                        {formData.location}
                      </li>
                      <li>
                        <span className="font-medium">Budget Range:</span>{" "}
                        {formData.budget}
                      </li>
                    </ul>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    Your booking details have been sent to our team via
                    WhatsApp. If the WhatsApp message didn't open automatically,
                    please contact us directly at {formData.phone}.
                  </p>

                  <div className="space-y-4 mt-6">
                    <p className="text-sm font-medium">
                      Send your booking details via:
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button
                        onClick={sendViaEmail}
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Send via Email
                      </Button>
                      <Button
                        onClick={sendViaWhatsApp}
                        className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        Send via WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-center mt-4">
                  <Button variant="outline" asChild>
                    <a href="/">Return to Home</a>
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
