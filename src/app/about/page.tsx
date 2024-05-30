import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly max-w-[1080px] mx-auto px-4 min-h-[84vh] shadow-lg bg-slate-800 text-center rounded-sm">
      <div className="pt-8 lg:pt-32">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="max-w-[600px] mx-auto font-medium px-4">
          Hello, I am Ajay Upadhyay, a B.Tech student in Computer Science Engineering, I embody a unique blend of technical expertise and literary passion. Driven by an insatiable curiosity, I delve into the fascinating world of STEM, exploring the intricate workings of technology and its potential to shape the future.
          Beyond the realm of algorithms and code, I finds solace in the written word. He devours books of all genres, immersing MySelf in captivating stories, thought-provoking ideas, and diverse perspectives. This love for literature fuels my creativity and allows me to express MySelf in a myriad of ways.
          As I continue my academic journey, I envisions a future where technology and literature converge, creating innovative solutions and enriching human experiences. My dedication to both fields promises a bright future filled with groundbreaking discoveries and captivating narratives.
        </p>
      </div>
      <div className="pt-8 lg:pt-32">
        <h1 className="text-3xl font-bold mb-5">Contact Details</h1>
        <div className="flex flex-col gap-4 px-4">
          <div className="text-zinc-300 font-medium hover:underline cursor-pointer pt-2">Email: 57ajay.u@gmail.com</div>
          <div className="text-zinc-300 font-medium">
            <Link href="https://github.com/57ajay" className="hover:underline">
              GitHub: Ajay Upadhyay
            </Link>
          </div>
          <div className="text-zinc-300 font-medium">
            <Link href="https://www.linkedin.com/in/upajay" className="hover:underline">
              LinkedIn: Ajay Upadhyay
            </Link>
          </div>
          <div className="text-zinc-300 font-medium">
            <Link href="https://x.com/57ajy" className="hover:underline">X/Twitter: Ajay Upadhyay</Link>
          </div>
          <div className="text-zinc-300 font-medium">
            <Link href="https://instagram.com/57aja.y" className="hover:underline">Instagram: Ajay Upadhyay</Link>
          </div>
          <div className="text-zinc-300 font-medium">
            <Link href="https://threads.net/@57aja.y" className="hover:underline">Threads: Ajay Upadhyay</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
