import "./NewCollections.css";
//import new_collections from "../Assets/new_collections";
import Items from "../Items/Items";
import { useState } from "react";
import { useEffect } from "react";

function NewCollections() {
  // connect to API and database
  const [new_collections, setNew_collection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollection")
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);
  return (
    <section className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="collection">
        {new_collections.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default NewCollections;
