import {
  Box,
  Typography,
  Container,
  Slider,
  Button,
  CssBaseline,
  Paper,
  IconButton,
  createTheme,
  ThemeProvider,
  FormGroup,
  SvgIcon,
} from "@mui/material";
import React from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./App.css";
import CheckboxComp from "./components/Checkbox";
import { useState, useRef } from "react";
import copy from "copy-to-clipboard";
import Svg from "./components/Svg";

function App() {
  const [value, setValue] = useState(0);
  const [copyText, setCopyText] = useState("");
  const [isChecked, setIsChecked] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const { uppercase, lowercase, numbers, symbols } = isChecked;
  const ref = useRef(null);
  const uppercaseCharcode = getCharArray(65, 90);
  const lowercaseCharcode = getCharArray(97, 122);
  const numbersCharcode = getCharArray(48, 57);
  const symbolsCharcode = getCharArray(33, 47)
    .concat(getCharArray(58, 64))
    .concat(getCharArray(91, 96))
    .concat(getCharArray(123, 126));

  function handleChange(e) {
    setIsChecked({
      ...isChecked,
      [e.target.name]: e.target.checked,
    });
  }

  function handleClick() {
    const password = generatePassword(uppercase, lowercase, numbers, symbols);
    password !== undefined && value !== 0
      ? (ref.current.innerText = password)
      : "";
    setCopyText(password);
  }

  function getCharArray(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }

  function generatePassword(uppercase, lowercase, numbers, symbols) {
    let passAsChar = [];

    if (uppercase) passAsChar = passAsChar.concat(uppercaseCharcode);
    if (lowercase) passAsChar = passAsChar.concat(lowercaseCharcode);
    if (numbers) passAsChar = passAsChar.concat(numbersCharcode);
    if (symbols) passAsChar = passAsChar.concat(symbolsCharcode);
    if (passAsChar.length === 0) {
      return;
    }
    const generatedPassword = [];
    for (let i = 0; i < value; i++) {
      let char = String.fromCharCode(
        passAsChar[Math.floor(Math.random() * passAsChar.length)]
      );
      generatedPassword.push(char);
    }
    return generatedPassword.join("");
  }

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontSize: 16,
      fontFamily: ["Roboto Slab", "serif"].join(),
    },
  });

  return (
    <div className="App">
      <CssBaseline />

      <Paper square className="one">
        <Container className="container">
          <Box
            className="password"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              wordBreak: "break-all",
            }}
          >
            <Typography
              ref={ref}
              sx={{
                letterSpacing: 1,
                fontSize: 30,
                color: "gray",
              }}
            >
              P4$5W0rD!
            </Typography>

            <IconButton onClick={() => copy(copyText)}>
              <ContentCopyRoundedIcon sx={{ color: "success.light" }} />
            </IconButton>
          </Box>
        </Container>
      </Paper>

      <Paper square className="two">
        <Container className="container second">
          <Box>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  letterSpacing: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Character Length</Typography>
                <Typography
                  className="passlength"
                  sx={{ fontSize: "2rem", color: "success.light" }}
                >
                  {value}
                </Typography>
              </Box>

              <Slider
                onChange={(e) => setValue(e.target.value)}
                defaultValue={1}
                valueLabelDisplay="auto"
                max={40}
                sx={{
                  color: "#100f15",
                  height: 6,
                  "& .MuiSlider-thumb": {
                    color: "#fff",
                    height: 25,
                    width: 25,
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#100f15s",
                    opacity: 1,
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "success.light",
                    opacity: 1,
                    border: "none",
                  },
                }}
              />

              <FormGroup>
                <CheckboxComp
                  name={"uppercase"}
                  value={uppercase}
                  onChange={handleChange}
                  label="Include Upperercase Letters"
                />

                <CheckboxComp
                  name={"lowercase"}
                  value={lowercase}
                  onChange={handleChange}
                  label="Include lowercase Letters"
                />

                <CheckboxComp
                  name={"numbers"}
                  value={numbers}
                  onChange={handleChange}
                  label="Include numbers"
                />

                <CheckboxComp
                  name={"symbols"}
                  value={symbols}
                  onChange={handleChange}
                  label="Include symbols"
                />
              </FormGroup>
            </ThemeProvider>

            <Box
              className="strength"
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  letterSpacing: 1,
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                STRENGTH
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Svg color={uppercase ? "#4caf50" : "none"} />
                <Svg color={lowercase ? "#4caf50" : "none"} />
                <Svg color={numbers ? "#4caf50" : "none"} />
                <Svg color={symbols ? "#4caf50" : "none"} />
              </Box>
            </Box>

            <Box mt={3} mb={2}>
              <Button
                onClick={handleClick}
                variant="contained"
                sx={{
                  backgroundColor: "success.light",
                  width: `100%`,
                  padding: "1.2em",
                  fontSize: 15,
                  color: "#24232b",
                  fontWeight: "Bold",
                  "&:hover": {
                    backgroundColor: "success.main",
                  },
                  "&:active": {
                    backgroundColor: "success.dark",
                  },
                }}
              >
                GENERATE
                <ArrowForwardIcon sx={{ marginLeft: 2, fontSize: "large" }} />
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    </div>
  );
}

export default App;
