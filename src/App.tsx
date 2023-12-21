import QueFour from "./components/queFour";
import QueOne from "./components/queOne";
import QueThree from "./components/queThree";
import QueTwo from "./components/queTwo";

const App = () => {
  return (
    <div>
      <h1>All questions are solved using typescript</h1>
      <QueOne />
      <QueTwo />
      <QueThree />
      <QueFour />
    </div>
  );
};

export default App;
