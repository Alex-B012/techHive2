import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLoadProductData, useGetProductObj } from '../../utils/productUtils';
import './Product.css';
import { Laptop } from '../../types/products/laptops';
import { Computer } from '../../types/products/computers';

// Компонент для отображения информации о продукте
function Product() {
   // Инициализация состояний для хранения данных
   const [laptopsDataArr, setLaptopsDataArr] = useState<Laptop[]>([]);
   const [pcDataArr, setPcDataArr] = useState<Computer[]>([]);

   // Состояния для хранения выбранного продукта
   const [laptop, setLaptop] = useState<Laptop | null>(null);
   const [computer, setComputer] = useState<Computer | null>(null);

   // Получение параметров из URL
   const { categoryUrl = '', productId = '' } = useParams<{
      categoryUrl?: string;
      productId?: string;
   }>();

   // Преобразование productId в число
   const productIdInt = Number(productId);

   // Хуки для загрузки данных
   const loadProductData = useLoadProductData(categoryUrl || '');
   const getProductObj = useGetProductObj(
      categoryUrl || '',
      laptopsDataArr,
      pcDataArr,
      productIdInt
   );

   // Эффект для загрузки данных
   useEffect(() => {
      const fetchData = async () => {
         try {
            // Проверка наличия категории
            if (!categoryUrl) {
               console.error('Category is not specified');
               return;
            }

            const data = await loadProductData();

            // Проверка типа данных перед установкой состояния
            if (Array.isArray(data)) {
               // Проверка структуры данных с явным указанием типов
               if (categoryUrl === 'laptops') {
                  if (data.every((item: any) =>
                     'brand' in item &&
                     'name' in item &&
                     typeof item.brand === 'string' &&
                     typeof item.name === 'string'
                  )) {
                     setLaptopsDataArr(data as Laptop[]);
                  }
               } else if (categoryUrl === 'computers') {
                  if (data.every((item: any) =>
                     'brand' in item &&
                     'name' in item &&
                     typeof item.brand === 'string' &&
                     typeof item.name === 'string'
                  )) {
                     setPcDataArr(data as Computer[]);
                  }
               }
            }

            const product = getProductObj();

            // Установка выбранного продукта
            if (categoryUrl === 'laptops') {
               setLaptop(product);
            } else if (categoryUrl === 'computers') {
               setComputer(product);
            }
         } catch (error) {
            console.error('Error loading data:', error);
         }
      };

      fetchData();
   }, [
      loadProductData,
      getProductObj,
      categoryUrl,
      laptopsDataArr,
      pcDataArr,
      productIdInt
   ]);

   return (
      <div className="productPage">
         <div className="productPage__empty"></div>
         <div className="productPage__container">
            <div className="productPage__header">
               <h1 className="productPage__title">
                  {laptop
                     ? laptop.name
                     : computer
                        ? computer.name
                        : 'Loading data...'}
               </h1>
            </div>
         </div>
      </div>
   );
}

// Экспорт компонента
export default Product;
