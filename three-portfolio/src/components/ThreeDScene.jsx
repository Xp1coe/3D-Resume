// ThreeDScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Text } from '@react-three/drei';

const ThreeDScene = () => {
    return (
        <Parallax strength={500}>
            <div className="h-screen w-screen">
                <Canvas
                    style={{ height: '100vh', width: '100vw' }}
                    camera={{ position: [0, 0, 5] }}
                >
                    <motion.group
                        initial={{ rotation: [0, 0, 0] }}
                        animate={{ rotation: [0, 360, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                    >
                        {/* Header Section */}
                        <mesh
                            scale={[1, 0.5, 0.1]}
                            rotation={[0, 0, 0]}
                            position={[-2, 2, 0]}
                        >
                            <boxGeometry args={[1, 0.5, 0.1]} />
                            <meshBasicMaterial color="#333" />
                            <Text castShadow fontSize={0.5} position={[0, 0, 0.1]}>
                                John Doe
                            </Text>
                        </mesh>

                        {/* Profile Picture */}
                        <mesh
                            scale={[0.5, 0.5, 0.1]}
                            rotation={[0, 0, 0]}
                            position={[-2, 1.5, 0]}
                        >
                            <sphereGeometry args={[0.25, 32, 32]} />
                            <meshBasicMaterial color="#ff69b4" />
                        </mesh>

                        {/* About Section */}
                        <mesh
                            scale={[1, 0.5, 0.1]}
                            rotation={[0, 0, 0]}
                            position={[0, 1, 0]}
                        >
                            <boxGeometry args={[1, 0.5, 0.1]} />
                            <meshBasicMaterial color="#333" />
                            <Text castShadow fontSize={0.2} position={[0, 0, 0.1]}>
                                Highly motivated developer with 5+ years experience.
                            </Text>
                        </mesh>

                        {/* Skills Section */}
                        <mesh
                            scale={[1, 0.5, 0.1]}
                            rotation={[0, 0, 0]}
                            position={[2, 1, 0]}
                        >
                            <boxGeometry args={[1, 0.5, 0.1]} />
                            <meshBasicMaterial color="#333" />
                            <Text castShadow fontSize={0.2} position={[0, 0, 0.1]}>
                                Skills: JavaScript, React, Node.js, HTML/CSS
                            </Text>
                        </mesh>

                        {/* Experience Section */}
                        <mesh
                            scale={[1, 1, 0.1]}
                            rotation={[0, 0, 0]}
                            position={[0, -1, 0]}
                        >
                            <boxGeometry args={[1, 1, 0.1]} />
                            <meshBasicMaterial color="#333" />
                            <Text castShadow fontSize={0.2} position={[0, 0.5, 0.1]}>
                                Experience: Software Engineer, ABC Corp (2020-Present)
                            </Text>
                        </mesh>

                        {/* Education Section */}
                        <mesh
                            scale={[1, 0.5, 0.1]}
                            rotation={[0, 0, 0]}
                            position={[-2, -2, 0]}
                        >
                            <boxGeometry args={[1, 0.5, 0.1]} />
                            <meshBasicMaterial color="#333" />
                            <Text castShadow fontSize={0.2} position={[0, 0, 0.1]}>
                                Education: B.Tech Computer Science, XYZ University (2018-2022)
                            </Text>
                        </mesh>

                        {/* Contact Section */}
                        <mesh
                            scale={[1, 0.5, 0.1]}
                            rotation={[0, 0, 0]}
                            position={[2, -2, 0]}
                        >
                            <boxGeometry args={[1, 0.5, 0.1]} />
                            <meshBasicMaterial color="#333" />
                            <Text castShadow fontSize={0.2} position={[0, 0, 0.1]}>
                                Contact: john.doe@email.com | 123-456-7890
                            </Text>
                        </mesh>
                    </motion.group>
                </Canvas>
            </div>
        </Parallax>
    );
};

export default ThreeDScene;