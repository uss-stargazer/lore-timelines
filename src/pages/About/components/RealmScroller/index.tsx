import { Box, Button, IconButton, Typography } from "@mui/material";
import type { RealmRecord } from "../../../Realms/realmRecords";
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

// TODO: With more realms, add scrolling feature

function RealmScroller({ realms }: { realms: RealmRecord[] }) {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
    >
      {realms.map((realm: RealmRecord) => (
        <Box
          width="16em"
          borderRadius={6}
          sx={{
            bgcolor: realm.theme.palette.primary.dark,
            color: realm.theme.palette.text.primary,
            // borderWidth: "10px",
            // borderColor: realm.theme.palette.primary.dark,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.2em",
            padding: "1.2em",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to={realm.href}
              sx={{ bgcolor: realm.theme.palette.secondary.dark }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {realm.icon}
                {realm.name}
              </Typography>
            </Button>
            <IconButton
              component={Link}
              to={realm.href}
              sx={{ bgcolor: realm.theme.palette.secondary.dark }}
            >
              <FaCircleArrowRight />
            </IconButton>
          </Box>
          <Typography align="left">{realm.summary}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default RealmScroller;
