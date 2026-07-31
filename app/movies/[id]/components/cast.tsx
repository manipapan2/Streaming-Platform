interface CastProps {
    imageUrl: string;
    position: string;
    name: string;
}

export default function Cast({imageUrl, position, name}: CastProps) {
    return (
        <div className="flex flex-col items-center mx-5">
            <div className="w-24 rounded-full aspect-square bg-secondary"></div>
            <span className="mt-2 opacity-50">{position}</span>
            <span className="mt-3">{name}</span>
        </div>
    )
}