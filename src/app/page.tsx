'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Users, Calendar, ShieldCheck, Car } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

interface StatCounterProps {
  end: number;
  duration?: number;
}

const StatCounter = ({ end, duration = 2000 }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentRef = counterRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number | undefined;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount(Math.floor((progress / duration) * end));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    if (isVisible) {
      animationFrame = requestAnimationFrame(updateCount);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span ref={counterRef}>{count.toLocaleString()}</span>;
};

export default function SuperiorAutoAndCycle() {
  const [isScrolled, setIsScrolled] = useState(false)

  const aboutRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const featuredInventory = [
    {
      title: 'Used Cars',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=80',
      description: 'Premium pre-owned vehicles carefully selected and thoroughly inspected',
      items: ['Sedans', 'SUVs', 'Trucks', 'Luxury Vehicles'],
      features: ['Vehicle History Reports', '150-Point Inspection', 'Extended Warranty Options'],
      priceRange: '$15,000 - $50,000',
      availableUnits: 25,
      popularModels: ['Toyota Camry', 'Honda CR-V', 'Ford F-150']
    },
    {
      title: 'ATVs & UTVs',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500&q=80',
      description: 'Rugged all-terrain vehicles for work and adventure',
      items: ['Sport ATVs', 'Utility ATVs', 'Side-by-Sides', 'Youth ATVs'],
      features: ['Off-Road Ready', 'Safety Equipment', 'Accessories Available'],
      priceRange: '$3,000 - $20,000',
      availableUnits: 15,
      popularModels: ['Polaris RZR', 'Can-Am Maverick', 'Honda FourTrax']
    },
    {
      title: 'Motorcycles',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=500&q=80',
      description: 'Diverse selection of motorcycles for every riding style',
      items: ['Sport Bikes', 'Cruisers', 'Touring Bikes', 'Off-Road'],
      features: ['DOT Approved', 'Full Service History', 'Gear Packages'],
      priceRange: '$5,000 - $25,000',
      availableUnits: 20,
      popularModels: ['Harley-Davidson Softail', 'Kawasaki Ninja', 'BMW R1250GS']
    },
    {
      title: 'Sport Bikes',
      image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=500&q=80',
      description: 'High-performance motorcycles for the ultimate riding experience',
      items: ['Super Sport', 'Street', 'Racing', 'Naked Bikes'],
      features: ['Race-Tuned', 'Performance Parts', 'Track Ready'],
      priceRange: '$8,000 - $30,000',
      availableUnits: 12,
      popularModels: ['Yamaha R6', 'Ducati Panigale', 'Honda CBR']
    },
    {
      title: 'Luxury Vehicles',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500&q=80',
      description: 'Exclusive selection of premium luxury automobiles',
      items: ['Luxury Sedans', 'SUVs', 'Sports Cars', 'Executive Cars'],
      features: ['Premium Features', 'Low Mileage', 'Certified Pre-Owned'],
      priceRange: '$35,000 - $100,000',
      availableUnits: 8,
      popularModels: ['Mercedes-Benz S-Class', 'BMW X7', 'Audi A8']
    },
    {
      title: 'Off-Road Vehicles',
      image: 'https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&w=500&q=80',
      description: 'Rugged vehicles built for the toughest terrain',
      items: ['Jeeps', 'Off-Road UTVs', 'Dirt Bikes', 'Adventure Bikes'],
      features: ['Trail Ready', '4x4 Capability', 'Lift Kits Available'],
      priceRange: '$12,000 - $45,000',
      availableUnits: 18,
      popularModels: ['Jeep Wrangler', 'Toyota 4Runner', 'Ford Bronco']
    }
  ];

  const testimonials = [
    {
      name: "Michael R.",
      role: "First-Time Buyer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      text: "The team at Superior Auto made buying my first car a breeze. Their transparent process and expert guidance helped me make the right choice.",
      rating: 5,
      vehicle: "Toyota Camry 2020",
      date: "March 2024"
    },
    {
      name: "Sarah L.",
      role: "Motorcycle Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      text: "Found my dream motorcycle here! The staff's knowledge about bikes is impressive, and they helped me find the perfect match for my riding style.",
      rating: 5,
      vehicle: "Harley-Davidson Softail",
      date: "February 2024"
    },
    {
      name: "David M.",
      role: "ATV Buyer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      text: "Outstanding service and selection of ATVs. They walked me through all the options and found exactly what I needed for both work and recreation.",
      rating: 5,
      vehicle: "Polaris Sportsman",
      date: "March 2024"
    },
    {
      name: "Emily W.",
      role: "Luxury Car Buyer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
      text: "Exceptional experience from start to finish. The attention to detail and personalized service made purchasing my luxury vehicle a pleasure.",
      rating: 5,
      vehicle: "BMW X5 2021",
      date: "January 2024"
    },
    {
      name: "James H.",
      role: "Off-Road Enthusiast",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      text: "Their knowledge of off-road vehicles is unmatched. Found the perfect Jeep for my weekend adventures. Couldn't be happier with the service!",
      rating: 5,
      vehicle: "Jeep Wrangler Rubicon",
      date: "February 2024"
    },
    {
      name: "Lisa K.",
      role: "Family SUV Buyer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      text: "They helped me find the perfect family SUV within my budget. The financing options were great, and the process was smooth and stress-free.",
      rating: 5,
      vehicle: "Honda CR-V 2022",
      date: "March 2024"
    },
    {
      name: "Robert T.",
      role: "Sport Bike Enthusiast",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      text: "Amazing selection of sport bikes! The test ride experience was fantastic, and the staff's expertise helped me make an informed decision.",
      rating: 5,
      vehicle: "Kawasaki Ninja ZX-6R",
      date: "January 2024"
    },
    {
      name: "Maria G.",
      role: "First UTV Purchase",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
      text: "Great experience buying my first UTV. The team was patient in explaining all the features and helping me choose the right model for my needs.",
      rating: 5,
      vehicle: "Can-Am Maverick X3",
      date: "February 2024"
    },
    {
      name: "Thomas P.",
      role: "Classic Car Collector",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80",
      text: "Their expertise in finding and evaluating classic vehicles is impressive. They helped me add a perfect piece to my collection.",
      rating: 5,
      vehicle: "Classic Mustang",
      date: "March 2024"
    },
    {
      name: "Amanda R.",
      role: "Repeat Customer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
      text: "This is my third purchase from Superior Auto. Their consistent quality and service keep me coming back. Highly recommended!",
      rating: 5,
      vehicle: "Mercedes-Benz GLE",
      date: "January 2024"
    }
  ];

  const badges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Guaranteed",
      description: "Every vehicle thoroughly inspected",
      color: "blue",
      highlight: "100% Satisfaction"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Competitive Pricing",
      description: "Best value for your money",
      color: "green",
      highlight: "Market-Leading Rates"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Expert Support",
      description: "Professional guidance always available",
      color: "purple",
      highlight: "24/7 Assistance"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Customer Satisfaction",
      description: "Your happiness is our priority",
      color: "red",
      highlight: "5-Star Service"
    }
  ];
  

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
            <Image 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
              alt="Hero background"
              fill
              className="object-cover brightness-50"
              priority
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

        <section id="inventory" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our extensive collection of quality vehicles and powersports equipment, 
            each carefully selected and maintained to meet our high standards.
          </p>
        </div>

        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              enabled: true,
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {featuredInventory.map((category, index) => (
              <SwiperSlide key={index}>
                <Card className="group h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden h-48">
                    <Image 
                      src={category.image} 
                      alt={category.title}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">{category.availableUnits} Units Available</p>
                        <p className="text-xs opacity-75">{category.priceRange}</p>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{category.title}</span>
                      <span className="text-sm text-blue-500 font-normal">View All →</span>
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-gray-700">Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-gray-700">Key Features:</h4>
                      <ul className="space-y-1">
                        {category.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-gray-700">Popular Models:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.popularModels.map((model, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button variant="gradient" className="w-full group">
                      <span className="group-hover:mr-2 transition-all duration-300">
                        Browse {category.title}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </Button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .swiper-button-prev,
          .swiper-button-next {
            width: 40px !important;
            height: 40px !important;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            cursor: pointer;
            z-index: 10;
          }

          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 16px !important;
            color: #374151;
            font-weight: bold;
          }

          .swiper-button-prev {
            left: 0;
          }

          .swiper-button-next {
            right: 0;
          }

          .swiper-button-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background-color: #f3f4f6;
          }

          .swiper-pagination {
            position: relative;
            bottom: 0 !important;
            margin-top: 2rem;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #e2e8f0;
            opacity: 1;
            margin: 0 6px !important;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: #6366f1;
            width: 24px;
            border-radius: 5px;
          }

          .swiper-pagination-bullet:hover {
            background: #cbd5e1;
          }
        `}</style>
      </div>
    </section>

    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">
            Our Achievement Numbers
          </h2>
          <div className="h-1 w-24 bg-white/30 mx-auto rounded animate-expand"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              number: 1000,
              label: "Happy Customers",
              description: "Satisfied clients who trust us",
              color: "from-blue-400 to-blue-600"
            },
            {
              icon: Car,
              number: 500,
              label: "Vehicles Sold",
              description: "Successfully delivered dreams",
              color: "from-purple-400 to-purple-600"
            },
            {
              icon: Calendar,
              number: 14,
              label: "Years Experience",
              description: "Serving with excellence",
              color: "from-green-400 to-green-600"
            },
            {
              icon: ShieldCheck,
              number: 100,
              label: "Quality Assured",
              description: "Commitment to excellence",
              color: "from-red-400 to-red-600"
            }
          ].map((stat, index) => (
            <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${stat.color} p-3 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2 flex justify-center items-baseline">
                    <StatCounter end={stat.number} />
                    {stat.label === "Quality Assured" && <span>%</span>}
                    {stat.label === "Years Experience" && <span>+</span>}
                  </h3>
                  <p className="text-lg font-medium text-white mb-1">{stat.label}</p>
                  <p className="text-sm text-blue-100 opacity-80">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>

    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Happy Customers</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear what our valued customers have to say about their experience with us.
          </p>
        </div>

        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              enabled: true,
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                  <div className="relative h-40 bg-gradient-to-r from-blue-500 to-indigo-600">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                      <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 p-6">
                    <div className="text-center mb-4">
                      <h4 className="font-bold text-xl mb-1">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <div className="flex justify-center space-x-1 my-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-center italic mb-4">"{testimonial.text}"</p>
                    
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Vehicle: {testimonial.vehicle}</span>
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-3 hover:bg-gray-50 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <style jsx global>{`
          .swiper-pagination {
            position: relative;
            bottom: 0 !important;
            margin-top: 2rem;
          }

          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #e2e8f0;
            opacity: 1;
            margin: 0 6px !important;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: #6366f1;
            width: 24px;
            border-radius: 5px;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            display: none;
          }

          .swiper-pagination-bullet:hover {
            background: #cbd5e1;
          }
        `}</style>
      </div>
    </section>

    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center group relative w-full max-w-[250px] animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-20 h-20 mx-auto mb-4 bg-${badge.color}-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 relative`}>
                <div className={`absolute inset-0 bg-${badge.color}-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping-slow`}></div>
                <div className={`relative text-${badge.color}-600 transform group-hover:rotate-12 transition-transform duration-300`}>
                  {badge.icon}
                </div>
              </div>
              
              <div className="transform group-hover:translate-y-[-8px] transition-transform duration-300">
                <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
                <span className={`inline-block text-${badge.color}-600 text-xs font-semibold bg-${badge.color}-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                  {badge.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-ping-slow {
          animation: ping-slow 2s infinite;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>

        <section ref={aboutRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl font-bold mb-2">About Our Business</h2>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Since 2010, Superior Auto and Cycle Sales LLC has been Massachusetts&apos; premier destination for quality vehicles and powersports equipment. Our commitment to exceptional service and customer satisfaction has made us a trusted name in the automotive and powersports community.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">Vehicle Selection</h3>
                  <p className="text-sm text-gray-600">Comprehensive range of pre-owned cars, trucks, and SUVs for every budget</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">Expert Staff</h3>
                  <p className="text-sm text-gray-600">Knowledgeable team with decades of combined industry experience</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">Powersports</h3>
                  <p className="text-sm text-gray-600">Specialized in ATVs, UTVs, and motorcycles for all skill levels</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">Financing</h3>
                  <p className="text-sm text-gray-600">Flexible financing options and competitive rates for all credit types</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 text-white p-6 rounded-lg mt-8">
              <h3 className="font-bold text-xl mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Extensive inventory with regular new arrivals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Transparent pricing and no hidden fees
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Professional vehicle inspection and maintenance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Dedicated after-sales support
                </li>
              </ul>
            </div>

            <Button variant="gradient" size="lg" className="mt-6">
              <span>Schedule a Visit</span>
            </Button>
          </div>
          

          <div className="space-y-6">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=500&q=80" 
                alt="Showroom" 
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500&q=80" 
                  alt="ATV" 
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=500&q=80" 
                  alt="Motorcycle" 
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      <section>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-2xl">🎉</span>
          <div className="text-white">
            <h3 className="font-bold text-lg">Special Spring Offer!</h3>
            <p className="text-sm">Get up to $1,000 off on selected vehicles</p>
          </div>
        </div>
        <Button 
          variant="shine" 
          size="lg" 
          className="bg-gradient-to-r from-gray-800 to-gray-900 mt-4 md:mt-0 text-white hover:from-gray-900 hover:to-black transition-all duration-300"
        >
          <span>Learn More →</span>
        </Button>
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
            <p className="mt-2 text-sm">
              Developed by{" "}
              <a 
                href="https://facebook.com/yobb03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Yobb Oramlis
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}