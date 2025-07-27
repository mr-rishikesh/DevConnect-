import { Link } from "react-router-dom";

const HomeLanding = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center px-6 py-20 max-w-6xl mx-auto">
        <div className="mb-4 inline-flex items-center px-4 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
          <span className="mr-2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">🚀 New</span>
          Introducing DevConnect!
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Build. Brag. Belong.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          DevConnect is your space to post achievements, connect with passionate developers, and find your dream project teammates — all in one place.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition">
            Join Now
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline font-medium py-3 px-6">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "🎯 Post Achievements",
              desc: "Show off your latest projects, certifications, or milestones and inspire others.",
            },
            {
              title: "🤝 Connect with Peers",
              desc: "Follow developers, comment on posts, and build meaningful relationships.",
            },
            {
              title: "🔍 Find Teammates",
              desc: "Looking to collaborate? Find people with the right skills and mindset.",
            },
            {
              title: "🧠 Knowledge Sharing",
              desc: "Write blogs, host sessions, and create a personal developer brand.",
            },
            {
              title: "💼 Career Growth",
              desc: "Get noticed by companies and communities through your active presence.",
            },
            {
              title: "📌 Hackathon Mode",
              desc: "Participate in hackathons and team up instantly with others.",
            },
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">How DevConnect Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "1. Sign Up",
              desc: "Create your developer profile in seconds.",
            },
            {
              title: "2. Post & Engage",
              desc: "Start sharing your wins and connect with others.",
            },
            {
              title: "3. Team Up",
              desc: "Collaborate on projects, hackathons, and startups.",
            },
          ].map((step, idx) => (
            <div key={idx} className="p-6 bg-blue-50 rounded-xl border">
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to build your dev network?</h2>
        <p className="mb-6 text-lg">Join DevConnect today and never code alone again.</p>
        <Link
          to="/signup"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Get Started Free
        </Link>
      </section>
    </div>
  );
};

export default HomeLanding;
