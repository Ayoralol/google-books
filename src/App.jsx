import {useState} from "react";
import styles from "./App.module.scss";
import DarkModeContextProvider from "./context/DarkModeContextProvider";
import InformationContextProvider from "./context/InformationContextProvider";
import Header from "./components/Header/Header";
import SearchCont from "./containers/SearchCont/SearchCont";
import CardList from "./containers/CardList/CardList";
import Modal from "./containers/Modal/Modal";
import {useMediaQuery} from "@mui/material";

function App() {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  return (
    <>
      <DarkModeContextProvider>
        <InformationContextProvider>
          {isPortrait ? (
            <>
              <Header />
              <SearchCont />
              <CardList />
              <Modal />
            </>
          ) : (
            <>
              <SearchCont />
              <section className={styles.sect}>
                <Header />
                <CardList />
              </section>
              <Modal />
            </>
          )}
        </InformationContextProvider>
      </DarkModeContextProvider>
    </>
  );
}

export default App;
