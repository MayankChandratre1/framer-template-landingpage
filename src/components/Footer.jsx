import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-blue-100 to-purple-100'>
        <div className='grid grid-cols-2 md:grid-cols-3 px-3 py-2'>
            <div className='col-span-2 md:col-span-1 mb-3'>
                <h5 className='font-bold'>&copy;NeuraWave</h5>
                <p>Since 2008</p>
                <p>123-456-7890</p>
                <p>support@neurawave.com</p>
                <p>Howrah Bridge Area, Kolkata, West Bengal - 413512</p>
            </div>
            <div>
                <h5 className='font-bold'>Navigation</h5>
                <ul>
                    <li className='hover:underline'><a href="#home">Home</a></li>
                    <li className='hover:underline'><a href="#features">Features</a></li>
                    <li className='hover:underline'><a href="#usage">Usage</a></li>
                    <li className='hover:underline'><a href="#pricing">Pricing</a></li>
                    <li className='hover:underline'><a href="#customers">Customers</a></li>
                    <li className='hover:underline'><a href="#about">About</a></li>
                    <li className='hover:underline'><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div>
                <h5 className='font-bold'>Follow Us</h5>
                <ul>
                    <li className='hover:underline'><a href="https://github.com/MayankChandratre1">Github</a></li>
                    <li className='hover:underline'><a href="https://www.linkedin.com/in/mayankchandratre/">LinkedIn</a></li>
                    <li className='hover:underline'><a href="https://www.instagram.com/its_mayank_chandratre/">Instagram</a></li>
                    <li className='hover:underline'><a href="https://x.com/chandratrem91">Twitter</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer