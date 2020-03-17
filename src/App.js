import React from 'react';
import { motion } from "framer-motion"
import './App.css';

const Controller = ({ clickHandler }) => (
    <button className="controller" onClick={clickHandler} />
);


const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }
  
  

const App = () => {
    const [substage, setSubstage] = React.useState(0);

    const handleControllerClick = () => {
        setSubstage(substage + 1);
    }

    return (
        <div className="App">
            <div className="title">
                <motion.div layoutTransition className="title__left">a</motion.div>
                {substage === 0 &&
                    <motion.div
                        className="title__middle"
                        initial={false}
                        animate={{ width: 'auto' }}
                    >
                        ccessibilit
                    </motion.div>
                }
                {substage > 0 &&
                    <motion.div
                        className="title_middle"
                        initial={{ width: 0 }}
                        animate={{ width: 'auto' }}
                    >
                        11
                    </motion.div>
                }
                <motion.div layoutTransition className="title_right">y</motion.div>
            </div>
            <motion.div
                className="subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: substage > 0 ? 1 : 0 }}
            >
                Pronounced &ldquo;alley&rdquo;
            </motion.div>
            <Controller clickHandler={handleControllerClick} />
        </div>
    );
}

export default App;
