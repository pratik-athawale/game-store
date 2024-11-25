import {Platform} from "../hooks/useGames";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {

    const iconMap: {[key: string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        macos: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    const getPlatformIconKey = (str: string) => {
        if (str.includes("xbox")) return "xbox";
        if (str.includes("playstation")) return "playstation";
        if (str.includes("nintendo")) return "nintendo";
        if (str === "ios") return "macos";

        return str;
    }

    const uniquePlatforms: string[] = [...new Set(platforms.map(platform => getPlatformIconKey(platform.slug)))];

    return <>
        <HStack marginY={2}>
            {uniquePlatforms.map(platform => {
                const IconComponent = iconMap[getPlatformIconKey(platform)];
                return IconComponent ? <Icon as={IconComponent} key={platform} /> : null;
            })}
        </HStack>
    </>
}

export default PlatformIconList;
