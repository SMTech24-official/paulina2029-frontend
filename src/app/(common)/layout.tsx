import Navbar from "@/components/shared/Navbar/Navbar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";
import { Footer } from "antd/es/layout/layout";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <Navbar />
            {children}
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default layout;