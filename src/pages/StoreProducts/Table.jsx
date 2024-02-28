const Table = (props) => {
  const { tablehead, tablebody } = props;
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {tablehead.map((header, index) => (
                <th
                  key={index}
                  className="w-auto py-4 px-4 font-medium text-black dark:text-white xl:pl-11"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tablebody.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {tablehead.map((header, cellIndex) => {
                  const isImage = header === 'image_link';
                  const title = header === 'title';
                  const link = header === 'link';
                  const description = header === 'description';
                  return (
                    <td
                      key={cellIndex}
                      className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                    >
                      <div
                        className={
                          ((title || link) &&
                            'w-[280px] overflow-hidden text-') ||
                          (description && 'overflow-auto max-h-[200px]')
                        }
                      >
                        {isImage ? (
                          <img src={row[header]} width={70} />
                        ) : (
                          <h5 className="font-medium text-black dark:text-white">
                            {row[header]}
                          </h5>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
