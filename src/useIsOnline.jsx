import { useState, useEffect } from "react";

export default function useIsOnline() {
  const [isOnline, setIsOnline] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setIsOnline(!isOnline);
      setData({ name: "james" });
    }, 2000);
  }, []);

  return { isOnline, data };
}
