import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, transform: 'translateY(0px)', transition: { duration: 0.5 } },
  hidden: {x: -600, opacity: 0, transform: 'translateY(50px)' }
};

const BoxAnimation = ({ children }: any) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } /* else {
      control.start("hidden");
    } */
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children} 
    </motion.div>
  );
};

export default BoxAnimation