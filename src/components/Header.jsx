import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  }

  const linkVariants = {
    hover: { scale: 1.1 }
  }

  const navItems = ['Features', 'Usage', 'Pricing', 'Customers' ,'Contact']

  return (
    <header id='home' className="bg-gradient-to-r from-blue-100 to-purple-100 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="text-2xl font-bold text-blue-600">
            NeuraWave
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.li key={item} variants={linkVariants} whileHover="hover">
              <a href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="absolute top-16 left-0 right-0 bg-gray-100 shadow-md md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <ul className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <motion.li key={item} variants={linkVariants} whileHover="hover">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </header>
  )
}