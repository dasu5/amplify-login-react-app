import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <h1> React Amplify App</h1>
    </div>
  );
}

export default withAuthenticator(App);
