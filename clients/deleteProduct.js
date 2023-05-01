const axios= require("axios");

const url="http://localhost:8080/api";

const deleteProduct=async ()=>{
    try {
        const productToDelete = {
            name: 'Mintion | Beagle Camera | 3D Printer Camera | 32GB',
        };
        setInterval(async () => {
            const response = await axios(`${url}/product`, {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json; charset=UTF-8'
                },
                data: JSON.stringify({ name: productToDelete.name })
            })
            const responseDel = await axios.delete(`${url}/products/${response.data.data._id}`);
            console.log(responseDel.data);
            }, 6000);
    } catch (error) {
        throw new Error("No se pudo encontrar los productos");
    }
}

deleteProduct();