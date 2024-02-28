import { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

export default function ComboSelect(props) {
  const { register, selectOptions } = props;
  const [initialValue, setInitialValue] = useState('Select field');
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(selectOptions);
  const [selectedTab, setSelectedTab] = useState(selectOptions.tabs[0]);

  const componentRef = useRef();
  const { name } = register;
  const { setValue } = useFormContext();

  function getFilteredOptions() {
    const result = selectOptions.options.filter(
      (option) =>
        selectedTab.value === option.type || selectedTab.value === 'all',
    );
    return result;
  }
  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const filteredOptions = getFilteredOptions();
    setOptions(filteredOptions);
  }, [selectedTab.value]);

  const handleSearchChange = (e) => {
    const filteredOptions = getFilteredOptions();

    const searchedOptions = filteredOptions.filter((option) =>
      option.label.toLowerCase().includes(e.target.value.toLowerCase()),
    );

    setOptions(searchedOptions);
  };

  const handleSelectOption = (ev) => {
    setInitialValue(ev.target.value);
    setValue(name, ev.target.value);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col relative w-[30%]	justify-center h-fit">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between relative z-20 w-full appearance-none rounded border border-gray-4 bg-transparent py-2 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      >
        {initialValue}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div
          className="absolute z-50 top-10.5 w-full flex flex-col border focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          ref={componentRef}
        >
          {/* Tabs */}
          <div className="flex w-full justify-center">
            <div className="w-full flex justify-between bg-whiter p-1.5 dark:bg-meta-4">
              {selectOptions.tabs.map((tab, index) => {
                return (
                  <button
                    key={`${tab.value}-${index}`}
                    onClick={() => setSelectedTab(tab)}
                    className="relative z-20 max-w-max appearance-none border-stroke bg-transparent py-2 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Search input */}
          <div className="flex gap-3 relative z-20 w-full appearance-none border-b border-stroke bg-transparent py-2 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
            <Search />
            <input
              type="text"
              onChange={handleSearchChange}
              className="w-full dark:border-form-strokedark dark:bg-form-input outline-none"
            />
          </div>
          {/* List */}
          <fieldset onChange={handleSelectOption}>
            <div>
              {options.map((option, index) => {
                return (
                  <div key={index}>
                    <input
                      className="hidden"
                      type="radio"
                      id={option.value}
                      name="comboSelect"
                      value={option.value}
                    />
                    <label
                      htmlFor={option.value}
                      className="block w-100"
                      style={{ cursor: 'pointer' }}
                    >
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </div>
      )}
    </div>
  );
}
