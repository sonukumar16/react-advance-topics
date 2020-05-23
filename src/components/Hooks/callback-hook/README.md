# What?
* useCallback is a hook that will return a memoized version of the callback function that only
  changes if one of the dependencies has changed.

# Why?
*  It is when passing callbacks to optimized child components that rely on reference quality to prevent 
    unnecessary renders.

    - optimized child components means child should have implemented by React.memo.
