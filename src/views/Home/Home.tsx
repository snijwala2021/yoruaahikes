import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { MapPin, Mountain, Users, Calendar, Compass } from "lucide-react"

interface TrekCardProps {
  title: string
  description: string
  days: string
  difficulty: string
  imageSrc: string
  altText: string
  originalPrice: number
  price: number
}
const TrekCard = ({ title, description, days, difficulty, imageSrc, altText, price, originalPrice }: TrekCardProps) => {
  return (
    <div className="flex flex-col space-y-2 border border-gray-200 p-4 rounded-lg">
      <img
        src={imageSrc}
        width={300}
        height={200}
        alt={altText}
        className="rounded-lg object-cover w-full"
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
      <div className="flex items-center space-x-2 text-sm text-zinc-500">
        <Calendar className="h-4 w-4" />
        <span>{days}</span>
        <Compass className="h-4 w-4 ml-2" />
        <span>{difficulty}</span>
      </div>
      <Button className="mt-2">
        {originalPrice && <span className="line-through">
        ₹ {originalPrice}
        </span>}
        ₹ {price}
      </Button>
    </div>
  );
};
const FeaturedTreks = () => {
  const treks = [
    {
      title: "Har Ki Dun",
      description: "A challenging 5-day trek through misty mountains and hidden valleys.",
      days: "6 nights - 7 days",
      difficulty: "Easy - Moderate",
      imageSrc: "/placeholder.svg?height=200&width=300",
      altText: "Misty Mountain Trail",
      price: 12999,
      originalPrice: 15000,
    },
    {
      title: "Kuari Pass (Lord Curzon Trail)",
      description: "A breathtaking 3-day journey along dramatic coastal cliffs and secluded beaches.",
      days: "5 night - 6 days",
      difficulty: "Easy - Moderate",
      imageSrc: "/placeholder.svg?height=200&width=300",
      altText: "Kuari Pass",
      price: 9999,
      originalPrice: 16000,
    },
    {
      title: "Valley Of Flowers",
      description: "An unforgettable 7-day trek connecting a series of pristine alpine lakes.",
      days: "5 nights - 6 days",
      difficulty: "Easy - Moderate",
      imageSrc: "/placeholder.svg?height=200&width=300",
      altText: "Valley Of Flowers",
      price: 10999,
      originalPrice: 12000,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Featured Treks
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {treks.map((trek, index) => (
            <TrekCard key={index} {...trek} />
          ))}
        </div>
      </div>
    </section>
  );
};

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Explore the Wilderness with Yoruaa Hikes
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Embark on unforgettable adventures through stunning landscapes. Your journey into nature starts here.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Discover Treks</Button>
                <Button variant="outline">Our Story</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Yoruaa Hikes</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <MapPin className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Expert Local Guides</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  Our experienced guides ensure your safety and enrich your journey with local knowledge and stories.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Mountain className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Breathtaking Routes</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  Trek through some of the world's most stunning and diverse landscapes, from lush forests to rugged peaks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Small Group Adventures</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  Enjoy a more personalized experience with our small group policy, fostering new friendships along the way.
                </p>
              </div>
            </div>
          </div>
        </section>
        <FeaturedTreks />
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Hikers Say</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Star className="h-12 w-12 text-yellow-400" />
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  "An incredible experience! The guides were knowledgeable and the views were absolutely breathtaking."
                </p>
                <p className="font-semibold">- Sarah M.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Star className="h-12 w-12 text-yellow-400" />
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  "Well-organized treks with a perfect balance of challenge and comfort. Yoruaa Hikes exceeded my expectations!"
                </p>
                <p className="font-semibold">- John D.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Star className="h-12 w-12 text-yellow-400" />
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  "The small group size made for a fantastic, personalized adventure. I can't wait for my next trek with Yoruaa!"
                </p>
                <p className="font-semibold">- Emily L.</p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl">Ready for Your Next Adventure?</h2>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Join us on an unforgettable journey. Book your trek today and start exploring the world's most beautiful landscapes with Yoruaa Hikes.
                </p>
              </div>
              {/* <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit"
                  >Subscribe</Button>
                </form>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Sign up to receive updates and special offers from Yoruaa Hikes.
                </p>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home