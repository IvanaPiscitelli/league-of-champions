import { Image } from "@chakra-ui/react";
import logo from "../assets/lol-logo.webp";

const HomePage = () => {
  const redirectToHome = () => {
    window.location.href = "/";
  };

  return <Image src={logo} boxSize="80px" objectFit="contain" alt="logo" onClick={redirectToHome} />;
};

export default HomePage;
