import { MockCard } from "./MockCard";

export function MockScreen() {
    const arr = Array.from({ length: 35 });
    return (
        <div className="flex flex-wrap gap-4">
            {arr.map((_, idx) => <MockCard key={idx} />)}
        </div>
    )
}