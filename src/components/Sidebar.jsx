import { Box } from "@mui/material";
import React from "react";

function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed"></Box>
    </Box>
  );
}

export default Sidebar;
