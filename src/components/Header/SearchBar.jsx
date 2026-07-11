import { Search } from "lucide-react";
import { useApp } from "../../context/CreateUserContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch } = useApp(); // usestate
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [search, setDebouncedSearch]);

  function handlechange(search) {
    console.log(search);
    navigate(`/search/${search}`);
  }
  return (
    <div className="hidden lg:flex items-center border rounded-lg px-3 py-2 w-80">
      <Search size={18} />
      <input
        type="text"
        placeholder="Search products..."
        className="outline-none ml-2 w-full"
        value={search}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handlechange(search);
          }
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
