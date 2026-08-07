interface CastProps {
    imageUrl: string;
    position: string;
    name: string;
}

export default function Cast({imageUrl, position, name}: CastProps) {
    return (
        <div className="flex flex-col items-center mx-5">
            <div className="w-24 rounded-full aspect-square bg-secondary"></div>
            <span className="mt-4 truncate max-w-32 text-center">{name}</span>
            <span className="mt-2 opacity-50 truncate max-w-32 text-center">{position}</span>
        </div>
    )
}