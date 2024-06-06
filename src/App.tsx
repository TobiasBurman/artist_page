import { Container } from "@mui/material";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import MyContent from "./components/MyContent";
import ContactInfo from "./components/ContactInfo";
import { GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            minHeight: "100vh",
            background: "linear-gradient(to bottom, #010101, #1d263d)"
          },
          html: { margin: 0, padding: 0, height: "100%" },
        }}
      />

      <Container sx={{ width: "100vw" }}>
        <Header />
        <LandingPage />
        <MyContent />
        <ContactInfo />
      </Container>
    </>
  );
}

export default App;
