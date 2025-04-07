"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { FC } from "react";
import { cn } from "@/utils/cn";

const PasswordInput: FC<React.ComponentProps<"input">> = props => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative w-full">
            <Input
                {...props}
                type={showPassword ? "text" : "password"}
                className={cn("pr-10", props.className)}
            />
            <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute top-1/2 right-2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </Button>
        </div>
    );
};

export default PasswordInput;
