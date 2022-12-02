import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";

function App() {
  const [charData, setCharData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const getAllChar = async () => {
    setLoading(true);
    const url = `https://rickandmortyapi.com/api/character/?name=${query}`;
    const response = await fetch(url);
    const res = await response.json();
    setCharData(res.results);
    setLoading(false);
  };
  useEffect(() => {
    getAllChar();
  }, []);
  useEffect(() => {
    getAllChar();
  }, [query]);
  return (
    <div className="">
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
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-12 justify-center ">
          {charData.map((char) => {
            return (
              <div key={char.id}>
                <Card
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  image={char.image}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
