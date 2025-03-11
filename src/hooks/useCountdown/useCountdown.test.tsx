import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import { useCountdown } from "./useCountdown";

vitest.useFakeTimers();

describe("useCountdown()", () => {
    test("should return callable functions", () => {
        const { result } = renderHook(() =>
            useCountdown({
                countStart: 60,
                intervalMs: 500,
                isIncrement: false,
            }),
        );

        expect(result.current[0]).toBe(60);
        expect(typeof result.current[1].startCountdown).toBe("function");
        expect(typeof result.current[1].stopCountdown).toBe("function");
        expect(typeof result.current[1].resetCountdown).toBe("function");
    });

    test("should increment count", () => {
        const { result } = renderHook(() =>
            useCountdown({
                countStart: 60,
                intervalMs: 500,
                isIncrement: true,
            }),
        );

        act(result.current[1].startCountdown);
        act(() => {
            vitest.advanceTimersByTime(1000);
        });

        expect(result.current[0]).toBe(62);
    });

    test("should decrement count", () => {
        const { result } = renderHook(() =>
            useCountdown({ countStart: 60, intervalMs: 500 }),
        );

        act(result.current[1].startCountdown);
        act(() => {
            vitest.advanceTimersByTime(1000);
        });

        expect(result.current[0]).toBe(58);
    });

    test("should accept countStart", () => {
        const { result } = renderHook(() => useCountdown({ countStart: 30 }));

        expect(result.current[0]).toBe(30);
        expect(typeof result.current[1].startCountdown).toBe("function");
        expect(typeof result.current[1].stopCountdown).toBe("function");
        expect(typeof result.current[1].resetCountdown).toBe("function");
    });

    test("should accept intervalMs", () => {
        const { result } = renderHook(() =>
            useCountdown({ countStart: 60, intervalMs: 500 }),
        );

        expect(result.current[0]).toBe(60);
        expect(typeof result.current[1].startCountdown).toBe("function");
        expect(typeof result.current[1].stopCountdown).toBe("function");
        expect(typeof result.current[1].resetCountdown).toBe("function");

        act(result.current[1].startCountdown);
        act(() => {
            vitest.advanceTimersByTime(500);
        });

        expect(result.current[0]).toBe(59);
    });

    test("should stop at countStop (default: 0)", () => {
        const { result } = renderHook(() =>
            useCountdown({ countStart: 60, intervalMs: 1000 }),
        );

        expect(result.current[0]).toBe(60);
        expect(typeof result.current[1].startCountdown).toBe("function");
        expect(typeof result.current[1].stopCountdown).toBe("function");
        expect(typeof result.current[1].resetCountdown).toBe("function");

        act(result.current[1].startCountdown);
        act(() => {
            vitest.advanceTimersByTime(60 * 1000);
        });

        expect(result.current[0]).toBe(0);

        act(() => {
            vitest.advanceTimersByTime(1000);
        });

        expect(result.current[0]).toBe(0);
    });

    test("should stop at custom countStop", () => {
        const { result } = renderHook(() =>
            useCountdown({ countStart: 60, intervalMs: 1000, countStop: 30 }),
        );

        expect(result.current[0]).toBe(60);
        expect(typeof result.current[1].startCountdown).toBe("function");
        expect(typeof result.current[1].stopCountdown).toBe("function");
        expect(typeof result.current[1].resetCountdown).toBe("function");

        act(result.current[1].startCountdown);
        act(() => {
            vitest.advanceTimersByTime(30 * 1000);
        });

        expect(result.current[0]).toBe(30);

        act(() => {
            vitest.advanceTimersByTime(1000);
        });

        expect(result.current[0]).toBe(30);
    });

    test("should stop countdown", () => {
        const { result } = renderHook(() =>
            useCountdown({ countStart: 60, intervalMs: 1000 }),
        );

        expect(result.current[0]).toBe(60);
        act(result.current[1].startCountdown);
        act(() => {
            vitest.advanceTimersByTime(2000);
        });

        expect(result.current[0]).toBe(58);
        act(result.current[1].stopCountdown);
        act(() => {
            vitest.advanceTimersByTime(3000);
        });
        expect(result.current[0]).toBe(58);
    });

    test("should stop reversed countdown", () => {
        const { result } = renderHook(() =>
            useCountdown({
                countStart: 10,
                intervalMs: 1000,
                countStop: 20,
                isIncrement: true,
            }),
        );

        expect(result.current[0]).toBe(10);
        act(result.current[1].startCountdown);
        act(() => {
            vitest.advanceTimersByTime(2 * 1000);
        });

        expect(result.current[0]).toBe(12);

        act(() => {
            vitest.advanceTimersByTime(8 * 1000);
        });
        expect(result.current[0]).toBe(20);

        act(() => {
            vitest.advanceTimersByTime(3 * 1000);
        });

        expect(result.current[0]).toBe(20);
    });

    test("should reset count", () => {
        const { result } = renderHook(() =>
            useCountdown({ countStart: 60, intervalMs: 1000 }),
        );

        act(result.current[1].startCountdown);
        act(() => {
            vitest.advanceTimersByTime(1000);
        });
        act(result.current[1].stopCountdown);
        expect(result.current[0]).toBeLessThan(60);

        act(result.current[1].resetCountdown);
        expect(result.current[0]).toBe(60);
    });
});
