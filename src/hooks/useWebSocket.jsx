import { useEffect, useRef, useCallback } from "react";

const useWebSocket = (url) => {
  const socketRef = useRef(null);

  const closeWebSocket = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.close();
      console.log("WebSocket connection closed.");
    }
  }, []);

  const setOnMessageHandler = useCallback((callback) => {
    socketRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      callback(message);
    };
  }, []);

  const sendMessage = useCallback((message) => {
    if (socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(message));
    } else {
      console.error("Error: WebSocket connection not open.");
    }
  }, []);

  useEffect(() => {
    socketRef.current = new WebSocket(url);
  }, []);

  return { sendMessage, setOnMessageHandler, closeWebSocket };
};

export default useWebSocket;
