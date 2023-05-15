import { Provider } from "react-redux"
import { store } from "./src/redux/store"
import App from "./src/App"

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
  
}
