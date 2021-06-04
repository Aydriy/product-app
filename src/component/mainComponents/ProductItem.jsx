import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import axios from "axios";
import { Box } from "@material-ui/core";
//
import PopupItem from "./PopupItem";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "100%",
    marginTop: "20px",
  },
});
const ProductItem = ({
  items,
  isRemovable,
  onClick,
  onRemove,
  onClickItem,
  activeItem,
  onEditTitle,
  onEditDescription,
  onEditImg,
  checkActiveItem,
  onEditNumberOfStuff,
  onEditColor,
  onEditSize,
  onEditWeigth,
}) => {
  // remove product from list
  const removeList = (item) => {
    if (window.confirm("Delete?")) {
      axios.delete("http://localhost:3001/lists/" + item.id).then(() => {
        onRemove(item.id);
      });
    }
  };

  const classes = useStyles();

  return (
    <Box
      onClick={onClick}
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      {items.map((item, index) => (
        <Card
          className={classNames(item.class, classes.root, {
            active: item.active,
          })}
          key={index}
        >
          <CardActionArea
            onClick={onClickItem ? () => onClickItem(item) : null}
          >
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={item.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Added: {item.date}
              </Typography>
              <Typography>{item.description}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            onClick={checkActiveItem ? () => checkActiveItem(item) : null}
          >
            {/* popup component */}
            <PopupItem
              items={items}
              item={item}
              activeItem={activeItem}
              onEditTitle={onEditTitle}
              onEditDescription={onEditDescription}
              onEditImg={onEditImg}
              onEditNumberOfStuff={onEditNumberOfStuff}
              onEditColor={onEditColor}
              onEditSize={onEditSize}
              onEditWeigth={onEditWeigth}
            />
            {/* remove button */}
            {isRemovable && (
              <svg
                onClick={() => removeList(item)}
                className="sidebar__menu_list_x"
                width="15"
                height="15"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="x_color"
                  d="M6.24741 5L9.73899 1.50842C9.9047 1.343 9.99791 1.11853 9.99812 0.884393C9.99832 0.650251 9.90551 0.425617 9.74009 0.259907C9.57468 0.0941973 9.35021 0.000986589 9.11606 0.000779811C8.88192 0.000573033 8.65729 0.0933872 8.49158 0.258804L5 3.75038L1.50842 0.258804C1.34271 0.0930948 1.11796 0 0.883613 0C0.649264 0 0.424514 0.0930948 0.258804 0.258804C0.0930948 0.424514 0 0.649264 0 0.883613C0 1.11796 0.0930948 1.34271 0.258804 1.50842L3.75038 5L0.258804 8.49158C0.0930948 8.65729 0 8.88204 0 9.11639C0 9.35074 0.0930948 9.57549 0.258804 9.7412C0.424514 9.90691 0.649264 10 0.883613 10C1.11796 10 1.34271 9.90691 1.50842 9.7412L5 6.24962L8.49158 9.7412C8.65729 9.90691 8.88204 10 9.11639 10C9.35074 10 9.57549 9.90691 9.7412 9.7412C9.90691 9.57549 10 9.35074 10 9.11639C10 8.88204 9.90691 8.65729 9.7412 8.49158L6.24741 5Z"
                  fill="red"
                />
              </svg>
            )}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ProductItem;
