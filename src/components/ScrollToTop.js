import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const changedPage = prevPathname.current !== pathname;
    prevPathname.current = pathname;

    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        // Jump straight to the anchor when arriving from another page;
        // only animate for in-page hash changes.
        target.scrollIntoView({
          behavior: changedPage ? "instant" : "smooth",
          block: "start",
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
