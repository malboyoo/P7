import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <div className={`${styles.appContainer} flex-col flex-fill`}>
        <Header />
        <Routing />
      </div>
      <Footer />
    </>
  );
}

export default App;
