import smallScreenImg from "@images/auth/small-screen-otp.png";
import Image from "next/image";
import { FC } from "react";
import OTPForm from "./_components/form";
import { Suspense } from "react";

const SigninOTPPage: FC = () => {
    return (
        <div className="flex w-full max-w-[28.75rem] flex-col p-1">
            <h1 className="text-3xl font-bold">
                Enter the 6-digit code we emailed you
            </h1>

            <Image
                src={smallScreenImg}
                alt="green crypto crystal"
                className="mt-4 h-[12.5rem] w-[12.5rem] self-center object-cover lg:hidden"
                width={200}
                height={200}
                priority
            />

            <Suspense>
                <OTPForm />
            </Suspense>
        </div>
    );
};

export default SigninOTPPage;
