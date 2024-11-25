import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/app-logo.avif"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void
}

function NavBar({onSearch}: Props) {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='50px'></Image>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;
