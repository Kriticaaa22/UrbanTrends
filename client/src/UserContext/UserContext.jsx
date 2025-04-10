import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState("");
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [productId,setProductId] = useState("");
    const [shoppingcartNumber,setShoppingcartNumber] = useState(0);
    const [selectedProductTypes, setSelectedProductTypes] = useState([]);
    const [color,setColor] = useState("");

    const getCurrentUser = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/auth/getcurrent", {
                withCredentials: true
            });
            setUser(response.data);
        } catch (error) {
            console.log(error);
            setUser(null);
        }
    };
    const getProducts = async (category) => {
        setLoading(true);
        try {
            const selectedCategoriesString = selectedProductTypes.join(',');
            const url = category 
                ? `http://localhost:5000/api/products?categories=${category}&type=${selectedCategoriesString}&color=${color}`
                : `http://localhost:5000/api/products?type=${selectedCategoriesString}&color=${color}`;
    
            const response = await axios.get(url);
            
            setProducts(response.data);
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    

    const getItemNumber = async()=>{
        try {
            const response = await axios.get("http://localhost:5000/api/auth/getitemnumber",{
                params:{
                    user_id:user.id
                },
                withCredentials:true
            })
            
            console.log(response.data.itemCount);
            setShoppingcartNumber(response.data.itemCount);

            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getCurrentUser();
       
    }, []); 
    useEffect(() => {
        if (user) {
            getItemNumber();
        }
    }, [user]);

    useEffect(() => {
        getProducts(categories);
    }, [categories,selectedProductTypes,color]); 

    return (
        <UserContext.Provider value={{ user, setUser, categories, setCategories, setProducts, products,loading,productId,setProductId,shoppingcartNumber,setShoppingcartNumber,getItemNumber,selectedProductTypes,setSelectedProductTypes,color,setColor }}>
            {children}
        </UserContext.Provider>
    );
};
