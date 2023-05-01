const axios= require("axios");

const url="http://localhost:8080/api";

const getProducts=()=>{
    try {
        setInterval(async() => {
            const response = await axios.get(`${url}/products`);
            console.log(response.data);
        }, 6000);
    } catch (error) {
        throw new Error("No se pudo encontrar los productos");
    }
}

getProducts();

module.exports={getProducts}