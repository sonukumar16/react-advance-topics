import React from 'react'
import DocumentTitleOne from "./components/DocTitleOne";
import DocumentTitleTwo from "./components/DocTitleTwo";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import UserForm from "./components/UserForm";


function CustomHook() {
    return (
        <div>
          {/*  <DocumentTitleOne /> */}
          {/*  <DocumentTitleTwo /> */}
           <CounterOne /> 
           <CounterTwo /> 
           <hr/>
           <UserForm />
        </div>
    )
}

export default CustomHook;
