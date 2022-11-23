import { Box, Typography } from "@mui/material";
import useData from "../hooks/useData";

export function AddFile() {

  const { readFile } = useData();

  return (
    <Box textAlign="center">
      <Typography>
        Add your CSV file here!
      </Typography>
      <Typography>
        Please make sure you have the right format
      </Typography>
      <Box mt={2}>
        <label htmlFor="file-upload" className="custom-file-upload">
          Upload CSV
        </label>
        <input onChange={readFile} id="file-upload" type="file"/>
      </Box>
    </Box>
  );
}