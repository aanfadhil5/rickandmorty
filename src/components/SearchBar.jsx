import React, { useState } from "react";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
const SearchBar = () => {
  return (
    <div className="flex justify-center h-auto bg-green-300 p-8 ">
      <form>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
            <SearchIcon />
          </span>
          <input
            placeholder="Search..."
            type="text"
            className="h-12 w-full rounded-lg pl-10 outline-none shadow-lg"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
