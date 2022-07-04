import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./style";

function Loader() {
  return (
    <Box style={styles.container}>
      <CircularProgress size={60} />
    </Box>
  );
}

export default Loader;
