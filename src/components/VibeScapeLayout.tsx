import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function VibeScapeLayout() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-md">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full px-4 py-2 border border-gray-300"
          />
          <Button className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2">
            🔍
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="rounded-full border-2 border-purple-500 text-purple-600">
            Categories
          </Button>
          <Button variant="outline" className="rounded-full border-2 border-pink-500 text-pink-600">
            About
          </Button>
          <Button variant="outline" className="rounded-full border-2 border-orange-500 text-orange-600">
            Business
          </Button>
          <img
            src="https://placekitten.com/50/50"
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-white drop-shadow-lg"
        >
          Discover Your VibeScape
        </motion.h1>
        <p className="mt-4 text-lg text-white/90 max-w-2xl">
          Find inspiration, creativity, and connections that match your vibe.
        </p>
        <Button className="mt-6 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 shadow-lg hover:scale-105 transition">
          Get Started
        </Button>
      </section>

      {/* Category Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-16 bg-white rounded-t-3xl shadow-2xl">
        {[
          { name: "Travel", gradient: "from-orange-400 to-pink-500" },
          { name: "Art", gradient: "from-purple-500 to-indigo-500" },
          { name: "Business", gradient: "from-teal-400 to-cyan-500" },
        ].map((cat) => (
          <motion.div
            key={cat.name}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl bg-gradient-to-r ${cat.gradient} p-8 text-white font-bold text-xl shadow-lg cursor-pointer`}
          >
            {cat.name}
          </motion.div>
        ))}
      </section>
    </div>
  );
}