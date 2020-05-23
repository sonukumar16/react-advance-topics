import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Title ${count}`;
  }, [count]);
}

export default useDocumentTitle;
