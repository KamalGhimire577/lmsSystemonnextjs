import Link from "next/link";

export default function Home() {
  return (
    <>
     

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-50 to-white text-center pt-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I&apos;m <span className="text-indigo-600">Irahoza Daniel</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
          A passionate Full Stack Developer creating modern, scalable, and
          efficient web applications.
        </p>
        <div className="space-x-4">
          <Link
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
