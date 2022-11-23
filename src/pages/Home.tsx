import { Box, Typography } from "@mui/material";
import useData, { DataType } from "../hooks/useData";
import { FixedSizeList as List } from 'react-window';
import { CSSProperties } from "react";

export function Home () {
  const { data } = useData();


  const Row = ({ data, index, style }: { data: DataType[]; index: number; style: CSSProperties; }) => (
    <div style={style}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography>
            <b>Name:</b> {data[index].name}
          </Typography>
          <Typography>
            <b>Phone:</b> {data[index].phone}
          </Typography>
          { data[index].mail && (
            <Typography>
              <b>mail:</b> {data[index].mail}
            </Typography>
          )}
          <Typography>
            <b>Embudo:</b> {data[index].embudo}
          </Typography>
          <Typography>
            <b>Stage:</b> {data[index].stage}
          </Typography>
          <Typography>
            <b>Assigned To:</b> {data[index].assignedTo}
          </Typography>
          <Typography>
            <b>Archived:</b> {data[index].archived}
          </Typography>
        </Box>
        <Box>
          <Typography>
            <b>Company:</b> {data[index].company}
          </Typography>
          { data[index].labels && (
            <Typography>
              <b>Labels:</b> {data[index].labels}
            </Typography>
          )}
          <Typography>
            <b>Value:</b> {data[index].value}
          </Typography>
          <Typography>
            <b>Earned:</b> {data[index].earned}
          </Typography>
          <Typography>
            <b>Lead Status:</b> {data[index].leadStatus}
          </Typography>
        </Box>
      </Box>
      <Box>
          <Typography>
            <b>{`First Message Date: ${data[index].firstMessageDate} ${data[index].firstMessageHour}`}</b>
          </Typography>
          <Typography>
            {data[index].firstMessage}
          </Typography>
        </Box>

        <Box>
          <Typography>
            <b>{`Last Message Date: ${data[index].lastMessageDate} ${data[index].lastMessageHour}`}</b>
          </Typography>
          <Typography>
            {data[index].lastMessage}
          </Typography>
        </Box>
    </div>
  );

  return (
    <Box>
      {data.length > 0 ? (
        <List
          height={600}
          itemData={data}
          itemCount={data.length - 1} // not counting headers
          itemSize={500}
          width="100vw"
        >
          {Row}
        </List>
      ) : (
        <Typography>
          No data! Please upload a file
        </Typography>
      )}
    </Box>
  )
}