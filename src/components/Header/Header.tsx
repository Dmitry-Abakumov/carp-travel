import Navbar from "./Navbar/Navbar";

import Container from "@/shared/components/Container";

const Header = () => {
  return (
    <header className={`pt-9 pb-9 absolute top-0 left-0 w-full`}>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
