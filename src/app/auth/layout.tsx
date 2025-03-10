import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "Ezex - Sign-In",
    description: "Created by Pactus Team",
};

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="main-container flex min-h-screen items-center gap-x-20 px-4 py-6">
            <div className="flex h-full w-full">layout</div>
            <div className="flex h-full w-full">{children}</div>
        </main>
    );
};

export default AuthLayout;
