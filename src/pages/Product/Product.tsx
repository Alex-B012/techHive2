import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLoadProductData, useGetProductObj } from '../../utils/productUtils';
import './product.css';
import { Laptop } from '../../types/products/laptops';
import { Computer } from '../../types/products/computers';
import LaptopDisplay from './LaptopDisplay/LaptopDisplay';
import ComputerDisplay from './ComputerDisplay/ComputerDisplay';
import ProductNavigation from './components/ProductNavigation/ProductNavigation';

function Product() {
   const [laptopsDataArr, setLaptopsDataArr] = useState<Laptop[]>([]);
   const [pcDataArr, setPcDataArr] = useState<Computer[]>([]);
   const [laptop, setLaptop] = useState<Laptop | null>(null);
   const [computer, setComputer] = useState<Computer | null>(null);
   const { categoryUrl = '', productId = '' } = useParams<{
      categoryUrl?: string;
      productId?: string;
   }>();

   const productIdInt = Number(productId);

   const loadProductData = useLoadProductData(categoryUrl || '');
   const getProductObj = useGetProductObj(
      categoryUrl || '',
      laptopsDataArr,
      pcDataArr,
      productIdInt
   );

   useEffect(() => {
      const fetchData = async () => {
         try {
            if (!categoryUrl) {
               console.error('Category is not specified');
               return;
            }

            const data = await loadProductData();
            if (Array.isArray(data)) {
               switch (categoryUrl) {
                  case 'laptops':
                     setLaptopsDataArr(data as Laptop[]);
                     break;
                  case 'computers':
                     setPcDataArr(data as Computer[]);
                     break;
                  default:
                     console.error('Unknown category');
               }
            }

            const product = getProductObj();
            if (categoryUrl === 'laptops' && product) {
               setLaptop(product as Laptop);
            } else if (categoryUrl === 'computers' && product) {
               setComputer(product as Computer);
            }
         } catch (error) {
            console.error('Error loading data:', error);
         }
      };

      fetchData();
   }, [loadProductData, getProductObj, categoryUrl]);

   return (
      <div className="productPage">
         <div className="productPage__empty"></div>
         <div className="productPage__container">
            <ProductNavigation />
            {laptop
               ? <LaptopDisplay product={laptop} />
               : computer
                  ? <ComputerDisplay product={computer} />
                  : 'Loading data...'}
         </div>
      </div>
   );
}

export default Product;
