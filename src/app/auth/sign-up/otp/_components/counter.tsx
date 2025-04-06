"use client";

import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/useCountdown/useCountdown";
import {
    DeliveryMethod,
    sendConfirmationCodeAPI,
} from "@/lib/graphql/mutations/send-confirmation-code";
import { seconds } from "@/utils/timeUtils/timeUtils";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { FC, useEffect } from "react";

export interface CounterProps {
    recipient: string;
}

const Counter: FC<CounterProps> = ({ recipient }) => {
    const [count, { startCountdown, resetCountdown }] = useCountdown({
        countStart: 2, // 60 seconds
        intervalMs: seconds(1),
    });

    useEffect(() => {
        startCountdown();
    }, []);

    const sendOTPMutation = useMutation({
        mutationFn: sendConfirmationCodeAPI,
    });

    const handleResendClick = () => {
        sendOTPMutation.mutate(
            {
                method: DeliveryMethod.EMAIL,
                recipient,
            },
            {
                onSuccess() {
                    resetCountdown();
                    startCountdown();
                },
            },
        );
    };

    const isFinished = count === 0;

    return (
        <Button
            type="button"
            variant="outline"
            disabled={!isFinished}
            onClick={handleResendClick}
            className="mt-4 mb-16 w-full"
            size="lg"
        >
            {isFinished && <span>Resend</span>}
            {!isFinished && <span>Resend code in {count}</span>}
            {sendOTPMutation.isPending && <Loader className="animate-spin" />}
        </Button>
    );
};

export default Counter;
