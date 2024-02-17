const Table = (props) => {
  const { tableHead, tableBody } = props;
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {tableHead.map((header, index) => (
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
            {tableBody.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {tableHead.map((header, cellIndex) => {
                  const isImage = header === 'image_link';
                  return (
                    <td
                      key={cellIndex}
                      className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11"
                    >
                      {isImage ? (
                        <img src={row[header]} width={70} />
                      ) : (
                        <h5 className="font-medium text-black dark:text-white">
                          {row[header]}
                        </h5>
                      )}
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
