"use client";
import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import Link from "next/link";
import { FC } from "react";
import Counter from "./counter";

const OTPForm: FC = () => {
    const handleResendOTP = () => {};

    return (
        <form className="flex w-full flex-col items-center">
            <InputOTP
                maxLength={6}
                inputMode="numeric"
                pattern={REGEXP_ONLY_DIGITS}
            >
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                </InputOTPGroup>
                <InputOTPGroup>
                    <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPGroup>
                    <InputOTPSlot index={2} />
                </InputOTPGroup>

                <InputOTPSeparator className="text-primary-600 mx-6" />

                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPGroup>
                    <InputOTPSlot index={4} />
                </InputOTPGroup>
                <InputOTPGroup>
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>

            <Link href="mailto:test@gmail.com" className="w-full">
                <Button size="lg" className="mt-8 w-full" type="button">
                    Open Email
                </Button>
            </Link>

            <Counter onReset={handleResendOTP} />

            <Link href="/auth/sign-in/email">
                <Button variant="link" type="button">
                    Go back
                </Button>
            </Link>
        </form>
    );
};

export default OTPForm;
