import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FIGHTING_STYLES_ARRAY } from "../../constants/fightingStyles";
import { GiBoxingGloveSurprise, GiBelt, GiFist, GiHighKick, GiBootKick } from "react-icons/gi";
import { MdSportsMma } from "react-icons/md";
import { FaUserNinja, FaDumbbell, FaFistRaised, FaUserSecret, FaUserAlt, FaMusic, FaUserShield, FaUserInjured } from "react-icons/fa";

import { Link } from "react-router-dom";

import boxing from "../../assets/boxingAnimation.gif";
import boxing2 from "../../assets/boxingAnimation2.gif";
import boxing3 from "../../assets/boxingAnimation3.gif"

const Home = () => {

    const lines = [
        "Train",
        "with",
        "Purpose",
        "and",
        "Evolve",
        "Constantly"
    ];
    const shimmerCls = () => {return `font-extrabold bg-gradient-to-r from-yellow-700 via-black to-black bg-[length:150%_100%] bg-clip-text text-transparent animate-gradient`};

    const SignUpCard = ({title, desc, button, cardType = 'fight'}) => (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
                {/* Animated Gradient Background using theme variables */}
                <div
                    className="absolute inset-0 w-full h-full animate-gradient-2 opacity-40 blur-lg z-0"
                    style={{
                        background: 'linear-gradient(90deg, var(--primary-color), transparent, var(--secondary-color))',
                        backgroundSize: '400% 400%'
                    }}
                />
                {/* Glass effect content above the animation */}
                <div
                    className="relative rounded-2xl backdrop-blur-md p-6 text-center z-10"
                    style={{
                        background: 'rgba(255,255,255,0.10)',
                        color: 'var(--text-color, #000)'
                    }}
                >
                    <h2 className="text-3xl font-bold mb-2 drop-shadow-lg text-center">
                        {title}
                    </h2>
                    <p className="text-lg">
                        {desc}
                    </p>
                    <button
                        className="mt-4 px-6 py-2 rounded-lg font-semibold transition"
                        style={{
                            background: 'var(--primary-color)',
                            color: 'var(--text-color)'
                        }}
                    >
                        {button}
                    </button>
                </div>
            </div>
        </div>
    );

    const Hero = () => (
        <div className="relative h-screen overflow-hidden bg-black">
            {/* Background GIF */}
            <img
                src={boxing}
                alt="Boxing animation"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90 z-10" />

            {/* Text Layer */}
            <div className="relative z-20 flex items-top justify-end h-full pr-[10%] max-[668px]:pt-[15%] min-[668px]:pt-[10%] font-bebas">
                <motion.h1
                    initial={{ opacity: 0, x: -700 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, // Incremental delay
                        duration: 0.8,
                        ease: "easeOut"}}
                    className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
                >
                {lines.map((line, index) => {
                    return(
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -1000 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                            delay: index * 1, // Incremental delay
                            duration: 0.8,
                            ease: "easeOut"
                            }}
                            className={shimmerCls(160, index)}
                        >
                            {line}
                        </motion.div>
                    )})}
                </motion.h1>
            </div>
        </div>
    );

    // Map fighting styles to icons (add more as needed)
    const styleIcons = {
        "Boxing": <GiBoxingGloveSurprise className="text-6xl text-red-600 mb-4 mx-auto" />,
        "Muay Thai": <MdSportsMma className="text-6xl text-blue-600 mb-4 mx-auto" />,
        "MMA": <GiFist className="text-6xl text-green-600 mb-4 mx-auto" />,
        "Kickboxing": <GiBootKick className="text-6xl text-yellow-600 mb-4 mx-auto" />,
        "Krav Maga": <FaUserSecret className="text-6xl text-gray-700 mb-4 mx-auto" />,
        "Wrestling": <FaDumbbell className="text-6xl text-orange-600 mb-4 mx-auto" />,
        "Ju-Jitsu": <FaUserAlt className="text-6xl text-lime-600 mb-4 mx-auto" />,
        "Judo": <FaFistRaised className="text-6xl text-indigo-600 mb-4 mx-auto" />,
        "Capoeira": <FaMusic  className="text-6xl text-pink-600 mb-4 mx-auto" />,
        "Karate": <GiBelt  className="text-6xl text-gray-900 mb-4 mx-auto" />,
        "Taekwondo": <GiHighKick className="text-6xl text-blue-400 mb-4 mx-auto" />,
        "Win Chun": <FaUserNinja className="text-6xl text-black mb-4 mx-auto" />,
        "Kung fu": <FaUserShield className="text-6xl text-yellow-800 mb-4 mx-auto" />,
        "Tai chi": <FaUserInjured className="text-6xl text-gray-500 mb-4 mx-auto" />,
    };

    // Placeholder descriptions for each style
    const styleDescriptions = {
        "Boxing": "Master footwork, speed, and precision punches. Explore techniques from legends of the ring.",
        "Muay Thai": "Embrace the art of 8 limbs. Train with kicks, knees, elbows, and clinch to dominate the fight.",
        "MMA": "Blend striking and grappling into a complete combat system. Train across disciplines to become a well-rounded and versatile fighter.",
        "Kickboxing": "Combine powerful kicks and punches for a dynamic stand-up fighting style.",
        "Krav Maga": "Practical self-defense with real-world applications. Learn to neutralize threats quickly and efficiently.",
        "Wrestling": "Dominate with takedowns, throws, and ground control. Build strength and technique.",
        "Ju-Jitsu": "Master the ground game with leverage, submissions, and positional control.",
        "Judo": "Use your opponent's force against them. Throws, pins, and submissions for all sizes.",
        "Capoeira": "Blend dance, acrobatics, and martial arts in this unique Brazilian style.",
        "Karate": "Traditional striking art focused on discipline, speed, and precision.",
        "Taekwondo": "Famous for its high, fast kicks and dynamic footwork.",
        "Win Chun": "Close-range combat emphasizing quick strikes and defense.",
        "Kung fu": "A diverse range of Chinese martial arts with rich history and philosophy.",
        "Tai chi": "Gentle, flowing movements for balance, health, and internal power.",
    };

    const StylesSection = () => (
        <div className="text-center pt-20 pb-20">
            <h3 className="text-xl mb-6">
                Our Network primarily consists of these fighting practices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20 py-10">
                {FIGHTING_STYLES_ARRAY.map((style) => (
                    <motion.div
                        key={style}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-2xl shadow-xl overflow-hidden"
                    >
                        <Card className="h-full">
                            <CardContent className="p-6 text-center">
                                {styleIcons[style] || <GiFist className="text-6xl text-gray-400 mb-4 mx-auto" />}
                                <h2 className="text-2xl font-bold mb-2">{style}</h2>
                                <p>
                                    {styleDescriptions[style] || "A unique and powerful martial art."}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    const SignUpSection = () => {
        return (
            <div className="relative w-full h-screen overflow-hidden">
                <img
                    src={boxing2}
                    alt="Boxing layer 1"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
                />
                <img
                    src={boxing3}
                    alt="Boxing layer 2"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 z-10"
                />

                <div className="relative z-20 flex items-center justify-center h-full text-white">
                    <SignUpCard
                        title="Sign up to Fight"
                        desc="We will find you a sparring partner who is similar in size and skill"
                        button={(<Link to="/fighters">Fight</Link>)}
                        cardType="fight" />
                    <SignUpCard
                        title="Sign up to Train"
                        desc="We will find individualized classes based on your skill level"
                        button={(<Link to="/trainers">Train</Link>)}
                        cardType="train" />
                </div>
            </div>
        )
    }

    return (
        <div>
            <SignUpSection />
            <StylesSection />
            {/* <Hero /> */}
        </div>
    );

}

export default Home;