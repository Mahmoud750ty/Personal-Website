import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../utils/Projects";
import Header from "../components/GUI/Header";

const ProjectDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen flex items-center justify-center"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-white">Project not found</h2>
                    <p className="text-gray-400">The project you're looking for doesn't exist.</p>
                </div>
            </motion.div>
        );
    }

    return (
        <>
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen bg-[#0A0A0A] relative"
            >
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => navigate(-1)}
                    className="fixed top-20 left-8 z-50 group flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <span className="font-medium">Back</span>
                </motion.button>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Main Image Container */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl mb-12"
                    >
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Title Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            {project.title}
                        </h1>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="prose prose-lg prose-invert max-w-none"
                    >
                        <div className="grid gap-12">
                            {/* Description */}
                            <div className="bg-[#111111] rounded-2xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                                <div
                                    dangerouslySetInnerHTML={{ __html: project.fullDescription }}
                                    className="text-lg text-gray-300 leading-relaxed space-y-6"
                                />
                            </div>

                            {/* Project Stats */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.2
                                        }
                                    }
                                }}
                                initial="hidden"
                                animate="show"
                            >
                                {/* You can add project stats here if needed */}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div></>
    );
};

export default ProjectDetails;