"use client";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { LinkButtonProps } from "@/utils/types";

export default function LinkButton(props: LinkButtonProps){
    const openLink = (link: string) => {
        window.open(link);
    }

    return (
      <IconButton
        disableTouchRipple={true}
        disableFocusRipple={true}
        disableRipple={true}
        onClick={() => {openLink(props.link)}}
      >
        <Image
          alt={props.alt}
          src={props.src}
          width={36}
          height={36}
        ></Image>
      </IconButton>
    );
}