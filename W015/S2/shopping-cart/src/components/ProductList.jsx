import Item from "./Item";

function ProductList() {
    const products = [
        {id : 1 , title : "Iphone 16 Pro" , price : 80000} , 
        {id : 2 , title : "Nvidia 5080ti" ,price : 150000} ,
        {id: 3 , title : "Dell 5570" , price : 12000}
    ]
    return (  
        <>
            <div className="container my-5 text-center">
                <h2> Products List</h2>
                <div className="row my-3">
                    {
                        products.map((product) => (
                            <div key={product.id}
                             className="col-lg-4 col-md-6 col-sm-12 my-2">
                                <Item product={product}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default ProductList;