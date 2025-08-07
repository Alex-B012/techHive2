// Product.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Laptop } from '../../types/products/laptops';
import { Computer } from '../../types/products/computers';
import { useLoadProductData, useGetProductObj } from './utils/productUtils';
import ProductDetails from './ProductDetails'; // Предположим, что есть компонент для отображения деталей
import ProductImages from './ProductImages'; // Компонент для отображения изображений
import ProductReviews from './ProductReviews'; // Компонент для отзывов
import './Product.css'; // Стили для страницы

function Product() {
   const [laptops_dataArr, setLaptops_dataArr] = useState<Laptop[]>([]);
   const [pc_dataArr, setPc_dataArr] = useState<Computer[]>([]);
   const [laptop, setLaptop] = useState<Laptop | null>(null);
   const [computer, setComputer] = useState<Computer | null>(null);
   const { categoryUrl, productId } = useParams<{
      categoryUrl: string;
      productId: string;
   }>();
   const productId_int = Number(productId);

   const loadProductData = useLoadProductData(categoryUrl);
   const getProductObj = useGetProductObj(
      categoryUrl,
      laptops_dataArr,
      pc_dataArr,
      productId_int
   );

   useEffect(() => {
      const fetchData = async () => {
         try {
            const data = await loadProductData();
            if (categoryUrl === 'laptops') {
               setLaptops_dataArr(data);
            } else if (categoryUrl === 'computers') {
               setPc_dataArr(data);
            }
            const product = getProductObj();
            if (categoryUrl === 'laptops') {
               setLaptop(product);
            } else if (categoryUrl === 'computers') {
               setComputer(product);
            }
         } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
         }
      };

      fetchData();
   }, [
      loadProductData,
      getProductObj,
      categoryUrl,
      laptops_dataArr,
      pc_dataArr,
      productId_int,
   ]);

   return (
      <div className="productPage">
         <div className="productPage__empty"></div>
         <div className="productPage__container">
            {/* Заголовок страницы */}
            <div className="productPage__header">
               <h1 className="productPage__title">
                  {laptop ? laptop.name : computer ? computer.name : 'Загрузка...'}
               </h1>
            </div>

            {/* Изображения продукта */}
            <div className="productPage__images">
               <ProductImages
                  images={laptop ? laptop.images : computer?.images || []}
               />
            </div>

            {/* Детали продукта */}
            <div className="productPage__details">
               <ProductDetails
                  product={laptop || computer}
                  category={categoryUrl}
               />
            </div>

            {/* Отзывы */}
            <div className="productPage__reviews">
               <ProductReviews
                  productId={productId_int}
                  category={categoryUrl}
               />
            </div>

            {/* Дополнительные элементы */}
            <div className="productPage__actions">
               {/* Здесь можно добавить кнопки покупки, сравнения и т.д. */}
            </div>
         </div>
      </div>
   );
}

export default Product;
