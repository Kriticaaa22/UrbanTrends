import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { UserContext } from "../UserContext/UserContext";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const {
    setCategories,
    selectedProductTypes,
    setSelectedProductTypes,
    color,
    setColor,

  } = useContext(UserContext);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCheckboxChange = (category) => {
    const isSelected = selectedCategory === category;

    const newSelectedCategory = isSelected ? "" : category;

    setSelectedCategory(newSelectedCategory);
    setCategories(newSelectedCategory ? newSelectedCategory : "");

    setOpenFilter(false);
  };

  const handleProductTypes = (productType) => {
    const isSelected = selectedProductTypes.includes(productType);
    const newSelectedProductTypes = isSelected
      ? selectedProductTypes.filter((type) => type !== productType)
      : [...selectedProductTypes, productType];
    setSelectedProductTypes(newSelectedProductTypes);
  
    
    setOpenFilter(false);
    
  };

  const handleColorChange = (selectedColor) => {
    if (selectedColor === color) {
      setColor(""); 
    } else {
      setColor(selectedColor); 
    }
    setOpenFilter(false);
  };

  return (
    <div className="w-[20%]  h-screen md:p-5 bg-white shadow-lg rounded-lg overflow-y-auto">
      <div className="absolute z-0 block text-3xl md:hidden">
        <GiHamburgerMenu onClick={() => setOpenFilter(true)} />
      </div>
      {openFilter && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 z-50 w-2/4 h-full max-w-xs bg-white">
            <div className="pt-5 pb-3 pl-5 text-2xl font-semibold text-gray-700 border-b">
              <h2>Filter Area</h2>
            </div>

            <div className="pt-8">
              <h3 className="pl-5 text-xl font-medium text-gray-600">
                Categories
              </h3>
              <div className="flex flex-col gap-3 p-5 text-gray-600">
                {["WOMEN", "MEN", "CHILD", "BABY"].map((category) => (
                  <label
                    key={category}
                    className="transition duration-150 ease-in-out hover:text-black"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategory === category}
                      onChange={() => handleCheckboxChange(category)}
                    />{" "}
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-5">
              <h3 className="pl-5 text-xl font-medium text-gray-600">
                Product Type
              </h3>
              <div className="flex flex-col gap-3 p-5 text-gray-600">
              {["Dress", "Jeans", "Pant", "Jacket", "Shirt", "Short"].map(
              (type) => (
                <label
                  key={type}
                  className="transition duration-150 ease-in-out hover:text-black"
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedProductTypes.includes(type)}
                    onChange={() => handleProductTypes(type)}
                  />
                  {type}
                </label>
              )
            )}
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 p-5">
            {[
              { name: "Red", hex: "#ff0000" },
              { name: "Blue", hex: "#0000ff" },
              { name: "Green", hex: "#008000" },
              { name: "Black", hex: "#000000" },
              { name: "White", hex: "#ffffff" },
              { name: "Yellow", hex: "#ffff00" },
              { name: "Orange", hex: "#ffa500" },
              { name: "Purple", hex: "#800080" },
              { name: "Brown", hex: "#a52a2a" },
              { name: "Pink", hex: "#ffc0cb" },
              { name: "Gray", hex: "#808080" },
            ].map(({ name, hex }) => (
              <label className="flex items-center gap-2" key={name}>
                <input
                  type="checkbox" 
                  value={name}
                  checked={color === name}
                  onChange={() => handleColorChange(name)}
                />

                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: hex }}
                ></span>
                <span className="text-sm text-gray-700">{name}</span>
              </label>
            ))}
          </div>
          </div>

          <IoMdClose
            onClick={() => setOpenFilter(false)}
            className="absolute z-50 text-2xl text-white cursor-pointer top-5 right-5"
          />
        </div>
      )}

      <div className="hidden md:block ">
        <div className="pt-5 pb-3 pl-5 text-2xl font-semibold text-gray-700 border-b">
          <h2>Filter Area</h2>
        </div>

        <div className="pt-8">
          <h3 className="pl-5 text-xl font-medium text-gray-600">Categories</h3>
          <div className="flex flex-col gap-3 p-5 text-gray-600">
            {["WOMEN", "MEN", "CHILD", "BABY"].map((category) => (
              <label
                key={category}
                className="transition duration-150 ease-in-out hover:text-black"
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategory === category}
                  onChange={() => handleCheckboxChange(category)}
                />{" "}
                {category}
              </label>
            ))}
          </div>
        </div>

        <div className="pt-5">
          <h3 className="pl-5 text-xl font-medium text-gray-600">
            Product Type
          </h3>
          <div className="flex flex-col gap-3 p-5 text-gray-600">
            {["Dress", "Jeans", "Pant", "Jacket", "Shirt", "Short"].map(
              (type) => (
                <label
                  key={type}
                  className="transition duration-150 ease-in-out hover:text-black"
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedProductTypes.includes(type)}
                    onChange={() => handleProductTypes(type)}
                  />
                  {type}
                </label>
              )
            )}
          </div>
        </div>
        <div className="pt-5">
          <h3 className="pl-5 text-xl font-medium text-gray-600">Color</h3>
          <div className="flex flex-col w-full gap-2 p-5">
            {[
              { name: "Red", hex: "#ff0000" },
              { name: "Blue", hex: "#0000ff" },
              { name: "Green", hex: "#008000" },
              { name: "Black", hex: "#000000" },
              { name: "White", hex: "#ffffff" },
              { name: "Yellow", hex: "#ffff00" },
              { name: "Orange", hex: "#ffa500" },
              { name: "Purple", hex: "#800080" },
              { name: "Brown", hex: "#a52a2a" },
              { name: "Pink", hex: "#ffc0cb" },
              { name: "Gray", hex: "#808080" },
            ].map(({ name, hex }) => (
              <label className="flex items-center gap-2" key={name}>
                <input
                  type="checkbox" 
                  value={name}
                  checked={color === name}
                  onChange={() => handleColorChange(name)}
                />

                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: hex }}
                ></span>
                <span className="text-sm text-gray-700">{name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
