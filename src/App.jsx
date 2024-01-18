import {useState} from "react";
import styles from "./App.module.scss";
import DarkModeContextProvider from "./context/DarkModeContextProvider";
import InformationContextProvider from "./context/InformationContextProvider";
import Header from "./components/Header/Header";
import SearchCont from "./containers/SearchCont/SearchCont";
import CardList from "./containers/CardList/CardList";
import Modal from "./containers/Modal/Modal";

function App() {
  return (
    <>
      <DarkModeContextProvider>
        <InformationContextProvider>
          <Header />
          <SearchCont />
          <CardList />
          <Modal />
        </InformationContextProvider>
      </DarkModeContextProvider>
    </>
  );
}

export default App;
