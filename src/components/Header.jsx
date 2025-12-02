import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/store/appSlice";
import { cacheResults } from "../utils/store/searchSlice";
import { useNavigate } from "react-router-dom";
import useYoutubeSuggestions from "../utils/hooks/useYoutubeSuggestions";

const Header = () => {
  const [search, setSearch] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ JSONP hook
  useYoutubeSuggestions(debouncedQuery, (results) => {
    setSuggestions(results);
    dispatch(cacheResults({ [debouncedQuery]: results }));
  });

  // ✅ Debounce search input
  useEffect(() => {
    const normalized = search.trim().toLowerCase();
    if (!normalized) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[normalized]) {
        setSuggestions(searchCache[normalized]);
      } else {
        setDebouncedQuery(normalized);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="p-4 grid grid-cols-12 shadow-lg">
      {/* Left */}
      <div className="flex col-span-2 items-center">
        <img
          onClick={() => dispatch(toggleSideBar())}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://img.icons8.com/sf-black/1200/menu.jpg"
        />

        <img
          onClick={() => navigate("/")}
          className="h-10 mx-3 cursor-pointer"
          alt="logo"
          src="https://i.pinimg.com/originals/60/a6/b9/60a6b964ec3eba8df67900d13c892496.jpg"
        />
      </div>

      {/* Center */}
      <div className="col-span-8 flex justify-center">
        <div className="relative w-[35rem]">
          <div className="flex">
            <input
              className="border border-black p-2 w-full rounded-l-full"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
            />

            <button
              className="rounded-r-full bg-gray-200 px-4 border border-black"
              onClick={() => {
                if (!search.trim()) return;
                navigate(`/search?q=${search}`);
                setShowSuggestions(false);
              }}
            >
              search
            </button>
          </div>

          {/* ✅ Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute bg-white w-full border shadow-lg rounded-lg mt-1 z-50">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    onMouseDown={() => {
                      setSearch(s);
                      navigate(`/search?q=${s}`);
                      setShowSuggestions(false);
                    }}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="col-span-2 flex justify-end">
        <img
          className="h-10 rounded-full"
          alt="avatar"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
