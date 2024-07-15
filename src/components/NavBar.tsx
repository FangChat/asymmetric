import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import Asymmetric from "@/images/asymmetric.png";

export default function NavBar(){
    return (
        <nav className="relative bg-black border-b-2 border-white shadow-lg shadow-white">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Image
              src={Asymmetric}
              width={200}
              height={200}
              alt="Asymmetric Logo"
            />
          </Box>
          <li className="list-none p-2 mr-10 hover:bg-carribean-current hover:rounded-2xl hover:scale-125 w-fit text-white text-xl">
            <h6></h6><a href="/">Home</a>
          </li>
          <li className="list-none p-2 mr-10 hover:bg-carribean-current hover:rounded-2xl hover:scale-125 w-fit text-white text-xl">
            <h6>About</h6>
          </li>
          <li className="list-none p-2 mr-10 hover:bg-carribean-current hover:rounded-2xl hover:scale-125 w-fit text-white text-xl">
            <h6>Events</h6>
          </li>
          <li className="list-none p-2 mr-10 hover:bg-carribean-current hover:rounded-2xl hover:scale-125 w-fit text-white text-xl">
            <h6>Follow Us</h6>
          </li>
          <button className="p-2 mr-10 text-white text-xl hover:bg-carribean-current hover:animate-shrink rounded-2xl border-white border-2 border-solid font-techFont normal-case">
            <h6>Register</h6>
          </button>
        </Toolbar>
      </nav>
    )
}