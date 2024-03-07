import { useState } from 'react';
import { Table } from '@tanstack/react-table';

import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

interface SearchTableProps<TData> {
  table: Table<TData>;
}

export default function SearchTable<TData>({ table }: SearchTableProps<TData>) {
  const [selectedOption, setSelectedOption] = useState('title');

  const selectOptions = table
    .getHeaderGroups()
    .map((headerGroup) => headerGroup.headers.map((header) => header.id))
    .flat();

  const handleSelectChange = (ev: any) => {
    setSelectedOption(ev);
    table.resetColumnFilters();
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={
            (table.getColumn(selectedOption)?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn(selectedOption)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <SelectTable
          options={selectOptions}
          placeholder="Select a column"
          value={selectedOption}
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
}

type SelectProps = {
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};
function SelectTable({ placeholder, options, value, onChange }: SelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className=" bg-black ">
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              value={option}
              key={option}
              className="dark:text-white dark:hover:bg-strokedark"
              style={{ cursor: 'pointer' }}
            >
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
