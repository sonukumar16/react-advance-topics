# What is useReducer ?
    * It is a hook to manage the state in React.
    * An alternative to useState
    * useState is built using useReducer, so useReducer is more primitive than useState
    * useReducer is related to reducer functions
    * useReducer(reducer, initialState)
    * reducer(currentState, action) and returns newState & dispatch

 # Diff and usage of useState and useReducer


*********************************************************************************************
*    Scenario                   |      useState                 |    useReducer             |
* ------------------------------|-------------------------------|---------------------------|
*   Types of State              | Number, String, Boolean       |    Object, Array          |
*                               |                               |                           |  
*  Number of state transitions  |    One or Two                 |     Too Many              |
*                               |                               |                           | 
*                               |                               |                           | 
*  Related state Transitions?   |         No                    |      Yes                  |
*                               |                               |                           |
*  Business Logic               |    No business logic          |  Complex business logic   |
*                               |                               |                           |
*  Local vs global              |       Local                   |        Global             |
*                               |                               |                           |
* *******************************************************************************************
