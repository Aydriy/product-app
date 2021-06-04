import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  root: {
    minWidth: 275,
    maxWidth: 600,
    width: "100%",
  },
  input: {
    width: "100%",
    margin: "5px 0",
  },
  pos: {
    marginBottom: 12,
    display: "flex",
  },
  button: {
    float: "right",
    margin: 10,
  },
}));

export default function PopupItem({
  item,
  activeItem,
  onEditTitle,
  onEditDescription,
  onEditImg,
  onEditNumberOfStuff,
  onEditColor,
  onEditSize,
  onEditWeigth,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open && activeItem === item.id}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <form className={classes.root} noValidate autoComplete="off">
                {/* Image */}

                <TextField
                  className={classes.input}
                  id="standard-read-only-input"
                  label="Img URL"
                  value={item.img}
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  onClick={() => {
                    const newImg = window.prompt("Img URL change", item.img);
                    if (newImg) {
                      onEditImg(item.id, newImg);
                      axios
                        .patch("http://localhost:3001/lists/" + item.id, {
                          img: newImg,
                        })
                        .catch(() => {
                          alert("Error!");
                        });
                    }
                  }}
                />
                {/* Name */}
                <TextField
                  className={classes.input}
                  id="standard-read-only-input"
                  label="Name"
                  value={item.name}
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  onClick={() => {
                    const newTitle = window.prompt("Name change", item.name);
                    if (newTitle) {
                      onEditTitle(item.id, newTitle);
                      axios
                        .patch("http://localhost:3001/lists/" + item.id, {
                          name: newTitle,
                        })
                        .catch(() => {
                          alert("Error!");
                        });
                    }
                  }}
                />
                {/* Description */}
                <TextField
                  className={classes.input}
                  id="standard-read-only-input"
                  label="Description"
                  value={item.description}
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  onClick={() => {
                    const newDescription = window.prompt(
                      "Description change",
                      item.description
                    );
                    if (newDescription) {
                      onEditDescription(item.id, newDescription);
                      axios
                        .patch("http://localhost:3001/lists/" + item.id, {
                          description: newDescription,
                        })
                        .catch(() => {
                          alert("Error!");
                        });
                    }
                  }}
                />
                {/* Number of stuff */}
                <TextField
                  className={classes.input}
                  id="standard-read-only-input"
                  label="Number"
                  value={item.number}
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  onClick={() => {
                    const newNumber = window.prompt(
                      "Number change",
                      item.number
                    );
                    if (newNumber) {
                      onEditNumberOfStuff(item.id, newNumber);
                      axios
                        .patch("http://localhost:3001/lists/" + item.id, {
                          number: newNumber,
                        })
                        .catch(() => {
                          alert("Error!");
                        });
                    }
                  }}
                />
                {/* Color */}
                <TextField
                  className={classes.input}
                  id="standard-read-only-input"
                  label="Color"
                  value={item.color}
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  onClick={() => {
                    const newColor = window.prompt("Color change", item.color);
                    if (newColor) {
                      onEditColor(item.id, newColor);
                      axios
                        .patch("http://localhost:3001/lists/" + item.id, {
                          color: newColor,
                        })
                        .catch(() => {
                          alert("Error!");
                        });
                    }
                  }}
                />
                {/* Size */}
                <TextField
                  className={classes.input}
                  id="standard-read-only-input"
                  label="Size"
                  value={item.size}
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  onClick={() => {
                    const newSize = window.prompt("Size change", item.size);
                    if (newSize) {
                      onEditSize(item.id, newSize);
                      axios
                        .patch("http://localhost:3001/lists/" + item.id, {
                          size: newSize,
                        })
                        .catch(() => {
                          alert("Error!");
                        });
                    }
                  }}
                />
                {/* Weigth */}
                <TextField
                  className={classes.input}
                  id="standard-read-only-input"
                  label="Weigth"
                  value={item.weigth}
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  onClick={() => {
                    const newWeigth = window.prompt(
                      "Weigth change",
                      item.weigth
                    );
                    if (newWeigth) {
                      onEditWeigth(item.id, newWeigth);
                      axios
                        .patch("http://localhost:3001/lists/" + item.id, {
                          weigth: newWeigth,
                        })
                        .catch(() => {
                          alert("Error!");
                        });
                    }
                  }}
                />
              </form>
            </CardContent>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              Done!
            </Button>
          </Card>
        </Fade>
      </Modal>
    </Box>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import { Box } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import axios from "axios";

// //
// import { Pen } from "../Elements.jsx";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   root: {
//     minWidth: 275,
//     maxWidth: 600,
//     width: "100%",
//   },
//   input: {
//     width: "100%",
//     margin: "5px 0",
//   },
//   pos: {
//     marginBottom: 12,
//     display: "flex",
//   },
//   button: {
//     float: "right",
//     margin: 10,
//   },
// }));

// export default function PopupItem({
//   item,
//   activeItem,
//   onEditTitle,
//   onEditDescription,
//   onEditImg,
//   onEditNumberOfStuff,
//   onEditColor,
//   onEditSize,
//   onEditWeigth,
// }) {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const TextFields = ({ items, data, setEdit, name, changeName }) => {
//     return (
//       <TextField
//         className={classes.input}
//         id="standard-read-only-input"
//         label={name}
//         value={items}
//         variant="filled"
//         InputProps={{
//           readOnly: true,
//         }}
//         onClick={() => {
//           const newList = window.prompt(changeName, items);
//           if (newList) {
//             setEdit(item.id, newList);
//             axios
//               .patch("http://localhost:3001/lists/" + item.id, {
//                 img: newList,
//               })
//               .catch(() => {
//                 alert("Error!");
//               });
//           }
//         }}
//       />
//     );
//   };

//   return (
//     <Box>
//       <Button
//         type="button"
//         variant="contained"
//         color="primary"
//         onClick={handleOpen}
//       >
//         Edit
//       </Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={open && activeItem == item.id}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <Card className={classes.root} variant="outlined">
//             <CardContent>
//               <form className={classes.root} noValidate autoComplete="off">
//                 {/* Image */}
//                 <TextFields
//                   items={item.img}
//                   setEdit={onEditImg}
//                   data={`${item.img}`}
//                   name={"Image"}
//                   changeName={"Change Image URL"}
//                 />
//                 {/* Name */}
//                 <TextFields
//                   items={item.name}
//                   setEdit={onEditTitle}
//                   data={`${item.name}`}
//                   name={"Name"}
//                   changeName={"Change name value"}
//                 />
//                 {/* Description */}
//                 <TextFields
//                   items={item.description}
//                   setEdit={onEditDescription}
//                   data={`${item.description}`}
//                   name={"Description"}
//                   changeName={"Change description value"}
//                 />
//                 {/* Number of stuff */}
//                 <TextFields
//                   items={item.number}
//                   setEdit={onEditNumberOfStuff}
//                   data={`${item.number}`}
//                   name={"Number"}
//                   changeName={"Change number value"}
//                 />
//                 {/* Color */}
//                 <TextFields
//                   items={item.color}
//                   setEdit={onEditColor}
//                   data={`${item.color}`}
//                   name={"Color"}
//                   changeName={"Change Color value"}
//                 />
//                 {/* Size */}
//                 <TextFields
//                   items={item.size}
//                   setEdit={onEditSize}
//                   data={`${item.size}`}
//                   name={"Size"}
//                   changeName={"Change size value"}
//                 />
//                 {/* Weigth */}
//                 <TextFields
//                   items={item.weigth}
//                   setEdit={onEditWeigth}
//                   data={`${item.weigth}`}
//                   name={"Weigth"}
//                   changeName={"Change weigth value"}
//                 />
//               </form>
//             </CardContent>
//             <Button
//               className={classes.button}
//               variant="contained"
//               color="primary"
//               onClick={handleClose}
//             >
//               Done!
//             </Button>
//           </Card>
//         </Fade>
//       </Modal>
//     </Box>
//   );
// }
