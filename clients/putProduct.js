const axios = require("axios");

const url = "http://localhost:8080/api";

const putProduct = async () => {
    try {
        const editedProduct = {
            name: 'Mintion | Beagle Camera | 3D Printer Camera | 32GB',
            description: "Mintion Beagle camera is a dual-use 3d printer camera that allows you to monitor and control your 3D printer remotely, while also making it easy to create time-lapse videos.",
            code: 3366990,
            url: "https://cdn.shopify.com/s/files/1/0261/3710/0359/products/20221019202912_750x750.jpg?v=1672394071",
            price: 13810,
            stock: 90,
        };
        setInterval(async () => {
            const response = await axios(`${url}/product`, {
                method: "GET",
                headers: {
                    "Content-Type": 'application/json; charset=UTF-8'
                },
                data: JSON.stringify({ name: editedProduct.name })
            })
            const newProduct={
                _id:response.data.data._id,
                ...editedProduct
            }
            const responsePut = await axios(`${url}/products/${response.data.data._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json; charset=UTF-8'
                },
                data: JSON.stringify(newProduct)
            });
            console.log(responsePut.data);
        }, 6000);
    } catch (error) {
        throw new Error("No se pudo modificar el producto");
    }
}

putProduct();