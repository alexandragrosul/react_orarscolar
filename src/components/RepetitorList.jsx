import { Stack } from "@mui/system";
import Repetitor from "./Repetitor";
import React from "react";

export const RepetitorList = ({ profesors }) => {
  return (
    <Stack
      spacing={2}
      mt={2}
      mb={4}
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {profesors.length ? (
        profesors.map((profesor, index) => (
          <Repetitor profesor={profesor} key={index} />
        ))
      ) : (
        <p>Din pacate nu am gasit profesori!</p>
      )}
    </Stack>
  );
};
export default RepetitorList;
