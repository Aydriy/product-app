import React from "react";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
//
import AddProduct from "./AddProduct.jsx";
import ProductItem from "./ProductItem.jsx";

export default function Sidebar({
  lists,
  setActiveItem,
  setLists,
  activeItem,
  onAddList,
  onEditTitle,
  onEditDescription,
  onEditImg,
  onEditNumberOfStuff,
  onEditColor,
  onEditSize,
  onEditWeigth,
}) {
  let history = useHistory();

  useEffect(() => {
    const listId = history.location.pathname.split("lists/")[1];
    if (lists) {
      const list = lists.find((list) => list.id === Number(listId));
      setActiveItem(list);
    }
  }, [history.location.pathname]);

  return (
    <div className="sidebar">
      <div className="container">
        <div className="sidebar__menu">
          <Container className="sidebar__menu_list">
            {lists ? (
              <ProductItem
                onEditTitle={onEditTitle}
                onEditDescription={onEditDescription}
                onEditImg={onEditImg}
                isRemovable={true}
                onRemove={(id) => {
                  const newLists = lists.filter((item) => item.id !== id);
                  setLists(newLists);
                }}
                items={lists}
                onClickItem={(list) => {
                  setActiveItem(list);
                  history.push(`/${list.id}`);
                }}
                checkActiveItem={(list) => {
                  setActiveItem(list.id);
                }}
                activeItem={activeItem}
                onEditNumberOfStuff={onEditNumberOfStuff}
                onEditColor={onEditColor}
                onEditSize={onEditSize}
                onEditWeigth={onEditWeigth}
              />
            ) : (
              "Loading..."
            )}

            <AddProduct onAddList={onAddList} />
          </Container>
        </div>
      </div>
    </div>
  );
}
