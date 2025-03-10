import AppleLogoIcon from "@/components/icons/appleLogo";
import FacebookLogoIcon from "@/components/icons/facebookLogo";
import GoogleLogoIcon from "@/components/icons/googleLogo";
import XLogoIcon from "@/components/icons/xLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FC } from "react";

const SigninWithEmailPage: FC = () => {
    return (
        <div className="flex w-full max-w-[28.75rem] flex-col p-1">
            <p className="mb-6 text-xl">
                Welcome to{" "}
                <span className="text-primary-500 font-bold">ezeX</span>
            </p>

            <h1 className="text-3xl font-bold">
                Sign in or Create your account
            </h1>

            <label htmlFor="email" className="mt-9 mb-4">
                Enter your username or email address
            </label>

            <Input id="email" placeholder="Username or email address" />

            <Button size="lg" className="mt-8">
                Continue
            </Button>

            <span className="my-8 self-center text-gray-500">OR</span>

            <div className="mb-8 flex w-full items-center justify-between">
                <Button size="lg" color="white" className="w-full max-w-60">
                    <GoogleLogoIcon />
                    Sign in with Google
                </Button>
                <div className="flex items-center gap-2">
                    <Button color="white" size="icon">
                        <XLogoIcon className="size-6" />
                    </Button>
                    <Button color="white" size="icon">
                        <FacebookLogoIcon className="size-6" />
                    </Button>
                    <Button color="white" size="icon">
                        <AppleLogoIcon className="size-7" />
                    </Button>
                </div>
            </div>

            <p className="text-sm">
                By creating an account you certify that you are over the age of
                18 and agree to the{" "}
                <Link className="text-primary-500" href="#">
                    Privacy Policy
                </Link>
            </p>
        </div>
    );
};

export default SigninWithEmailPage;
