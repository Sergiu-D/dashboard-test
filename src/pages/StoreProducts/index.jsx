import { useState } from 'react';
import STORE_PRODUCTS from '../../storeProducts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';

import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import DataTableViewOptions from './DataTableViewOptions';
import Pagination from './Pagination';

import SearchTable from './SearchTable';

import columns from './columns';
import ExportToXML from './ExportToXML';

const defaultData = mapProducts(STORE_PRODUCTS);

export default function StoreProducts() {
  const [data, setData] = useState(defaultData);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <div className="flex flex-col gap-5">
      <SearchTable table={table} />

      <div>
        <Table className="border-collapse border rounded-md border-gray/20">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    className=" text-lg text-bodydark p-0"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="border border-slate-600 border-gray/20 rounded-md max-w-[10vw] text-white"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between sticky bottom-0 -mb-10 -mx-4 md:-mx-6 2xl:-mx-10 bg-black p-5">
        <div className="flex gap-5">
          <DataTableViewOptions table={table} />
          <ExportToXML data={data} />
        </div>
        <Pagination table={table} />
      </div>
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
