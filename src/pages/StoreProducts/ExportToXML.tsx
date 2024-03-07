import { CSVLink } from 'react-csv';

import { DownloadIcon } from '@radix-ui/react-icons';

export default function ExportToXML({ data }) {
  const headers = Object.keys(data[0]).map((header) => {
    return {
      label: header,
      key: header,
    };
  });

  return (
    <CSVLink
      data={data}
      headers={headers}
      className="flex items-center gap-2 text-primary"
    >
      <DownloadIcon /> ExportToXML
    </CSVLink>
  );
}
