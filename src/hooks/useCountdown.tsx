import { useState, useEffect } from "react";

export const useCountDown = (initialCount = 3, duration = 1500) => {
  const [countdown, setCountdown] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;

    const timer = setInterval(() => {
      setCountdown((prev: number) => {
        if (prev == 1) {
          clearInterval(timer);
          setIsLoading(false);
          return 0;
        }
        return prev - 1;
      });
    }, duration);
    return () => clearInterval(timer);
  }, [countdown, isLoading]);

  return { countdown, isLoading };
};
