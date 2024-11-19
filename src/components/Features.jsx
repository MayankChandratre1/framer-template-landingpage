import { motion } from 'framer-motion'
import { Lightbulb, BarChart2, Clock, Scale } from 'lucide-react'

const features = [
  {
    icon: Lightbulb,
    title: "AI-Powered Insights",
    description: "Leverage cutting-edge AI algorithms to uncover hidden patterns and opportunities in your data."
  },
  {
    icon: BarChart2,
    title: "Advanced Analytics",
    description: "Gain deep understanding of your business performance with our comprehensive analytics tools."
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description: "Stay on top of your metrics with real-time dashboards and instant notifications."
  },
  {
    icon: Scale,
    title: "Scalable Solutions",
    description: "Our platform grows with your business, handling increasing data volumes with ease."
  }
]

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-gradient-to-l from-blue-200 to-purple-200 p-6 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Icon className="h-12 w-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

export default function FeaturesSection() {
  return (
    <section id='features' className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}