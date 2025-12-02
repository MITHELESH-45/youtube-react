import { useEffect, useRef } from "react";

const useYoutubeSuggestions = (query, onSuccess) => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!query) return;

    const callbackName =
      "yt_cb_" + Date.now() + "_" + Math.floor(Math.random() * 100000);

    const cleanup = () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      delete window[callbackName];
    };

    window[callbackName] = (data) => {
      const suggestions = Array.isArray(data?.[1])
        ? data[1].filter((item) => typeof item === "string")
        : [];

      onSuccess(suggestions);
      cleanup();
    };

    const script = document.createElement("script");

    // ✅ IMPORTANT FIX HERE
    script.src = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(
      query
    )}&callback=${callbackName}`;

    script.onerror = cleanup;

    scriptRef.current = script;
    document.body.appendChild(script);

    return cleanup;
  }, [query]);
};

export default useYoutubeSuggestions;
