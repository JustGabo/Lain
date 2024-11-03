// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";

// interface Props {
//   children: React.ReactNode;
// }

// const Magnetic = ({ children }: Props) => {
//   const el = useRef<HTMLDivElement>(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     if (!el.current) return;
//     const { clientX, clientY } = e;
//     const { left, top, height, width } = el.current.getBoundingClientRect();
//     const middleX = clientX - (left + width / 2);
//     const middleY = clientY - (top + height / 2);
//     setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
//   };

//   const reset = () => {
//     setPosition({ x: 0, y: 0 });
//   };

//   const {x, y} = position

//   return (
//     <motion.div ref={el} onMouseLeave={handleMouse}
//     onMouseOut={reset}
//     style={{position: "relative", pointerEvents: "none"}}
//     animate={{x, y}}
//     transition={{type: "spring", stiffness: 350, damping: 5, mass: 0.5}}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default Magnetic;


import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode
}

const Magnetic = ({children}: Props)=> {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if(!ref.current) return
        const { clientX, clientY } = e;
        //@ts-expect-error TODO: fix this error given by the boundingClient
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX * 0.1, y: middleY * 0.1})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{position: "relative", pointerEvents: "none"}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 350, damping: 5, mass: 0.5}}
        >
            {children}
        </motion.div>
    )
}

export default Magnetic