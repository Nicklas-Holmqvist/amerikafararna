import React from 'react';

interface SearchBarProps {
  onInputChange: (value: string) => void;
  inputValue: string;
  handleSearchEvent: (inputValue: string) => void;
  searchParam: string;
  resetSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onInputChange,
  inputValue,
  handleSearchEvent,
  searchParam,
  resetSearch,
}) => {
  return (
    <section className="flex flex-col mb-6">
      <div className="flex w-100 h-10 mb-1">
        <input
          onChange={(event) => onInputChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && inputValue !== '') {
              handleSearchEvent(event.currentTarget.value);
            } else return;
          }}
          value={inputValue}
          className="w-auto flex-grow pl-2 border text-sm"
          type="text"
          name="search"
          id="search"
          placeholder="Sök tex. på förnamn, efternamn, födelse, fader eller plats"
        />
        <button
          id="search"
          className="w-20 border hover:bg-gray-300"
          onClick={(event) => {
            event.preventDefault();
            handleSearchEvent(inputValue);
          }}>
          Sök
        </button>
      </div>
      <div>
        {searchParam ? (
          <span
            className="text-sm cursor-pointer pl-2"
            onClick={() => resetSearch()}>
            Rensa sökning
          </span>
        ) : undefined}
      </div>
    </section>
  );
};

export default SearchBar;
