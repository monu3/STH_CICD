"use client";

import { Button } from "../components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/assets/heroimage.png"
            alt="Contact Us"
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
              Contact Us
            </h1>
            <p
              className="text-xl text-white/90"
              style={{ fontFamily: "cursive" }}
            >
              Get in touch with our team to discuss your event needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-5 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Have questions about our services or ready to start planning your
              event? Reach out to us using the contact information below.
            </p> */}
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.3597251230681!2d81.61443165587998!3d28.595089483664758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a285f759b619c7%3A0xf5cedfd437ce9b57!2sSami%20Tent%20House!5e0!3m2!1sen!2snp!4v1746251081561!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Horizontal Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-muted rounded-lg min-w-[250px]">
              <MapPin className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-center">Birendranagar-6,surkhet</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-muted rounded-lg min-w-[250px]">
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Phone</h3>
              <p>9876543210</p>
              <p>9876543210</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-muted rounded-lg min-w-[250px]">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p>samitenthouse@gmail.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.facebook.com/salim.siddhikai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.instagram.com/samitenthouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.tiktok.com/@samitenthouse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
