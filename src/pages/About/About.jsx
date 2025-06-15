import kick from '../../assets/kick.jpg';
import { Link } from 'react-router-dom';
import "./about.scss";

const About = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="page-title">
          About <span>SD Fight Network</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          The ultimate hub for San Diego's fight community — uniting fighters, Trainer, gyms, and fans. We also offer various fighting related pages such as news, local events, ventues to rent, and equipment to purchase.
        </p>
      </section>

      {/* Divider */}
      <div className="my-12 border-t border-amber-500 w-32 mx-auto" />

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-amber-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            SD Fight Network was born to showcase and support Southern California’s dynamic fight culture. We promote local fighters, spotlight gyms, and keep fans connected with everything happening in the fight world right here in San Diego.
          </p>
        </div>
        <img
          src={kick}
          alt="Fighter training"
        />
      </section>

      {/* Community Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-amber-600 mb-4">Join the Movement</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Whether you're a fighter, coach, gym owner, or die-hard fan — SD Fight Network is your home base. Stay informed, connect with others, and be part of San Diego’s fight evolution.
        </p>
        <div className="mt-10">
            <Link to="/Fighters" className="m-5 px-6 py-3 bg-black text-white hover:bg-gray-900 font-semibold rounded-full shadow-md transition">
                Join as Fighter
            </Link>
            <Link to="/Trainers" className="m-5 px-6 py-3 bg-black text-white hover:bg-gray-900 font-semibold rounded-full shadow-md transition">
                Join as Trainer
            </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
