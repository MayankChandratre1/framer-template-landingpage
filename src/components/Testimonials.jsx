import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png",
    quote: "WaveAnalytics has transformed the way we make decisions. The AI-driven insights have been game-changing for our business strategy."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, GrowthHub",
    image: "https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png",
    quote: "The real-time analytics provided by WaveAnalytics have significantly improved our campaign performance. It's an indispensable tool for modern marketers."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Data Scientist, InnovateCo",
    image: "https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png",
    quote: "As a data scientist, I'm impressed by the depth and accuracy of WaveAnalytics' AI models. It's made our data analysis process much more efficient."
  }
]

export default function Testimonials() {
  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => setActiveIndex(swiper.activeIndex))
    }
  }, [swiper])

  return (
    <section id='customers' className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={setSwiper}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="bg-gradient-to-l from-blue-200 to-purple-200 p-6 rounded-lg shadow-xl mx-5 md:mx-40 mb-5 md:mb-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 shadow-md"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-blue-500 mb-2" />
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="absolute top-[40%] left-0 z-10 -translate-y-1/2 bg-trancparent rounded-full p-2 shadow-md"
            onClick={() => swiper.slidePrev()}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            className="absolute top-[40%] right-0 z-10 -translate-y-1/2 bg-transparent rounded-full p-2 shadow-md"
            onClick={() => swiper.slideNext()}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}