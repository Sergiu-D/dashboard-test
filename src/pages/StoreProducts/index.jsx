import { useState } from 'react';
import STORE_PRODUCTS from '../../storeProducts';
import Table from './Table';

import { Search } from 'lucide-react';

export default function StoreProducts() {
  const [storeData, setStoreData] = useState(STORE_PRODUCTS);

  const tableHead = [
    'Id',
    'title',
    'link',
    'price',
    'image_link',
    'description',
  ];

  const tableBody = mapProducts(storeData);

  const handleSearchChange = (e) => {
    const products = storeData.filter((product) => {
      return product.productName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setStoreData(products);
  };

  return (
    <div className="flex flex-col w-full gap-50">
      <div className="flex gap-3 relative z-20 w-[50%] appearance-none border-b border-stroke bg-transparent py-2 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
        <Search />
        <input
          type="text"
          onChange={handleSearchChange}
          className="w-full dark:border-form-strokedark dark:bg-form-input outline-none"
        />
      </div>

      <Table tableHead={tableHead} tableBody={tableBody} />
    </div>
  );
}

function mapProducts(productsArray) {
  return productsArray.map((product) => {
    const {
      productId: Id,
      productName: title,
      link,
      priceRange: {
        sellingPrice: { highPrice: price },
      },
      items: [
        {
          images: [{ imageUrl: image_link }],
        },
      ],
      description,
    } = product;

    return {
      Id,
      title,
      link,
      price,
      image_link,
      description,
    };
  });
}
