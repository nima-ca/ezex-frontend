import { FC } from "react";
import OTPForm from "./_component/form";

const SigninOTPPage: FC = () => {
    return (
        <div className="flex w-full max-w-[28.75rem] flex-col p-1">
            <h1 className="text-3xl font-bold">
                Enter the 6-digit code we emailed you
            </h1>

            <p className="mt-5 mb-8 text-gray-300">
                Verify your email mohyedinsa@gmail.com. This helps us keep your
                account secure by verifying that it’s really you.
            </p>

            <OTPForm />
        </div>
    );
};

export default SigninOTPPage;
