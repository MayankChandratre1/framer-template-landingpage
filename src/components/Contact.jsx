import { motion } from 'framer-motion'
import { Code, Users, Zap } from 'lucide-react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

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

export default function Contact() {
  return (
    <section id='contact' className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Connect with us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let&apos;s connect and discuss how we can help you achieve your business goals.
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div> */}

        <motion.div
          className="p-8 mx-auto w-full md:w-1/2 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Input label="Name" type={"text"} placeholder="Name" className="border-black text-lg mb-2" />
          <Input label="Email" type="email" placeholder="Email" className="border-black text-lg mb-2" />
          <Textarea placeholder="Write a message" className="border-black text-lg mb-10" />
          <Button>
                Send Message
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
