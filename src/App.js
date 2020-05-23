import React, { Component } from "react";

import Lifecycle from "./components/Lifecycle/ComponentA";
import Refs from "./components/Refs";
import FoucsInputRef from "./components/Refs/FocusInput";
import FRParentInput from "./components/Refs/FRParentInput";
import Portal from "./components/Portal";
import ErrorBoundary from "./components/ErrorBoundary";
import WithoutHoc from "./components/Hoc/WithoutHoc";
import Hoc from "./components/Hoc";
import RenderProps from "./components/RenderProps";
import Context from "./components/Context";
import ContextType from "./components/Context/ContextType";

/*************** Hooks ***************/
// state-hooks
import HookCounter from "./components/Hooks/state-hooks/Counter";
import HookCounterTwo from "./components/Hooks/state-hooks/CounterTwo";
import ObjectWithHook from "./components/Hooks/state-hooks/ObjectWithHook";
import ArrayWithHook from "./components/Hooks/state-hooks/ArrayWithHook";

// effect-hooks
import CounterOneEffect from "./components/Hooks/effect-hooks/CounterOneEffect";
import MouseEffect from "./components/Hooks/effect-hooks/MouseEffect";
import MouseContainer from "./components/Hooks/effect-hooks/MouseContainer";
import IntervalHookCounter from "./components/Hooks/effect-hooks/IntervalHookCounter";
import DataFetching from "./components/Hooks/effect-hooks/DataFetching";

// context-hooks
import ContextHook from "./components/Hooks/context";

// reducer-hooks
import ReducerHook from "./components/Hooks/reducer";
import ReducerWithContext from "./components/Hooks/reducer/components";
import DataFetchingOne from "./components/Hooks/reducer/data-fetching/DataFetchingOne";
import DataFetchingTwo from "./components/Hooks/reducer/data-fetching/DataFetchingTwo";

// callback-hooks
import CallbackHook from "./components/Hooks/callback-hook"

// memo-hooks
import MemoHook from "./components/Hooks/memo-hook";

// useRef-hooks
import UseRefHook from "./components/Hooks/ref-hooks/RefHooks";

//custom-hooks
import CustomHook from "./components/Hooks/custom-hooks";

//import "./App.css";

class App extends Component {  
  render() {
    return (
      <div className="App">
        {/* <Lifecycle /> */}
        {/* <Refs /> */}
        {/*  <FoucsInputRef /> */}
        {/*  <FRParentInput /> */}
        {/*   <Portal /> */}
        {/* <ErrorBoundary /> */}
        {/* <WithoutHoc /> */}
        {/* <Hoc /> */}
        {/* <RenderProps /> */}
        {/*  <Context /> */}
        {/* <ContextType /> */}

        {/*********** Hooks*************/}
        {/**** State - Hooks ****/}
        {/* <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <ObjectWithHook /> */}
        {/* <ArrayWithHook /> */}

        {/**** Effect - Hooks ****/}
        {/* <CounterOneEffect /> */}
        {/* <MouseEffect /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalHookCounter /> */}
        {/* <DataFetching /> */}

        {/**** Context - Hooks ****/}
        {/* <ContextHook /> */}

        {/**** Reducer - Hooks ****/}
        {/* <ReducerHook /> */}
        {/* <ReducerWithContext /> */}
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}

        {/* <CallbackHook /> */}
        {/* <MemoHook /> */}
        {/* <UseRefHook /> */}

        <CustomHook />
      </div>
    );
  }
}

export default App;
