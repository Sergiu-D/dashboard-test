import ColumnHeader from './ColumnHeader';

const columns = [
  {
    id: 'Id',
    accessorKey: 'Id',
    header: ({ column }: any) => (
      <ColumnHeader column={column} className="title-md" title="Id" />
    ),
    cell: (info: any) => {
      return <div className="min-w-fit">{info.getValue()} </div>;
    },
  },
  {
    id: 'title',
    accessorKey: 'title',
    header: ({ column }: any) => <ColumnHeader column={column} title="Title" />,
    cell: (info: any) => {
      return <div className="min-w-fit">{info.getValue()} </div>;
    },
  },
  {
    id: 'price',
    accessorKey: 'price',
    header: ({ column }: any) => <ColumnHeader column={column} title="Price" />,
    cell: (info: any) => {
      const formattedPrice = new Intl.NumberFormat('ro-RO', {
        style: 'currency',
        currency: 'RON',
      }).format(info.getValue());

      return <div className="min-w-fit">{formattedPrice}</div>;
    },
  },
  {
    id: 'image_link',
    accessorKey: 'image_link',
    header: ({ column }: any) => <ColumnHeader column={column} title="Image" />,
    cell: (info: any) => (
      <div className="flex justify-center items-center">
        <img
          src={info.getValue()}
          style={{ maxWidth: '100px', aspectRatio: 1 / 1, objectFit: 'cover' }}
        />
      </div>
    ),
  },
  {
    id: 'description',
    accessorKey: 'description',
    header: ({ column }: any) => (
      <ColumnHeader column={column} title="Description" />
    ),
    cell: (info: any) => {
      return (
        <div
          className="w-[100%]"
          style={{ maxHeight: '100px', overflow: 'auto' }}
        >
          {info.getValue()}{' '}
        </div>
      );
    },
  },
];

export default columns;
