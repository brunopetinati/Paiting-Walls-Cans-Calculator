import { motion } from "framer-motion";

import { Container, Text } from "../styles";

const Instructions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <Text>
          <ol>
            <li>
              The walls can't be more than 15 meters or less than 1-meter in
              width.
            </li>
            <li>
              When including doors and windows, the area left should be more
              than 50% of the total area.
            </li>
            <li>
              The wall height must be 30cm more than the door, that's why it's
              initialized as 2.2 meters.
            </li>
            <li>
              Each window is 2,00 x 1,20 meters, therefore 2.4m² as a result.
            </li>
            <li>
              Each door is 0,80 x 1,90 meters, therefore 1.52m² as a result.
            </li>
            <li>One litter of panting can cover 5m².</li>
            <li>We don't consider ceiling or floor.</li>
            <li>
              The painting cans sizes are respectively: 0,5L, 2,5L, 3,6L, 18L
            </li>
          </ol>
        </Text>
      </Container>
    </motion.div>
  );
};

export default Instructions;
