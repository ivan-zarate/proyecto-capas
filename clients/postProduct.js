const axios= require("axios");

const url="http://localhost:8080/api";
const postProduct=()=>{
    try {
        const newProduct={
            name:"Mintion | Beagle Camera | 3D Printer Camera | 32GB",
            description:"Mintion Beagle camera is a dual-use 3d printer camera that allows you to monitor and control your 3D printer remotely, while also making it easy to create time-lapse videos.",
            code:3366990,
            url:"https://cdn.shopify.com/s/files/1/0261/3710/0359/products/20221019202912_750x750.jpg?v=1672394071",
            price:9810,
            stock:90,
            incart:false  
        };
        setInterval(async() => {
            const response = await axios(`${url}/products`,{
                method: "POST",
                headers: {
                    "Content-Type": 'application/json; charset=UTF-8'
                },
                data:JSON.stringify(newProduct)
            })
            console.log(response.data);
        }, 6000);
    } catch (error) {
        throw new Error("No se pudo cargar el productos");
    }
}

postProduct();
