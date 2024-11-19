import { motion } from 'framer-motion'
import { Code, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: "Cutting-edge Technology",
    description: "We leverage the latest technologies to build innovative solutions for our clients."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our diverse team of experts brings a wealth of experience from various tech domains."
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "We pride ourselves on quick turnaround times without compromising on quality."
  }
]

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
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

export default function About() {
  return (
    <section id='about' className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About NeuraWave</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            NeuraWave is a leading digital innovation company, transforming businesses through cutting-edge technology and creative solutions.
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div> */}

        <motion.div
          className="bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            At  NeuraWave, our mission is to empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage. We're committed to pushing the boundaries of technology to create meaningful impact for our clients and their customers.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
          <p className="text-gray-600">
            We believe in a collaborative approach, working closely with our clients to understand their unique challenges and goals. Our agile methodology ensures that we deliver high-quality solutions that are tailored to each client's specific needs, on time and within budget.
          </p>
        </motion.div>
      </div>
    </section>
  )
}