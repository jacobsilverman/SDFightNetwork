import { Card, CardContent, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { GiBoxingGloveSurprise, GiBelt, GiFist  } from "react-icons/gi";
import { MdSportsMma } from "react-icons/md";

import boxing from "../../assets/boxingAnimation.gif";
import boxing2 from "../../assets/boxingAnimation2.gif";
import boxing3 from "../../assets/boxingAnimation3.gif"

const Home = () => {
    const SignUpCard = ({title, desc, button}) => (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="relative w-full max-w-md p-[2px] rounded-2xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
            
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animate-gradient-2 bg-gradient-to-r from-red-600 via-blue-600 to-purple-600 bg-[length:400%_400%] opacity-40 blur-lg" />

                {/* Content with glass effect */}
                <div className="relative rounded-2xl bg-white/10 backdrop-blur-md p-6 z-10  text-center">
                    <h2 className="text-3xl font-bold text-black mb-2 drop-shadow-lg text-center">
                    {title}
                    </h2>
                    <p className="text-black text-lg">
                    {desc}
                    </p>
                    <button className="mt-4 px-6 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                    {button}
                    </button>
                </div>
            </div>
        </div>
    );

    const lines = [
        "Train",
        "with",
        "Purpose",
        "and",
        "Evolve",
        "Constantly"
    ];
    const shimmerCls = (len, index) => {return `font-extrabold bg-gradient-to-r from-yellow-700 via-black to-black bg-[length:150%_100%] bg-clip-text text-transparent animate-gradient`};

    const Hero = () => (
        <div className="relative h-screen w-screen overflow-hidden bg-black">
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

    const StylesSection = () => (
        <div className="text-center pt-20 bg-zinc-100 pb-20">
            <p className="text-xl text-zinc-400 mb-6">
                Our Network primary consists of these fighting practices
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20 py-10">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl shadow-xl overflow-hidden"
                >
                    <Card className="h-full">
                        <CardContent className="p-6 text-center">
                            <GiBoxingGloveSurprise className="text-6xl text-red-600 mb-4 mx-auto" />
                            <h2 className="text-2xl font-bold mb-2">Boxing</h2>
                            <p>
                                Master footwork, speed, and precision punches. Explore techniques from legends of the ring.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl shadow-xl overflow-hidden"
                >
                    <Card className="h-full">
                        <CardContent className="p-6 text-center">
                            <MdSportsMma className="text-6xl text-blue-600 mb-4 mx-auto" />
                            <h2 className="text-2xl font-bold mb-2">Muay Thai</h2>
                            <p className="text-zinc-600">
                                Embrace the art of 8 limbs. Train with kicks, knees, elbows, and clinch to dominate the fight.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl shadow-xl overflow-hidden"
                >
                    <Card className="h-full">
                        <CardContent className="p-6 text-center">
                            <GiBelt className="text-6xl text-black mb-4 mx-auto" />
                            <h2 className="text-2xl font-bold mb-2">Ju juisu</h2>
                            <p className="text-zinc-600">
                                Master the ground game with leverage, submissions, and positional control. Develop the skill to outmaneuver opponents regardless of size.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl shadow-xl overflow-hidden"
                >
                    <Card className="h-full">
                        <CardContent className="p-6 text-center">
                            <GiFist  className="text-6xl text-green-600 mb-4 mx-auto" />
                            <h2 className="text-2xl font-bold mb-2">Mixed Martial Arts</h2>
                            <p className="text-zinc-600">
                                Blend striking and grappling into a complete combat system. Train across disciplines to become a well-rounded and versatile fighter.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );

    const SignUpSection = () => {
        return (
            <div className="relative w-full h-screen overflow-hidden">
                <img
                    src={boxing2}
                    alt="Boxing layer 1"
                    className="absolute inset-0w-full h-full object-cover opacity-50 z-0"
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
                        button="Fight" />
                    <SignUpCard
                        title="Sign up to Train"
                        desc="We place you in individualized classes based on your skill level"
                        button="Train" />
                </div>
            </div>
        )
    }

    return (
        <div>
            <Hero />
            <StylesSection />
            <SignUpSection />
        </div>
    );

}

export default Home;