'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function SuperiorAutoAndCycleSales() {
  const [isScrolled, setIsScrolled] = useState(false)

  const aboutRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const featuredInventory = [
    {
      title: 'Used Cars',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=80',
      description: 'Quality pre-owned vehicles at competitive prices',
      items: ['Sedans', 'SUVs', 'Trucks', 'Luxury Vehicles']
    },
    {
      title: 'ATVs & UTVs',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500&q=80',
      description: 'All-terrain vehicles for work and recreation',
      items: ['Sport ATVs', 'Utility ATVs', 'Side-by-Sides', 'Youth ATVs']
    },
    {
      title: 'Motorcycles',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=500&q=80',
      description: 'Wide selection of motorcycles for every rider',
      items: ['Sport Bikes', 'Cruisers', 'Touring Bikes', 'Off-Road']
    },
    {
      title: 'Sport Bikes',
      image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=500&q=80',
      description: 'High-performance motorcycles for thrill-seekers',
      items: ['Super Sport', 'Street', 'Racing', 'Naked Bikes']
    },
    {
      title: 'Luxury Vehicles',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500&q=80',
      description: 'Premium vehicles for discerning buyers',
      items: ['Luxury Sedans', 'SUVs', 'Sports Cars', 'Executive Cars']
    },
    {
      title: 'Off-Road Vehicles',
      image: 'https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&w=500&q=80',
      description: 'Vehicles built for adventure',
      items: ['Jeeps', 'Off-Road UTVs', 'Dirt Bikes', 'Adventure Bikes']
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (sectionId === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Superior Auto and Cycle Sales LLC</h1>
          <nav>
            <ul className="flex space-x-6">
              {['home', 'inventory', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium hover:text-gray-600 transition-colors cursor-pointer ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
              alt="Hero background"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Superior Auto and Cycle Sales</h1>
            <p className="text-xl mb-8 drop-shadow-lg">Your trusted source for quality vehicles, ATVs, and motorcycles in Massachusetts</p>
            <div className="flex gap-4 justify-center">
              <Button variant="shine" size="lg">
                <span>View Inventory</span>
              </Button>
              <Button variant="shine" size="lg" className="bg-gradient-to-r from-gray-800 to-gray-900">
                <span>Contact Us</span>
              </Button>
            </div>
          </div>
        </section>

        <section id="inventory" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12"
            >
              {featuredInventory.map((category, index) => (
                <SwiperSlide key={index}>
                  <Card className="group overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title} 
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="gradient" className="w-full">
                        <span>Browse {category.title}</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section ref={aboutRef} className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Our Business</h2>
                <p className="text-lg mb-6">Superior Auto and Cycle Sales LLC is your trusted source for quality vehicles and powersports equipment. Located in Massachusetts, we offer:</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Wide selection of pre-owned vehicles
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    ATVs and UTVs for work and recreation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Motorcycles for every riding style
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Competitive pricing and financing options
                  </li>
                </ul>
                <Button variant="gradient" size="lg">
                  <span>Contact Us Today</span>
                </Button>
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=500&q=80" 
                  alt="Showroom" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500&q=80" 
                    alt="ATV" 
                    className="rounded-lg shadow-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=500&q=80" 
                    alt="Motorcycle" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info - Left Side */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Superior Auto and Cycle Sales LLC</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span>123 Vehicle Lane, Autoville, MA 02145</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span>508-974-6224</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>info@superiorautocycle.com</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Business Hours:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="First Name" 
                      className="bg-gray-600 border-gray-500 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Last Name" 
                      className="bg-gray-600 border-gray-500 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-gray-600 border-gray-500 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-gray-600 border-gray-500 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    className="bg-gray-600 border-gray-500 text-white placeholder:text-gray-400 min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Superior Auto and Cycle Sales LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}