import React, { useEffect, useState } from "react";
import ItemList from './ItemList';
import ItemCount from "./ItemCount"

    const listproductos = [
    {id:1, title:"PlayStation 5 Standard", stock: 9, initual: 1, price: 1800, image:"https://www.cetrogar.com.ar/media/catalog/product/e/l/el2307_ps5_playstation_ps5_hw_standard.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"},
    {id:2, title:"Nintendo Switch", stock: 7, initual: 4, price: 1500, image:"https://www.panafoto.com/media/catalog/product/cache/22adb41f3f66ba957b3b3b7b0df44fe6/1/4/141587-1.jpg"},
    {id:3, title:"Notebook Gamer Asus", stock: 14, initual: 5, price: 1900, image:"https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/a/s/asus_tuf_fx506lh-hn002t_-_1_4.jpg"},
    {id:4, title:"Smart TV Xiaomi", stock: 13, initual: 2, price: 2000, image:"https://i.blogs.es/a4cfbb/mitv-2/1366_2000.jpg"},
    {id:5, title:"Monitor Huawei Display", stock: 17, initual: 6, price: 1600, image:"https://i.blogs.es/f9cd7f/huawei-display-23.8-copia/1366_2000.jpg"},
    {id:6, title:"Redragon Teclado Gamer", stock: 20, initual: 9, price: 500, image:"https://m.media-amazon.com/images/I/618SfWv+vYS._AC_SL1500_.jpg"},
    {id:7, title:"Procesador AMD Ryzen 7", stock: 9, initual: 3, price: 1200, image:"https://mexx-img-2019.s3.amazonaws.com/procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928"},
    {id:8, title:"Consola Xbox Serie X", stock: 5, initual: 1, price: 2200, image:"https://www.atajo.com.ar/images/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01.jpg"},
    {id:9, title:"Joystick PS5", stock: 19, initual: 7, price: 700, image:"https://cdn.shopify.com/s/files/1/0596/3078/0584/products/61ypl-HO_WS._SL1500_1024x1024@2x.jpg?v=1653871442"},
]

    function Conteiner() {
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(false)

        function onAdd() {
            alert(`Su compra fue exitosa`)
        }

        useEffect(() => {
            const promesa = new Promise((res, rej) => {

                setTimeout(() => {
                    res(listproductos)
                }, 2000)
            })
                promesa
                    .then((res) => {
                        setProductos(res)
                        setLoading(true)
                    })
                    .catch((error) => console.log(error))
        }, [])

        return(
            <>
            <h1>Catalogo de Productos</h1>
            {!loading ? (<div>... Cargando</div>) : (<ItemList productos={productos}/>)}
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
            </>
        )
    }

export default Conteiner