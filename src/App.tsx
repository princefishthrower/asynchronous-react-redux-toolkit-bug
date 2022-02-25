import createStore from "./redux/store";
import { Provider } from "react-redux";
import InnerComponent from "./components/InnerComponent";

export default function App() {
  const store = createStore();
  return (
    <Provider store={store}>
      <InnerComponent />
    </Provider>
  );
}
