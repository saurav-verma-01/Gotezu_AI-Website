import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
   
    <div className="py-6 md:py-8 max-w-sm">
        <form className="border-2 border-[#E9FF7A] rounded-xl py-1 pl-2 pr-4 text-sm flex items-center justify-between gap-2 text-white max-w-lg mx-auto bg-black/50 " >
            <input type="text" name="search-trainer" id="search-trainer" placeholder="Search Trainers" className="outline-none text-sm text-white py-1  placeholder:text-gray-300 pl-4" />
            
            <div className="flex  bg-[#E9FF7A] rounded-full p-2">
                <FiSearch className="w-6 h-6 text-[#051118]" />
            </div>
        </form>
    </div>
  )
}
