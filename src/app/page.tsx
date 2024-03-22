'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openerBool, setOpenerBool] = useState<boolean>(true);

  const handleOpenerBoolChange = () => {
    setOpenerBool(!openerBool);
  }

  return (
    <div>
      <div className="min-h-screen bgLogin">
        <img src="" alt="" />

        {
          openerBool ? ( 
            // First Ternary Return Statement
          <div className="min-h-screen bg-black opacity-90" onClick={handleOpenerBoolChange}>
          </div>
          ) : (
            // Second Ternary Return Statement
          <div className="grid grid-cols-[45%_55%]">

            {/* Column 1 (Login Side) */}
            <div className="min-h-screen bg-black opacity-90">
            </div>

            {/* Column 2 (Nothing) */}
            <div>

            </div>

          </div>
          )
        }
      </div>
    </div>

  );
}
