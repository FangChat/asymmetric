import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Image from "next/image";
import Asymmetric from "@/images/asymmetric.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppBar className="bg-black">
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
            <Image src={Asymmetric} width={200} height={200} alt="Asymmetric Logo"/>
          </Box>
          <Typography className="pr-10">Home</Typography>
          <Typography className="pr-10">About</Typography>
          <Typography className="pr-10">Events</Typography>
          <Typography>Follow Us</Typography>
        </Toolbar>
      </AppBar>
    </main>
  );
}
