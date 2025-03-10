"use client";

import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/useCountdown/useCountdown";
import { seconds } from "@/utils/timeUtils/timeUtils";
import { FC, useEffect } from "react";

export interface CounterProps {
    onReset: () => void;
}

const Counter: FC<CounterProps> = ({ onReset }) => {
    const [count, { startCountdown, resetCountdown }] = useCountdown({
        countStart: 60, // 60 seconds
        intervalMs: seconds(1),
    });

    useEffect(() => {
        startCountdown();
    }, []);

    const handleResendClick = () => {
        resetCountdown();
        startCountdown();
        onReset();
    };

    const isFinished = count === 0;

    return (
        <div className="mt-9 mb-16 flex min-h-9 w-full items-center justify-center">
            {isFinished ? (
                <Button
                    type="button"
                    variant="ghost"
                    onClick={handleResendClick}
                >
                    Resend
                </Button>
            ) : (
                <p className="text-gray-400">Resend code in {count}</p>
            )}
        </div>
    );
};

export default Counter;
