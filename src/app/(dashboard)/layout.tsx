"use client"

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const layout = ({ children }: { children: ReactNode }) => {
    return (

        <div className=" flex h-full">
            <div className="w-full">
                <SessionProvider>
                    {children}
                </SessionProvider>
            </div>
        </div>
    );
};

export default layout;