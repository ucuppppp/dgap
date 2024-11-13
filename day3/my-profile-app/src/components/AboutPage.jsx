export default function AboutPage() {
  return (
    <div className="container mx-auto px-20 min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p>
            Hello! I'm a passionate developer with a love for creating beautiful
            and functional web experiences. My journey in the world of coding
            has been an exciting adventure filled with continuous learning and
            growth.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying a good book on
            software architecture and design patterns.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
