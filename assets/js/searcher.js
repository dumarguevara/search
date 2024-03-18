let loadProductJSON = () => {
    //Peticion asincrónica con fetch a un URL en formato JSON
    let myURL = "https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json"
    let productos
    fetch(myURL)
        .then(response => response.json())
        .then(result => {

            let products = result;
            console.log(products)
            let plantilla = "";

            for (i = 0; i < products.length; i++) {
                plantilla = plantilla + `
                    <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
                    <div class="card card-blog card-plain">
                    <div class="card-header p-0 mt-n4 mx-3">
                        <a class="d-block shadow-xl border-radius-xl">
                        <img src="${products[i].src}" alt="${products[i].name}" class="img-fluid shadow border-radius-xl">
                        </a>
                    </div>
                    <div class="card-body p-3">
                        <p class="mb-0 text-sm">${products[i].type}</p>
                        <a href="javascript:;">
                        <h5>
                            ${products[i].name}
                        </h5>
                        </a>
                        <p class="mb-4 text-sm">
                        <b>Price: </b> $ ${products[i].price}
                        </p>
                    </div>
                    </div>
                </div>
                `
            }

            let productsHTML = document.getElementById("templateproducts")
            productsHTML.innerHTML += plantilla
        })

        .catch(error => {

            /* Callback por fallo: Procese el error */

            console.log(error);

        });


}


    loadProductJSON()
    


