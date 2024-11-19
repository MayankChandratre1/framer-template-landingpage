import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Basic",
    price: 2,
    features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"]
  },
  {
    name: "Pro",
    price: 10,
    features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support", "Advanced Analytics"]
  },
  {
    name: "Plus",
    price: 50,
    features: ["Unlimited Users", "Unlimited Projects", "1TB Storage", "24/7 Dedicated Support", "Custom Integrations", "AI-Powered Insights"]
  }
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id='pricing' className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Plan
        </motion.h2>
        <div className="flex items-center justify-center mb-8">
          <span className="mr-3 text-sm font-medium">Monthly</span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            aria-label="Toggle annual billing"
          />
          <span className="ml-3 text-sm font-medium">Annual (Save 20%)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6  h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${isAnnual ? (plan.price * 12 * 0.8).toFixed(2) : plan.price}</span>
                  <span className="text-gray-600">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                <ul className="mb-6 space-y-2 flex-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Choose {plan.name}</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}