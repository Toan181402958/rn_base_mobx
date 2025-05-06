import { NativeModules } from "react-native";
import Reactotron from "reactotron-react-native";
let scriptHostName = "localhost";
if(__DEV__) {
    const scriptURL = NativeModules.SourceCode.scriptURL;
    scriptHostName = scriptURL.split("://")[1].split(":")[0];
}

// const reactotron = Reactotron.configure({host: scriptHostName})
// .use(react)