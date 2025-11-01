import  { listProducts,filtersProducts } from "../services/dataService.js"

export async function getProducts(req,res) {
    const filter=req.query;
    let products;
    if(Object.keys(filter).length>0){
        products=await filtersProducts(filter);
    }
    else{
       products =await listProducts();
    }
    console.log(products);
    return res.json(products);
}
