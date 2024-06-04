import { Stack, Typography } from "@mui/material";
import React from "react";

interface EmptyProps {
  message: string;
  subMessage: string;
  action?: React.ReactNode;
}

export default function Empty({ message, subMessage, action }: EmptyProps) {
  return (
    <Stack direction="column" alignItems="center" gap={4} paddingTop={16}>
      <Stack direction="column" alignItems="center">
        <Typography variant="h6" color="white" fontWeight="bold">
          {message}
        </Typography>
        <Typography color="white" fontSize={{ xs: "small", sm: "medium" }}>
          {subMessage}
        </Typography>
      </Stack>
      {action}
    </Stack>
  );
};
