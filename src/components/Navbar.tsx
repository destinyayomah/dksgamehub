import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ThemeSwitch />
    </HStack>
  )
}

export default Navbar