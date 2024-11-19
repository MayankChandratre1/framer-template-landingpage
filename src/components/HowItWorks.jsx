import { motion } from 'framer-motion'
import { Upload, Settings, Zap } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: "Step 1: Upload or connect your data",
    description: "Easily import your data or connect to your existing data sources.",
    image: "https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png"
  },
  {
    icon: Settings,
    title: "Step 2: Customize analytics settings",
    description: "Tailor the analytics to your specific business needs and goals.",
    image: "https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png"
  },
  {
    icon: Zap,
    title: "Step 3: Unlock actionable insights",
    description: "Gain valuable insights to drive your business forward.",
    image: "https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png"
  }
]

const StepCard = ({ icon: Icon, title, description, image, index }) => (
  <motion.div
    className="flex flex-col  text-center  shadow-md relative rounded-xl overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <motion.div className="relative  w-full h-full">
      <Icon className="w-12 h-12 z-50 text-blue-500 absolute top-4 left-4 " />
      <img src={image} alt={title} className=" object-cover" />
    </motion.div>
   <motion.div className='z-50' whileHover={{
    opacity: 0,
    transition: { duration: 0.3 }
   }}>
   <div 
    
    className='w-full h-3/4 bottom-0 absolute z-20 bg-gradient-to-t from-blue-200/80 to-purple-200/10'>

    </div>
    <div className='absolute  bottom-0 z-30 px-3 py-2 flex flex-col items-start'>
     <h3 className="text-xl text-start font-semibold mb-2 text-black">{title}</h3>
     <p className="text-gray-500 text-start max-md:text-xs">{description}</p>
    </div>
   </motion.div>
    
  </motion.div>
)

export default function HowItWorks() {
  return (
    <section id='usage' className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}