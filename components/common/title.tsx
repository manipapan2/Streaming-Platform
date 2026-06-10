interface TItleProps {
    text: string;
}

export default function Title({text}: TItleProps) {
    return (
        <div className=" grow flex m-4">
            <h3>{text}</h3>
        </div>
    )
}