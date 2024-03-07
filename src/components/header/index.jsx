import Menu from "../../icons/menu";

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 flex flex-wrap justify-between z-50 has-[:checked]:bg-nav-back md:flex-nowrap md:!bg-transparent">
            <div className="flex items-center h-20 mx-10">
                <a href="#" className="text-3xl font-[650] text-white">
                    Fruity
                </a>
            </div>
            <div className="flex items-center h-20 mx-10 md:hidden">
                <label htmlFor="menu-toggle" className="cursor-pointer text-xl">
                    <Menu></Menu>
                </label>
            </div>
            <input className="hidden peer/menu" type="checkbox" id="menu-toggle" name="menu-toggle" />
            <div className="hidden flex-col grow-0 gap-8 w-full py-5 text-header-font font-medium md:flex md:flex-row md:grow md:py-0 peer-checked/menu:flex peer-checked/menu:text-white md:!text-header-font">
                <div className="flex flex-col grow-0 items-center justify-center gap-8 h-auto md:flex-row md:grow md:h-20 md:mt-0">
                    <a className="transition ease-in-out hover:scale-[1.18] duration-200" href="#">
                        Shop
                    </a>
                    <a className="transition ease-in-out hover:scale-[1.18] duration-200" href="#">
                        About
                    </a>
                    <a className="transition ease-in-out hover:scale-[1.18] duration-200" href="#">
                        Career
                    </a>
                    <a className="transition ease-in-out hover:scale-[1.18] duration-200" href="#">
                        Contact
                    </a>
                </div>
                <div className="flex items-center justify-center gap-4 h-auto mx-0 md:h-20 md:mr-10">
                    <a className="transition ease-in-out hover:scale-[1.18] duration-200" href="#">
                        My Cart
                    </a>
                    <span>|</span>
                    <a className="transition ease-in-out hover:scale-[1.18] duration-200" href="#">
                        Register
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
