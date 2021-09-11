import DisplayTodos from './DisplayTodos';
import Todos from './Todos';
import { motion } from 'framer-motion';

import './todo.css';

function AppTodo() {
  return (
    <div className="AppTodo">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default AppTodo;
