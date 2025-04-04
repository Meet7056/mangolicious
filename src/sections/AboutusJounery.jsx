import React from 'react'
import image10 from "../assets/images/image10.png"
import image11 from "../assets/images/image11.png"
import { motion } from "framer-motion";

const AboutusJounery = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 0 }, // Start off-screen (below)
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Animate up
      };
    return (
        <div>
            <div className='journey-container'>

                <div className='my-3'>
                    <h1 className='yeseva text-center' style={{ fontSize: "40px", color: "#DC752A" }}>
                        The Mangolicious Journey
                    </h1>
                </div>
                <motion.div className="single-aboutus-journey-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="single-abouts-journey-image-container aboutus-image" style={{ position: "relative" }} variants={fadeUp}>
                        <div className="single-abouts-journey-image-container-inner" style={{ position: "relative" }}>
                            <div style={{ position: "absolute", top: 20, left: 20, zIndex: 0 }}>
                                <img src={image11} style={{ maxWidth: 150, borderRadius: 30 }} />
                            </div>
                            <div style={{ position: "relative" }}>
                                <img src={image10} style={{ maxWidth: 400, width: "100%", borderRadius: 30 }} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="single-abouts-journey-image-container p-0 me-5 flex-column" style={{ position: "relative", maxWidth: 400, width: "100%" }} variants={fadeUp}>
                        <h3 className="yeseva mb-4" style={{ color: "#DC752A" }}>The Beginning - A Love for Real Mangoes</h3>
                        <p className="opensans text-secondary" style={{ textAlign: "justify" }}>
                            Growing up, we enjoyed the purest, naturally ripened mangoes straight from local farms. But as time went on, we saw the rise of chemically ripened, artificial-tasting mangoes in the market.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Section 2 */}
                <motion.div className="single-aboutus-journey-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="single-abouts-journey-image-container p-0 ms-5 flex-column" style={{ position: "relative", maxWidth: 400, width: "100%" }} variants={fadeUp}>
                        <h3 className="yeseva mb-4" style={{ color: "#DC752A" }}>Growing the Family – Expanding to More Cities</h3>
                        <p className="opensans text-secondary" style={{ textAlign: "justify" }}>
                            With increasing demand, we built a strong network of farmers who shared our passion for chemical-free, organic mangoes.
                        </p>
                    </motion.div>

                    <motion.div className="single-abouts-journey-image-container aboutus-image" style={{ position: "relative" }} variants={fadeUp}>
                        <div className="single-abouts-journey-image-container-inner-right" style={{ position: "relative" }}>
                            <div style={{ position: "absolute", top: 20, right: 20, zIndex: 0 }}>
                                <img src={image11} style={{ maxWidth: 150, borderRadius: 30 }} />
                            </div>
                            <div style={{ position: "relative" }}>
                                <img src={image10} style={{ maxWidth: 400, width: "100%", borderRadius: 30 }} />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Section 3 */}
                <motion.div className="single-aboutus-journey-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="single-abouts-journey-image-container aboutus-image" style={{ position: "relative" }} variants={fadeUp}>
                        <div className="single-abouts-journey-image-container-inner" style={{ position: "relative" }}>
                            <div style={{ position: "absolute", top: 20, left: 20, zIndex: 0 }}>
                                <img src={image11} style={{ maxWidth: 150, borderRadius: 30 }} />
                            </div>
                            <div style={{ position: "relative" }}>
                                <img src={image10} style={{ maxWidth: 400, width: "100%", borderRadius: 30 }} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="single-abouts-journey-image-container p-0 me-5 flex-column" style={{ position: "relative", maxWidth: 400, width: "100%" }} variants={fadeUp}>
                        <h3 className="yeseva mb-4" style={{ color: "#DC752A" }}>The Big Dream - A Mango in Every Indian Home</h3>
                        <p className="opensans text-secondary" style={{ textAlign: "justify" }}>
                            Today, Mangolicious is more than just a brand—it's a mission to bring India's best mangoes to every household.
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    )
}

export default AboutusJounery