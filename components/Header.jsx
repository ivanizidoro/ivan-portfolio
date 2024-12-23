import Link from "next/link";
import { Button } from "./ui/button";

//  components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ivan<span className="text-accent">.</span>
          </h1>
        </Link>

        {/*Desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="https://wa.link/tf28uk" target="_blank">
            <Button>Contrate-me</Button>
          </Link>
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden"></div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
