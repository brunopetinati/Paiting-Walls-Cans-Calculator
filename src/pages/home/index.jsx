import { motion } from "framer-motion";
import { Container, Welcome } from "../styles";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <Welcome>Welcome</Welcome>
      </Container>
    </motion.div>
  );
};

export default Home;
