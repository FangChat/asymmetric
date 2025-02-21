import { VideoProps } from "@/utils/types";

export default function Video(props: VideoProps){
    return (
        <video className={props.classes} poster={props.poster} autoPlay={true} muted={true} loop={false} disablePictureInPicture={true} disableRemotePlayback={true}>

            <source src={props.src} type={props.type}>
            </source>

        </video>
    )
}