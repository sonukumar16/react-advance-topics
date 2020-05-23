1. Added in react version 16.8
2. Don't use with class component
3. use state without class component

# Why Hook (Overcome problems with class)

* Reason Set- 1
    1. Understand how *this* keyword works in javascript.
    2. Remember to bind event handlers in class components
    3. Class don't minify very well and make hot reloading very unreliable
* Reason Set- 2
    1. There is no way to reuse stateful component logic
    2. HOC and Render props do address this problem
    3. Makes the code harder to follow
    4. There is need a to share stateful logic in better way.
* Reason Set- 3
    1. Create components for complex scenarios such as data fetching and subscribing to events
    2. Related code is not organized at one place 
    Ex: Data fetching - In componentDidMount and componentDidUpdate
    Ex: Event listeners - In componentDidMount and componentWillUnmount (Unsubscribe)
    Because of stateful logic - Cannot break components into smaller ones
