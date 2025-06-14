import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold flex items-center">
            Baxter
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <button><Link href = '/stock' className="hover:text-accent transition-colors">Trade</Link></button>
          <button ><Link href = '/community' className="font-bold text-accent">Community</Link></button>
          <button ><Link href = '/Courses' className="hover:text-accent transition-colors">Learn</Link></button>
          <button ><Link className="hover:text-accent transition-colors" href='/'>About</Link></button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="bg-accent hover:bg-green-600 hover:text-primary text-white py-2 px-4 rounded-lg transition-colors">
           <Link href="/signup">Sign In</Link> 
          </button>
          <button className="hidden md:block bg-primary text-primary hover:bg-green-600 py-2 px-4 rounded-lg transition-colors">
           <Link href = '/'> Get Started</Link>
          </button>
        </div>
      </div>
    </header>
  );
}