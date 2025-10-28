"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-50 to-white text-center pt-20"
      >
        <Image
          src={session.user?.image || "person-icon-5.png"}
          alt="my image"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I&apos;m{" "}
          <span className="text-indigo-600">{session.user?.name}</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
          my gmail {session.user?.email}. A passionate Full Stack Developer
          creating modern, scalable, and efficient web applications.
        </p>
        <div className="space-x-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            View Projects
          </Link>
          <button
            onClick={() => signOut()}
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Sign out Google
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-50 to-white text-center pt-20"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        Hi, <span className="text-indigo-600">stranger</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
        I think you are a passionate Full Stack Developer creating modern,
        scalable, and efficient web applications.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => signIn("google")}
          className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
        >
          Sign In With Google
        </button>
      </div>
    </section>
  );
}
