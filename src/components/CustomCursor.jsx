import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Also hide default cursor when this mounts
    useEffect(() => {
        document.body.style.cursor = 'none';
        return () => {
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            {/* Primary Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary-blue rounded-full pointer-events-none z-[9999] mix-blend-screen"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 28,
                    mass: 0.1
                }}
            />
            
            {/* Outline Glow Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-primary-purple rounded-full pointer-events-none z-[9998] shadow-[0_0_15px_rgba(138,43,226,0.5)]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(138,43,226,0.1)' : 'transparent',
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 28,
                    mass: 0.5
                }}
            />
             {/* Large ambient glow */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 bg-primary-blue/5 blur-3xl rounded-full pointer-events-none z-[9997]"
                animate={{
                    x: mousePosition.x - 64,
                    y: mousePosition.y - 64,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                    mass: 1
                }}
            />
        </>
    );
};

export default CustomCursor;
