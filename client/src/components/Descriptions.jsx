import React, { useState } from "react";

const Descriptions = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const text = [
    {
      title: "2024 Women's Winter and Summer Fashion",
      content: `Shopping for clothing has never been easier. DeSuits is a brand that offers everything from timeless classics to the latest trends. Experience the thrill of shopping! With dazzling women's shopping options, you can explore comfortable, casual looks, or stylish pieces for elegant, formal outfits. Stay on trend with the newest looks and discover new favorites. Everyday t-shirts and shirts provide a sporty yet chic appearance, while blouses and tunics are essential for the office or other more polished days. For a head-to-toe stylish look, you can check out dress models or add elegance to any outfit with a blazer. Before the winter chills set in, you can shop for sweaters and cardigans made of wool, cotton, and acrylic.`,
    },
    {
      title: "Women's Shopping with DeSuits Privilege",
      content: `Denim is a fabric with a wide variety of styles, including high-waisted, wide-leg, or slim-fit options that hug the body. Denim is not only used for pants but also for shirts, jumpsuits, dresses, jackets, shorts, and skirts. You can choose from the denim collection, offered in a variety of cuts and washes. If you're heading out for a night, you can explore dazzling evening dresses, pants, and blouses for special occasions. If you're looking to add comfortable pieces to your workout routine, you can shop from the DeSuits sportswear collection, which features trendy colors and styles in comfortable sportswear items. Discover products specifically designed for sports. When it's time to relax, you can enjoy the comfort of the softest pajamas.`,
    },
    {
      title: "Trending Pieces in Women's Online Shopping",
      content: `Don't forget to check out the collections with refreshed items to keep up with the pulse of contemporary fashion! Chic and fashion-forward outfits, along with timeless pieces, are among the most preferred for shopping. Timeless pieces provide continuity and remain popular beyond specific seasons. You can combine wardrobe staples like basic clothing with the season's trending items to create styles that align with 2024 women's fashion. The seasonality of popular fashion is strong. Enjoy high-quality, fashionable women's clothing. Whether you're refreshing your wardrobe, adding special pieces, or doing a complete overhaul, DeSuits offers a variety of items to suit every closet.`,
    },
  ];

  const toggleReadMore = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div
      className={`w-full ${
        expandedSection === null ? "h-[60vh]" : "h-[80vh]"
      } flex items-center justify-center`}
    >
      <div className="w-[70%] h-full p-0 md:p-5">
        <div className="flex flex-col gap-4">
          {text.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold">{section.title}</h2>
              <p>
                <span
                  className={`${
                    expandedSection === index ? "block" : "hidden"
                  } md:block`}
                >
                  {section.content}
                </span>

                <span
                  className={`${
                    expandedSection === index ? "hidden" : "block"
                  } md:hidden`}
                >
                  {`${section.content.split(" ").slice(0, 30).join(" ")}... `}
                  <span
                    onClick={() => toggleReadMore(index)}
                    className="text-blue-500 cursor-pointer"
                  >
                    Read More
                  </span>
                </span>

                <span
                  onClick={() => toggleReadMore(index)}
                  className={`text-blue-500 cursor-pointer ${
                    expandedSection === index ? "block" : "hidden"
                  } md:hidden`}
                >
                  Read Less
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Descriptions;
