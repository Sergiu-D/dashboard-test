import { useState, useReducer } from 'react';
import STORE_PRODUCTS from '../../storeProducts';

import { Search } from 'lucide-react';
import Table from './Table';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '../../components/ui/table';

// import {
//   // ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from '@tanstack/react-table';

// const defaultData = [
//   {
//     firstName: 'tanner',
//     lastName: 'linsley',
//     age: 24,
//     visits: 100,
//     status: 'In Relationship',
//     progress: 50,
//   },
//   {
//     firstName: 'tandy',
//     lastName: 'miller',
//     age: 40,
//     visits: 40,
//     status: 'Single',
//     progress: 80,
//   },
//   {
//     firstName: 'joe',
//     lastName: 'dirte',
//     age: 45,
//     visits: 20,
//     status: 'Complicated',
//     progress: 10,
//   },
// ];

// const defaultColumns = [
//   {
//     accessorKey: 'firstName',
//     cell: (info) => info.getValue(),
//     footer: (props) => props.column.id,
//   },
//   {
//     accessorFn: (row) => row.lastName,
//     id: 'lastName',
//     cell: (info) => info.getValue(),
//     header: () => <span>Last Name</span>,
//     footer: (props) => props.column.id,
//   },
//   {
//     accessorKey: 'age',
//     header: () => 'Age',
//     footer: (props) => props.column.id,
//   },
//   {
//     accessorKey: 'visits',
//     header: () => <span>Visits</span>,
//     footer: (props) => props.column.id,
//   },
//   {
//     accessorKey: 'status',
//     header: 'Status',
//     footer: (props) => props.column.id,
//   },
//   {
//     accessorKey: 'progress',
//     header: 'Profile Progress',
//     footer: (props) => props.column.id,
//   },
// ];

// export default function StoreProducts() {
//   // const [storeData, setStoreData] = useState(STORE_PRODUCTS);
//   const [data, setData] = useState(defaultData);
//   const [columns] = useState(() => [...defaultColumns]);
//   const [columnVisibility, setColumnVisibility] = useState({});

//   const rerender = useReducer(() => ({}), {})[1];

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       columnVisibility,
//     },
//     onColumnVisibilityChange: setColumnVisibility,
//     getCoreRowModel: getCoreRowModel(),
//     debugTable: true,
//     debugHeaders: true,
//     debugColumns: true,
//   });

// const tableHead = [
//   'Id',
//   'title',
//   'link',
//   'price',
//   'image_link',
//   'description',
// ];

// const tableBody = mapProducts(storeData);

//   const handleSearchChange = (e) => {
//     const products = storeData.filter((product) => {
//       return product.productName
//         .toLowerCase()
//         .includes(e.target.value.toLowerCase());
//     });

//     setStoreData(products);
//   };

//   return (
//     <div className="p-2">
//       <div className="inline-block border border-black shadow rounded">
//         <div className="px-1 border-b border-black">
//           <label>
//             <input
//               {...{
//                 type: 'checkbox',
//                 checked: table.getIsAllColumnsVisible(),
//                 onChange: table.getToggleAllColumnsVisibilityHandler(),
//               }}
//             />{' '}
//             Toggle All
//           </label>
//         </div>
//         {table.getAllLeafColumns().map((column) => {
//           return (
//             <div key={column.id} className="px-1">
//               <label>
//                 <input
//                   {...{
//                     type: 'checkbox',
//                     checked: column.getIsVisible(),
//                     onChange: column.getToggleVisibilityHandler(),
//                   }}
//                 />{' '}
//                 {column.id}
//               </label>
//             </div>
//           );
//         })}
//       </div>
//       <div className="h-4" />
//       <table>
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th key={header.id} colSpan={header.colSpan}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext(),
//                       )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           {table.getFooterGroups().map((footerGroup) => (
//             <tr key={footerGroup.id}>
//               {footerGroup.headers.map((header) => (
//                 <th key={header.id} colSpan={header.colSpan}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.footer,
//                         header.getContext(),
//                       )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </tfoot>
//       </table>
//       <div className="h-4" />
//       <button onClick={() => rerender()} className="border p-2">
//         Rerender
//       </button>
//       <div className="h-4" />
//       <pre>{JSON.stringify(table.getState().columnVisibility, null, 2)}</pre>
//     </div>
//   );
// }

export default function StoreProducts() {
  const [storeData, setStoreData] = useState(STORE_PRODUCTS);

  const tablehead = [
    'Id',
    'title',
    'link',
    'price',
    'image_link',
    'description',
  ];

  const tablebody = mapProducts(storeData);

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

      <Table tablehead={tablehead} tablebody={tablebody} />
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
