import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";

export default function SingleProduct({ activeItem }) {
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    button: {
      margin: 10,
    },
    link: {
      color: "white",
      textDecoration: "none",
    },
  });
  const classes = useStyles();

  return (
    <div className="sidebar">
      <ButtonGroup
        className={classes.button}
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button>
          <Link className={classes.link} to="/">
            Back
          </Link>
        </Button>
      </ButtonGroup>
      {activeItem ? (
        <Card className={classes.root}>
          <>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="350"
              image={activeItem.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Name:
              </Typography>

              <Typography gutterBottom variant="h5" component="h2">
                {activeItem.name}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                Description
              </Typography>
              <Typography>{activeItem.description}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Number
              </Typography>
              <Typography>{activeItem.number}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Color
              </Typography>
              <Typography>{activeItem.color}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Size
              </Typography>
              <Typography>{activeItem.size}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Weigth
              </Typography>
              <Typography>{activeItem.weigth}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Added: {activeItem.date}
              </Typography>
            </CardContent>
          </>
        </Card>
      ) : (
        "load"
      )}
    </div>
  );
}
