import { useContext, useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserContext } from "../UserContext/UserContext";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
  const [openLoginArea, setOpenLoginArea] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const { setCategories, shoppingcartNumber, setSelectedProductTypes } =
    useContext(UserContext);
  const [openSearchArea, setOpenSearchArea] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const allProducts = [
    { id: 1, name: "Dress" },
    { id: 2, name: "Pant" },
    { id: 3, name: "Shirt" },
    { id: 4, name: "Jacket" },
    { id: 5, name: "Jeans" },
  ];

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseEnter = () => {
    setOpenLoginArea(true);
  };

  const handleMouseLeave = () => {
    setOpenLoginArea(false);
  };

  const handleCategories = (category) => {
    setCategories(category);
    navigate("/products");
    setOpenNavbar(false);
  };

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchInput = () => {
    if (searchTerm === "Shirt") {
      setSelectedProductTypes(["Shirt"]);
      navigate("/products");
      setOpenSearchArea(false);
    } else if (searchTerm === "Dress") {
      setSelectedProductTypes(["Dress"]);
      navigate("/products");
      setOpenSearchArea(false);
    } else if (searchTerm === "Pant") {
      setSelectedProductTypes(["Pant"]);
      navigate("/products");
      setOpenSearchArea(false);
    } else if (searchTerm === "Jacket") {
      setSelectedProductTypes(["Jacket"]);
      navigate("/products");
      setOpenSearchArea(false);
    } else if (searchTerm === "Short") {
      setSelectedProductTypes(["Short"]);
      navigate("/products");
      setOpenSearchArea(false);
    } else if (searchTerm === "Jeans") {
      setSelectedProductTypes(["Jeans"]);
      navigate("/products");
      setOpenSearchArea(false);
    } else {
      navigate("/notfound");
      setOpenSearchArea(false);
    }
  };

  return (
    <div className="relative flex items-center justify-between w-full h-32 border-b-2 border-gray-400 shadow-md md:p-5">
      <div className="flex items-center gap-3 text-2xl font-medium md:text-4xl">
        <GiHamburgerMenu
          onClick={() => setOpenNavbar(!openNavbar)}
          className="block cursor-pointer md:hidden"
        />
        <Link to="/">
          <h3>UrbanTrends</h3>
        </Link>
      </div>
      <div className="hidden md:flex gap-9">
        <a
          href="/products"
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          PRODUCTS
        </a>
        <a
          onClick={() => handleCategories("WOMEN")}
          className="relative  inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
        >
          WOMEN
        </a>

        <a
          onClick={() => handleCategories("MEN")}
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
        >
          MEN
        </a>
        <a
          onClick={() => handleCategories("CHILD")}
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
        >
          CHILD
        </a>
        <a
          onClick={() => handleCategories("BABY")}
          className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
        >
          BABY
        </a>
      </div>
      <div className="w-[20%] hidden relative md:block ">
        <input
          onClick={() => setOpenSearchArea(true)}
          className="w-full h-10 p-2 border-2 border-black outline-none"
          type="text"
          placeholder="Search"
        />
        <CiSearch className="absolute right-0 text-2xl text-black cursor-pointer top-2" />
      </div>
      <div className="flex gap-10">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative flex items-center gap-3 text-lg"
        >
          <CiUser className="text-2xl md:text-3xl" />
          <span className="hidden cursor-pointer md:block">
      {user === null ? "Login" : "Profile"}
    </span>

          {openLoginArea && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute flex flex-col gap-4 p-4 mt-2 bg-white shadow-lg top-2 w-36 md:w-72"
            >
              {user === null ? (
                <div className="">
                  <Link to={"/login"}>
                    <button className="w-full h-10 text-base text-white bg-slate-800 md:text-xl">
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <div>Hello {user.name}</div>
              )}
              {user === null ? (
                <div className="text-xs md:text-sm">
                  <span>You dont have an account?</span>
                  <Link to={"/signup"}>
                    <strong> Sign up</strong>
                  </Link>
                </div>
              ) : (
                <div className="w-full h-16 text-white">
                  <button
                    onClick={handleLogout}
                    className="w-full h-auto bg-blue-800"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 text-lg cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
          <Link
            className="flex gap-3"
            onClick={() => setOpenNavbar(false)}
            to={"/favorites"}
          >
            <MdFavoriteBorder className="text-2xl md:text-3xl " />

            <a className="hidden md:block">Favorite</a>
          </Link>
        </div>
        <div className="flex items-center gap-3 text-lg  cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
          <Link onClick={() => setOpenNavbar(false)} to={"/shoppingcart"}>
            <div className="relative cursor-pointer ">
              <FiShoppingBag className="text-2xl md:text-3xl" />
              {shoppingcartNumber > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-sm font-bold text-white bg-black rounded-full -top-2 -right-2">
                  {shoppingcartNumber}
                </span>
              )}
            </div>
          </Link>
          <Link onClick={() => setOpenNavbar(false)} to={"/shoppingcart"}>
            <a href="" className="hidden md:block">
              Shopping Cart
            </a>
          </Link>
        </div>
      </div>
      {openNavbar && (
        <div className="absolute z-50 w-full h-24 bg-white -bottom-24 animate-slideDown">
          <div className="z-50 flex flex-col gap-5 p-4 bg-white">
            <div className="w-[50%] relative h-auto bg-black ">
              <input
              onClick={()=>{
                setOpenSearchArea(true)
                setOpenNavbar(false)
              }}
                className="w-full h-10 p-2 border-2 border-black outline-none"
                type="text"
                placeholder="Search"
              />
              <CiSearch className="absolute right-0 text-2xl text-black cursor-pointer top-2" />
            </div>
            <a
              href="/products"
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              PRODUCTS
            </a>
            <a
              onClick={() => handleCategories("WOMEN")}
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              WOMEN
            </a>

            <a
              onClick={() => handleCategories("MEN")}
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              MEN
            </a>
            <a
              onClick={() => handleCategories("CHILD")}
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              CHILD
            </a>
            <a
              onClick={() => handleCategories("BABY")}
              className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              BABY
            </a>
            <div className="flex flex-col gap-5 pt-10">
              <a
                href="#"
                className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                HELP
              </a>
              <a
                href="#"
                className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                CONTACT US
              </a>
              <div className="w-full h-16 bg-[#22242A] flex text-white font-bold gap-2 items-center rounded-md">
                <span>Phone:</span>
                <p>0555 555 55 55</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {openSearchArea && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between h-40 p-5 animate-slideDown">
            <div className="flex gap-3 text-2xl font-medium md:text-4xl">
              
              <Link to="/">
              
                <h3 onClick={() => setOpenSearchArea(false)}>DeSuits</h3>
              </Link>
            </div>

            <div className="md:w-[40%] w-full md:relative   absolute md:block pt-20 ">
              <input
                onClick={() => setOpenSearchArea(true)}
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                className="w-full h-10 p-2 text-sm border-2 border-black outline-none md:text-base "
                type="text"
                placeholder="Search for product, category or brand"
              />

              <div className="absolute right-6 md:right-0 text-3xl text-black cursor-pointer top-[86px] flex">
                <CiSearch onClick={() => handleSearchInput()} />
                <IoCloseCircle onClick={() => setOpenSearchArea(false)} />
              </div>
            </div>
            <div className="flex gap-10">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative flex gap-3 text-lg"
              >
                <CiUser className="text-2xl md:text-3xl" />

                {openLoginArea && (
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute flex flex-col gap-4 p-4 mt-2 bg-white shadow-lg top-2 -right-3 w-36 md:w-72"
                  >
                    {user === null ? (
                      <div className="">
                        <Link to={"/login"}>
                          <button
                            onClick={() => setOpenSearchArea(false)}
                            className="w-full h-10 text-base text-white bg-slate-800 md:text-xl"
                          >
                            Login
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div>Hello {user.name}</div>
                    )}
                    {user === null ? (
                      <div className="text-xs md:text-sm">
                        <span>You dont have an account?</span>
                        <Link to={"/signup"}>
                          <strong> Sign up</strong>
                        </Link>
                      </div>
                    ) : (
                      <div className="w-full h-16 text-white">
                        <button
                          onClick={handleLogout}
                          className="w-full h-auto bg-blue-800"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex  gap-3 text-lg cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
                <Link
                  className="flex gap-3"
                  onClick={() => {
                    setOpenNavbar(false)
                    setOpenSearchArea(false)
                  }}
                  to={"/favorites"}
                >
                  <MdFavoriteBorder className="text-2xl md:text-3xl " />
                </Link>
              </div>
              <div className="flex  gap-3 text-lg  cursor-pointer  relative  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full">
                <Link onClick={() => {
                  setOpenNavbar(false)
                  setOpenSearchArea(false)
                }} to={"/shoppingcart"}>
                  <div className="relative cursor-pointer ">
                    <FiShoppingBag className="text-2xl md:text-3xl" />
                    {shoppingcartNumber > 0 && (
                      <span className="absolute flex justify-center w-5 h-5 text-sm font-bold text-white bg-black rounded-full -top-2 -right-2">
                        {shoppingcartNumber}
                      </span>
                    )}
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    setOpenNavbar(false)
                    setOpenSearchArea(false)
                  }}
                  to={"/shoppingcart"}
                ></Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full text-center md:text-base animate-slideUp ">
            <div className="w-[40%] mr-10">
              <div>
                <h2 className="text-[#212529] text-xl md:text-2xl pt-8">
                  Popular Categories
                </h2>
              </div>
              <div
                className={`" ${
                  searchTerm !== "" ? "justify-normal" : "justify-between"
                } flex md:flex-row flex-col w-full gap-2 md:gap-5 pt-10 text-base font-semibold"`}
              >
                {filteredProducts.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-24 h-16 p-4 m-2 text-white transition-transform transform bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 hover:shadow-lg hover:scale-105"
                  >
                    <a
                      onClick={() => setSearchTerm(item.name)}
                      className="font-semibold"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
