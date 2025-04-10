import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";


const Trend = () => {

  const navigate = useNavigate();

  const {setCategories} = useContext(UserContext);

  const handleNavigate = (index)=>{
      if(index ===0){
        setCategories("WOMEN")
        navigate("/products");
      }
      else if(index===1){
        setCategories("MEN")
        navigate("/products");
      }
      else if(index===2){
        setCategories("CHILD")
        navigate("/products");
      }
      else if(index===3){
        setCategories("BABY")
        navigate("/products");
      }
  }
  return (
    <div className="w-full h-auto bg-gray-100 py-16 ">
      <div className="text-5xl font-semibold p-3 pb-12 text-[#1F2937] text-center">
        <h2 className="tracking-wider">Trends</h2>
      </div>
      <div className="flex flex-col w-full gap-8 p-5 md:flex-row md:justify-center items-ce">
        {[
          {
            src: "https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/46461/uploads/urunresimleri/buyuk/siyah-stretch-uzun-elbise-nazliye-moda-8e2a80.jpeg",
            title: "Women's Clothing",
            price: "$59.99",
          },
          {
            src: "https://nextluxury.com/wp-content/uploads/green-pants-with-blue-striped-sweater-dapper-mens-casual-wear-styles.jpg",
            title: "Men's Clothing",
            price: "$49.99",
          },
          {
            src: "https://m.media-amazon.com/images/I/51lm+JrJaNL._AC_UY1000_.jpg",
            title: "Kid's Clothing",
            price: "$29.99",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkxlzyEMKKwWl2vIoA9zm5Et2R3fQYyi5gCmIGdVzMHCrc2kEeC8Os7YWsudmsR2JTho&usqp=CAU",
            title: "Baby's Clothing",
            price: "$29.99",
          },
        ].map((item, index) => (
          <div
            key={index}
            onClick={()=>handleNavigate(index)}
            className="relative w-full max-w-sm h-[30rem] rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 animate-slideUp"
          >
            <img
              className="object-cover w-full h-full"
              src={item.src}
              alt={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <span className="text-lg">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trend;
