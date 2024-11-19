import { motion } from 'framer-motion'
import { Button } from "./ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="flex-1 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Revolutionize Your Business with AI Insights
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get smarter decisions, faster outcomes, and scalable growth with WaveAnalytics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" className="mt-4 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-semibold">
                Start Free Trial
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png"
              alt="AI Insights Dashboard"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}