"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import React, { useState, useEffect, useRef } from 'react';
import { text } from "stream/consumers"



const timeline = [
  {
    year: "2024",
    title: "Founded",
    description: "Zenbourg was established with a mission to help businesses thrive in the digital age",
  },
  {
    year: "2024",
    title: "30 Clients",
    description: "Were proud to have reached our first milestone of 30 satisfied clients across India, thanks to the dedication of our growing team.",
  },

  {
    year: "2025",
    title: "AI Integration",
    description: "Launched our AI tools integration service to help businesses leverage cutting-edge technology",
  },

]

export default function AboutPage() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      observerRef.current.observe(item);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-section relative bg-gradient-to-br from-blue-50 to-indigo-100  ">
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
            <h1 className="text-4xl md:text-5xl font-bold  mb-6 text-black-900">About Zenbourg</h1>

            <p className="text-xl text-black max-w-3xl mx-auto mb-8 ">
              We're a team of passionate experts dedicated to transforming businesses through innovative digital
              solutions. Our mission is to empower companies to thrive in the digital age with cutting-edge technology and
              strategic thinking.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

        </div>

      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Zenbourg was founded in 2024 with a simple yet powerful vision: to bridge the gap between cutting-edge
                  technology and business success. Our founders recognized that many companies struggled to navigate the
                  rapidly evolving digital landscape, often missing opportunities for growth and innovation.
                </p>
                <p>
                  Starting with a small team of dedicated experts, we began helping local businesses transform their
                  online presence. Word quickly spread about our results-driven approach, and within a year, we were
                  serving clients across the country.
                </p>
                <p>
                  Today, Zenbourg has grown into a global agency with offices in multiple countries, but our core
                  mission remains unchanged: to deliver exceptional digital solutions that drive real business results.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/Our Story.png?height=600&width=800"
                alt="Zenbourg team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Co-Founder Section */}
      <section className="py-20 bg-slate-900 text-gray-300 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leading Zenbourg with vision, innovation, and technical excellence from one of India's premier
              institutions.
            </p>
          </div>

          {/* Cards side by side */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Founder */}
            <Card className="overflow-hidden max-w-sm bg-slate-800">
              <div className="aspect-square relative">
                <Image src="/founder image.jpg" alt="Mayank Bhayal" fill className="object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-white">Mayank Bhayal</h3>
                <p className="text-blue-400 font-semibold mb-2">CEO & Founder</p>
                <p className="text-gray-400 mb-4">IIT Mandi Alumni</p>
                <p className="text-gray-400 text-sm mb-6">
                  Visionary leader with expertise in digital transformation and cutting-edge technology solutions.
                </p>
                <Link
                  href="https://www.linkedin.com/in/mayank-bhayal-5a7123202/"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>Connect on LinkedIn</span>
                </Link>
              </CardContent>
            </Card>

            {/* Co-Founder */}
            <Card className="overflow-hidden max-w-sm bg-slate-800">
              <div className="aspect-square relative">
                <Image src="/cofounder.jpg" alt="Co-Founder Name" fill className="object-cover" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-white">Srajan Dwivedi</h3>
                <p className="text-blue-400 font-semibold mb-2">COO & Co-Founder</p>
                <p className="text-gray-400 mb-4">NIT Jaipur Alumni</p>
                <p className="text-gray-400 text-sm mb-6">
                  Driving innovation and building scalable solutions to transform businesses.


                </p>
                <div className="pt-8">
                  <Link
                    href="https://www.linkedin.com/in/srajan-dwivedi-3780a7264/"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>Connect on LinkedIn</span>
                  </Link></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From our founding to today, we've been on an exciting path of growth and innovation.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Animated Progress Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-blue-400 transition-all duration-2000 ease-out"
              style={{
                height: `${(visibleItems.size / timeline.length) * 100}%`
              }}
            ></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item relative"
                  data-index={index}
                >
                  {/* Year Badge - Always Centered */}
                  <div className="flex items-center justify-center mb-6 relative z-10">
                    <div
                      className={`bg-blue-600 text-white px-4 py-2 rounded-full font-bold relative transition-all duration-700 transform ${visibleItems.has(index)
                        ? 'scale-100 opacity-100'
                        : 'scale-75 opacity-0'
                        }`}
                      style={{
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      {item.year}
                      {/* Pulse animation for visible items */}
                      {visibleItems.has(index) && (
                        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                      )}
                    </div>
                  </div>

                  {/* Content Card - Alternating Sides */}
                  <div className="relative flex items-center">
                    {/* Left side content for even items */}
                    <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? '' : 'md:opacity-0 md:pointer-events-none'}`}>
                      {index % 2 === 0 && (
                        <div
                          className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 transform hover:shadow-xl md:text-right ${visibleItems.has(index)
                            ? 'translate-y-0 opacity-100'
                            : '-translate-x-8 opacity-0'
                            }`}
                          style={{
                            transitionDelay: `${index * 150 + 200}ms`
                          }}
                        >
                          <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>

                          {/* Subtle accent line */}
                          <div
                            className={`h-1 bg-blue-600 rounded-full mt-4 transition-all duration-500 ml-auto ${visibleItems.has(index) ? 'w-12' : 'w-0'
                              }`}
                            style={{
                              transitionDelay: `${index * 150 + 400}ms`
                            }}
                          ></div>
                        </div>
                      )}
                    </div>

                    {/* Right side content for odd items */}
                    <div className={`w-full md:w-1/2 p-4 ${index % 2 === 1 ? '' : 'md:opacity-0 md:pointer-events-none'}`}>
                      {index % 2 === 1 && (
                        <div
                          className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 transform hover:shadow-xl md:text-left ${visibleItems.has(index)
                            ? 'translate-y-0 opacity-100'
                            : 'translate-x-8 opacity-0'
                            }`}
                          style={{
                            transitionDelay: `${index * 150 + 200}ms`
                          }}
                        >
                          <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>

                          {/* Subtle accent line */}
                          <div
                            className={`h-1 bg-blue-600 rounded-full mt-4 transition-all duration-500 ${visibleItems.has(index) ? 'w-12' : 'w-0'
                              }`}
                            style={{
                              transitionDelay: `${index * 150 + 400}ms`
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              These core principles guide everything we do at Zenbourg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-blue-700 p-8 rounded-lg transition-colors duration-300 hover:bg-blue-800 cursor-pointer">
              <h3 className="font-bold text-xl mb-4">Innovation</h3>
              <p className="opacity-90">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions that keep our
                clients ahead of the curve.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-700 p-8 rounded-lg transition-colors duration-300 hover:bg-blue-800 cursor-pointer">
              <h3 className="font-bold text-xl mb-4">Excellence</h3>
              <p className="opacity-90">
                We hold ourselves to the highest standards in everything we do, from code quality to client
                communication.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-blue-700 p-8 rounded-lg transition-colors duration-300 hover:bg-blue-800 cursor-pointer">
              <h3 className="font-bold text-xl mb-4">Client Success</h3>
              <p className="opacity-90">
                We measure our success by the results we deliver for our clients. Their growth and satisfaction are our
                top priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business grow with our premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
