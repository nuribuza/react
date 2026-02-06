import {useState} from "react";
import "./Filter.css";

const items = [
    { id: 1, name:"Phone", category: "800$" },
    { id: 2, name:"Laptop", category: "450$" },
    { id: 3, name:"Keyboard", category: "70$" },
    { id: 4, name:"Mouse", category: "50$" },
];

function Filter() {
    const [search, setSearch] = useState("");

   const filteredItems = items.filter((item) =>
     item.name.toLowerCase().includes(search.toLowerCase()) ||
     item.category.toLowerCase().includes(search.toLowerCase())
);


    return (
    <div className="container"> { }
      <input type="text" 
        placeholder="Search..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} // 
      />
      <ul> {}
        {filteredItems.length > 0 ? ( 
          filteredItems.map((item) => ( 
            <li style={{ color: "purple" }} key={item.id}>
              
              {item.name} - {item.category}
              
            </li>
          ))
        ) : ( 
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default Filter;