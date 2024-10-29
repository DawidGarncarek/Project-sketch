import React from 'react';
import { Star, ShoppingCart, User, Clock, Cpu} from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { id: 1, name: 'High-Performance GPU', price: 599.99, category: 'Components', image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Mechanical Keyboard', price: 129.99, category: 'Accessories', image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Gaming PC Bundle', price: 1499.99, category: 'Ready-made Sets', image: '/placeholder.svg?height=200&width=200' },
]

const features = [
  { icon: Cpu, title: 'Custom PC Builder', description: 'Personalize your computer set to your exact specifications' },
  { icon: Star, title: 'Customer Ratings', description: 'Read and leave reviews on our products and services' },
  { icon: ShoppingCart, title: 'Easy Shopping', description: 'Add items to your cart and checkout securely' },
  { icon: User, title: 'User Accounts', description: 'Create and manage your account for a personalized experience' },
  { icon: Clock, title: 'Order History', description: 'Track and review your past purchases' },
]

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#18181D] text-white">
      <header className="bg-[#4352FF] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TechZone</h1>
          <nav>
            <ul className="flex space-x-4">
              {/* <li><Link href="#" className="hover:text-[#2497F2]">Components</Link></li>
              <li><Link href="#" className="hover:text-[#2497F2]">Accessories</Link></li>
              <li><Link href="#" className="hover:text-[#2497F2]">Ready-made Sets</Link></li>
              <li><Link href="#" className="hover:text-[#2497F2]">Custom PC Builder</Link></li> */}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-[#000101] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to TechZone</h2>
            <p className="text-xl mb-8 text-[#7B7A7B]">Your one-stop shop for all your computer needs</p>
            {/* <Button size="lg" className="bg-[#2497F2] hover:bg-[#4352FF] text-white">Start Shopping</Button> */}
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* {products.map((product) => (
                <Card key={product.id} className="bg-[#000101] text-white">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                    <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                    <p className="text-sm text-[#7B7A7B]">{product.category}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#2497F2] hover:bg-[#4352FF] text-white">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))} */}
            </div>
          </div>
        </section>

        <section className="bg-[#000101] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose TechZone?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* {features.map((feature, index) => (
                <Card key={index} className="bg-[#18181D] text-white">
                  <CardHeader>
                    <feature.icon className="w-10 h-10 mb-2 text-[#2497F2]" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#7B7A7B]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))} */}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-[#7B7A7B]">Create an account today and start building your dream setup!</p>
            {/* <Button size="lg" className="bg-[#4352FF] hover:bg-[#2497F2] text-white">Create Account</Button> */}
          </div>
        </section>
      </main>

      <footer className="bg-[#000101] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {/* <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">About Us</Link></li>
                <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">Contact</Link></li>
                <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">FAQs</Link></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                {/* <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">Shipping Information</Link></li>
                <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">Returns & Exchanges</Link></li>
                <li><Link href="#" className="text-[#7B7A7B] hover:text-[#2497F2]">Terms & Conditions</Link></li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-[#7B7A7B]">Follow us on social media for the latest updates and tech news!</p>
              {/* Add social media icons here */}
            </div>
          </div>
          <div className="mt-8 text-center text-[#7B7A7B]">
            <p>&copy; 2023 TechZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;