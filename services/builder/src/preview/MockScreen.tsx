import { MockCard } from "./MockCard";

export function MockScreen() {
    const arr = Array.from({ length: 10 });
    return (
        <div className="flex flex-col gap-2">
            {arr.map((_, idx) => <MockCard key={idx} />)}
        </div>
    )
}