import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Asymmetric from "@/images/asymmetric.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 shadow-lg bg-black">
      <AppBar className="bg-black border-b-2 border-white shadow-lg shadow-white">
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
            <Image src={Asymmetric} width={200} height={200} alt="Asymmetric Logo"/>
          </Box>
          <Typography className="pr-10 hover:text-sappagreen" variant="h6">Home</Typography>
          <Typography className="pr-10 hover:text-sappagreen" variant="h6">About</Typography>
          <Typography className="pr-10 hover:text-sappagreen" variant="h6">Events</Typography>
          <Typography variant="h6" className="hover:text-sappagreen">Follow Us</Typography>
        </Toolbar>
      </AppBar>
    </main>
  );
}
