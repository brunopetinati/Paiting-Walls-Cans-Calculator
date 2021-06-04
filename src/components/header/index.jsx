import { useHistory } from "react-router-dom";
import { Container, Button } from "./styles";

import { motion } from "framer-motion";

const Header = () => {
  let history = useHistory();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <Button onClick={() => history.push("/")}>Home</Button>
        <Button onClick={() => history.push("/instructions")}>
          Instructions
        </Button>
        <Button onClick={() => history.push("/wall")}>1-Wall Module</Button>
        <Button onClick={() => history.push("/core")}>Room Module</Button>
      </Container>
    </motion.div>
  );
};

export default Header;
