import { Api } from "sst/node/api";

const App = () => {
  return (
    <div className="container">
      <h2>SST Auth Example</h2>
      <div>
        <a
          href={`https://6xbd93xgm2.execute-api.us-west-2.amazonaws.com/googleAuth/google/authorize`}
          rel="noreferrer"
        >
          <button>Sign in with Google</button>
        </a>
      </div>
    </div>
  );
};

export default App;
