'use client'

import { MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({x: e.clientX, y: e.clientY});
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (

        <MousePointer2
          className="custom-cursor absolute z-50"
          fill="rgb(253, 126, 29)"
          style={{
            left: mousePosition.x - 2,
            top: mousePosition.y - 3,
          }}
        />

    );
}