import { ProviderWrapper as CountersProviderWrapper } from "contexts/CountersContext.jsx";
import App from "components/App/App.js";

const AppLoader= () => {
  
  return (
    <CountersProviderWrapper >
        <App /> 
    </CountersProviderWrapper >
  )
}

export default AppLoader