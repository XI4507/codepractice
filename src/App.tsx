import Ten from "./components/10";
import Eleven from "./components/11";
import Six from "./components/6";
import QueFive from "./components/queFive";
import QueFour from "./components/queFour";
import QueOne from "./components/queOne";
import QueThree from "./components/queThree";
import QueTwo from "./components/queTwo";
import RecEight from "./recursion/RecEight";
import RecFive from "./recursion/RecFive";
import RecFour from "./recursion/RecFour";
import RecSeven from "./recursion/RecSeven";
import RecSix from "./recursion/RecSix";
import RecThree from "./recursion/RecThree";
import RecNine from "./recursion/recNine";
import RecOne from "./recursion/recOne";
import RecTwo from "./recursion/recTwo";

const App = () => {
  const questionsLink =
    "https://docs.google.com/spreadsheets/d/1hXserPuxVoWMG9Hs7y8wVdRCJTcj3xMBAEYUOXQ5Xag/edit#gid=0";
  return (
    <div>
      <h1>All questions are solved using typescript</h1>
      <h4>
        Here is the list of question By{" "}
        <span style={{ color: "green" }}>Apna College</span> :{" "}
        <a href={questionsLink}>All Questions</a>
      </h4>
      <ol>
        <li>
          <QueOne />
        </li>
        <li>
          <QueTwo />
        </li>
        <li>
          <QueThree />
        </li>
        <li>
          <QueFour />
        </li>
        <li>
          <QueFive />
        </li>
        <li>
          <Six />
        </li>
        <li>
          <Ten />
        </li>
        <li>
          <Eleven />
        </li>
      </ol>
      <hr />
      <h2>Recursion Questions</h2>
      <ol>
        <li>
          <RecOne />
        </li>
        <li>
          <RecTwo />
        </li>
        <li>
          <RecThree />
        </li>
        <li>
          <RecFour />
        </li>
        <li>
          <RecFive />
        </li>
        <li>
          <RecSix />
        </li>
        <li>
          <RecSeven />
        </li>
        <li>
          <RecEight />
        </li>
        <li>
          <RecNine />
        </li>
      </ol>
    </div>
  );
};

export default App;
