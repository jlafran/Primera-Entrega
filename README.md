# Primera-Entrega

Para correr el backend se hace con el comando: npm run index

Para hace los request son:

* ### Productos:
    * GetAll: http://localhost:8080/productos/
    * GetById:  http://localhost:8080/api/productos/:id
    * DeleteById: http://localhost:8080/productos/:id
    * ReplaceById:  http://localhost:8080/productos/:id // en el body tenes que poner un producto en formato Json ej: 
      *  {
            "title": "Reemplazo",
            "price": "1000",
            "url": "https://www.apple.com/newsroom/images/product/iphone/geo/apple_iphone-12_new-design_geo_10132020_big.jpg.large_2x.jpg"
            }
    * Post: http://localhost:8080/productos/ y alli metemos un Json producto
    
* ### Carrito:
    * PostProduct:  http://localhost:8080/carritos/:id/productos  en los params mandamos el id del carrito y en el body enviamos el id del producto que queremos importar, 
        * ej : { "id":9 }
    * PostCarrito:  http://localhost:8080/carritos/   Nos crea el carrito vacio
    * GetCarrito: http://localhost:8080/carritos/:id/productos  poner el id del carrito y te trae todos lo productos que tiene
    * DeleteCarrito:  http://localhost:8080/carritos/:id
    * DeleteProducto:   http://localhost:8080/carritos/:id/productos/:id_prod
    
