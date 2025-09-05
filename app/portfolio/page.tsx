import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Calendar } from "lucide-react"

export default function PortfolioPage() {
  // ✅ Dummy project data
  const projects = [
    {
      id: "1",
      title: " Rebel Sport",
      description: "Enhanced customer engagement and streamlined purchase process",
      image_url: "./projects/image11.png",
      live_url: "https://help.rebelsport.co.nz/hc/en-nz",
      domain: "Sports E-commerce",
      completed_date_text: "July 2024",
      technologies: [" HTML5", "JavaScript", "jQuery", "jQuery UI", "Font Awesome", "Salesforce Commerce Cloud", "PHP", "Google Maps API", "PayPal API"],
      features: ["User authentication", "Payment integration", "Admin dashboard"],
      metrics: { users: "5k+", sales: "$120k", rating: "4.8/5" },
      reviews: []
      //   {
      //     id: "r1",
      //     reviewer_name: "Alice Johnson",
      //     reviewer_role: "CEO, RetailX",
      //     reviewer_avatar_url: "/placeholder.svg?height=40&width=40&text=A",
      //     rating: 5,
      //     review_text: "Amazing work! Delivered on time and exceeded expectations.",
      //     review_date_text: "Aug 2024"
      //   }
      // ]
    },
    {
      id: "2",
      title: "The Wellness Shop",
      description: "Responsive, wellness-focused colour scheme Simple checkout flow ",
      image_url: "./projects/image12.png",
      live_url: "https://www.thewellnessshop.in/",
      domain: "Health & Beauty",
      completed_date_text: "June 2024",
      technologies: [" HTML5", "JavaScript", "jQuery", "jQuery UI", "Font Awesome", "Shopify APIs ", "Google Analytics",],
      features: ["Responsive design", "SEO optimized", "Contact form"],
      metrics: { visitors: "10k+", leads: "500+", rating: "4.9/5" },
      reviews: []
    },
    {
      id: "3",
      title: "CAPREIT",
      description: "Intuitive property search  functionality Clear tenant resource navigation  ",
      image_url: "./projects/image13.png",
      live_url: " https://www.capreit.ca/",
      domain: "Real-estate",
      completed_date_text: "June 2024",
      technologies: [" HTML5", "JavaScript", "jQuery", "jQuery UI", "MySQL", "Node ", "Google Analytics",],
      features: ["Responsive design", "SEO optimized", "Contact form"],
      metrics: { visitors: "10k+", leads: "500+", rating: "4.9/5" },
      reviews: []
    },
    {
      id: "4",
      title: "Delight Foods",
      description: "Responsive, wellness-focused colour scheme Simple checkout flow ",
      image_url: "./projects/image14.png",
      live_url: "https://www.delightfoods.com/",
      domain: "Gourmet E-commerce",
      completed_date_text: "June 2024",
      technologies: [" HTML5", "JavaScript", "jQuery", "AWS services", "Font Awesome", "Amazon API Gateway ", "Google Analytics",],
      features: ["Responsive design", "SEO optimized", "Contact form"],
      metrics: { visitors: "10k+", leads: "500+", rating: "4.9/5" },
      reviews: []
    },
    {
      id: "5",
      title: "Brikitt",
      description: "Minimalistic product presentation Smooth navigation",
      image_url: "./projects/image15.png",
      live_url: "https://www.brikitt.com/",
      domain: "E-commerce/Service",
      completed_date_text: "June 2024",
      technologies: [" HTML5", "JavaScript", "jQuery", "jQuery UI", "Font Awesome", "WordPress (PHP, MySQL) ", "Google Analytics",],
      features: ["Responsive design", "SEO optimized", "Contact form"],
      metrics: { visitors: "10k+", leads: "500+", rating: "4.9/5" },
      reviews: []

    },
    {
      id: "6",
      title: "Experion ",
      description: "Premium visual style to reflect luxury projects Easy access to project details",
      image_url: "./projects/image16.png",
      live_url: "https://www.experion.co/",
      domain: "Real Estate Developer",
      completed_date_text: "June 2024",
      technologies: [" HTML5", "JavaScript", "jQuery", " Modernizr", "Font Awesome", "ASP.NET (.NET framework) ", "Google Analytics",],
      features: ["Responsive design", "SEO optimized", "Contact form"],
      metrics: { visitors: "10k+", leads: "500+", rating: "4.9/5" },
      reviews: []
    },
    {
      id: "7",
      title: "AfnanPerfumes ",
      description: "AFNAN is a brand that goes beyond perfumes—it's about design, experience, and expertise.",
      image_url: "./projects/image18.png",
      live_url: "https://india.afnan.com/",
      domain: "Luxary Reatail",
      completed_date_text: "october 2024",
      technologies: [" HTML5", "JavaScript", "jQuery", " Modernizr", "Font Awesome", "ASP.NET (.NET framework) ", "Google Analytics",],
      features: ["Responsive design", "SEO optimized", "Contact form"],
      metrics: { visitors: "12k+", leads: "150+", rating: "4.7/5" },
      reviews: []
    },
    {
      id: "8",
      title: "Dishoom  ",
      description: "Restaurant Chain",
      image_url: "./projects/image19.png",
      live_url: "https://www.dishoom.com/",
      domain: "Restaurant Chain",
      completed_date_text: "Deacember 2024",
      technologies: [" HTML5", "JavaScript", "jQuery", , "Font Awesome", "css", "Cloudflare services", "Google Analytics",],
      features: ["Responsive design", "SEO optimized", "Contact form"],
      metrics: { visitors: "20k+", leads: "1000+", rating: "4.6/5" },
      reviews: []
    },
    {
      id: "9",
      title: "Medanta  ",
      description: "Multi-Specialty Hospital",
      image_url: "./projects/image20.png",
      live_url: "https://www.medanta.org/",
      domain: "Multi-Specialty Hospital",
      completed_date_text: "October 2024",
      technologies: [" HTML5", "JavaScript", " Google Tag Manager", "Facebook Pixel", "analytics integrations", " Modernizr", "Font Awesome", "ASP.NET (.NET framework) ", "Google Analytics",],
      features: ["Responsive design", "SEO optimized", "Contact form"],
      metrics: { visitors: "10k+", leads: "500+", rating: "4.9/5" },
      reviews: []
    },
    {
      id: "10",
      title: "CARE Hospitals ",
      description: "Clear medical service categories Patient-friendly navigation Trust-building visuals and tone",
      image_url: "./projects/image21.png",
      live_url: " https://www.carehospitals.com/",
      domain: "Healthcare",
      completed_date_text: "January 2025",
      technologies: [" HTML5", "JavaScript", "jQuery", " Modernizr", "Font Awesome", "Google Analytics",],
      features: ["Responsive design", "SEO optimized", "Contact form"],
      metrics: { visitors: "20k+", leads: "100+", rating: "4.2/5" },
      reviews: []
    },
  ]


  const pageContent = {
    main_title: "Our Project Portfolio",
    main_description: "Explore some of our successful projects built using modern web technologies.",
    cta_section_title: "Ready to Start Your Project?",
    cta_section_description: "Let’s bring your vision to life with our expertise.",
    cta_button1_text: "Book Free Consultation",
    cta_button2_text: "Get Custom Quote"
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {pageContent.main_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {pageContent.main_description}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden ">
                {/* Project Image */}
                <div className="relative group">
                  <Image
                    src={project.image_url}
                    alt={`${project.title} Homepage`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0   flex items-center justify-center">
                    <Button asChild variant="secondary" size="lg">
                      <Link href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Live Site
                      </Link>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.domain}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      {project.completed_date_text}
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <p className="text-gray-600">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  {Object.keys(project.metrics).length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Project Impact</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key.replace(/_/g, " ")}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Reviews */}
                  {project.reviews && project.reviews.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Client Reviews</h4>
                      <div className="space-y-4">
                        {project.reviews.map((review) => (
                          <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <Image
                                src={review.reviewer_avatar_url}
                                alt={review.reviewer_name}
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <div>
                                    <p className="font-medium text-sm">{review.reviewer_name}</p>
                                    <p className="text-xs text-gray-500">{review.reviewer_role}</p>
                                  </div>
                                  <div className="flex">
                                    {[...Array(review.rating)].map((_, i) => (
                                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{review.review_text}</p>
                                <p className="text-xs text-gray-400 mt-1">{review.review_date_text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button asChild className="flex-1">
                      <Link href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Site
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {pageContent.cta_section_title}
          </h2>
          <p className="text-xl mb-8">
            {pageContent.cta_section_description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/book">{pageContent.cta_button1_text}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/contact">{pageContent.cta_button2_text}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
