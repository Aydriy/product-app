import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import Main from "./component/mainComponents/Main.jsx";
import SingleProduct from "./component/mainComponents/SingleProduct.jsx";

function App() {
  const [lists, setLists] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  // get oll list of item
  useEffect(() => {
    axios.get("http://localhost:3001/lists?_expand=id").then(({ data }) => {
      setLists(data);
    });
  }, []);
  // add list item
  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  // edit title of item
  const onEditTitle = (id, title) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        item.name = title;
      }
      return item;
    });
    setLists(newList);
  };
  // edit description of item
  const onEditDescription = (id, description) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        item.description = description;
      }
      return item;
    });
    setLists(newList);
  };
  // edit img url of item
  const onEditImg = (id, img) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        item.img = img;
      }
      return item;
    });
    setLists(newList);
  };
  // edit number of item
  const onEditNumberOfStuff = (id, number) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        item.number = number;
      }
      return item;
    });
    setLists(newList);
  };
  // edit color of item
  const onEditColor = (id, color) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        item.color = color;
      }
      return item;
    });
    setLists(newList);
  };
  // edit size of item
  const onEditSize = (id, size) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        item.size = size;
      }
      return item;
    });
    setLists(newList);
  };
  // edit weigth of item
  const onEditWeigth = (id, weigth) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        item.weigth = weigth;
      }
      return item;
    });
    setLists(newList);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {lists ? (
              <Main
                lists={lists}
                onAddList={onAddList}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                onEditTitle={onEditTitle}
                onEditDescription={onEditDescription}
                setLists={setLists}
                onEditImg={onEditImg}
                onEditNumberOfStuff={onEditNumberOfStuff}
                onEditColor={onEditColor}
                onEditSize={onEditSize}
                onEditWeigth={onEditWeigth}
              />
            ) : (
              "Loading"
            )}
          </Route>
          <SingleProduct activeItem={activeItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
