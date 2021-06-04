import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

//
import { CancelProduct } from "../Elements";

const AddFolder = ({ onAddList }) => {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isDate, setDate] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [img, setImg] = useState("");
  const [numberOfStuff, setNumberOfStuff] = useState("");
  const [inputColor, setInputColor] = useState("");
  const [inputSize, setInputSize] = useState("");
  const [inputWeigth, setInputWeigth] = useState("");

  const date = new Date().toLocaleString();

  const onClose = () => {
    setShowForm(false);
    setInputValue("");
    setInputDescription("");
    setDate("");
    setImg("");
    setInputColor("");
    setInputSize("");
    setInputWeigth("");
    setNumberOfStuff("");
  };
  const addList = () => {
    if (!inputValue) {
      alert("The title is empty");
      return;
    } else if (!inputDescription) {
      alert("The description is empty");
      return;
    }
    setisLoading(true);
    axios
      .post("http://localhost:3001/lists", {
        name: inputValue,
        description: inputDescription,
        date: isDate,
        img: img,
        number: numberOfStuff,
        color: inputColor,
        size: inputSize,
        weigth: inputWeigth,
      })
      .then(({ data }) => {
        const lostObj = { ...data };

        onAddList(lostObj);
        onClose();
      })
      .catch(() => {
        alert("Error...");
      })
      .finally(() => {
        setisLoading(false);
      });
  };
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        maxWidth: "1130px",
        width: "100%",
      },
    },

    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      width: "300px",
    },
  }));
  const classes = useStyles();

  return (
    <div className="add-list">
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => {
          setShowForm(!showForm);
          setDate(date);
          setInputValue("");
          setInputDescription("");
          setImg("");
        }}
      >
        Add item...
      </Button>

      {showForm && (
        <div className="add-list__form">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Image URL"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Name"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Description"
                  value={inputDescription}
                  onChange={(e) => setInputDescription(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Number of stuff"
                  value={numberOfStuff}
                  onChange={(e) => setNumberOfStuff(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Color"
                  value={inputColor}
                  onChange={(e) => setInputColor(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Size"
                  value={inputSize}
                  onChange={(e) => setInputSize(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  label="Weigth"
                  value={inputWeigth}
                  onChange={(e) => setInputWeigth(e.target.value)}
                />

                <TextField
                  className="date"
                  id="standard-basic"
                  label="date"
                  value={"Added: " + isDate}
                  disabled
                />
              </form>
            </CardContent>
          </Card>
          <div onClick={onClose} className="add-list__button-close">
            <CancelProduct />
          </div>

          {isLoading ? (
            <button
              onClick={addList}
              className="add-list__button buttonAdd buttonAddLoad"
              disabled
            >
              Loading...
            </button>
          ) : (
            <button onClick={addList} className="add-list__button buttonAdd">
              Add
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AddFolder;
