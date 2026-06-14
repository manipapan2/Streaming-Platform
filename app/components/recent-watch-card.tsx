interface RecentWatchCardProps {
  name: string;
  seasonNumber?: number | string;
  episodeNumber?: number | string;
  percentage: string;
}

export default function RecentWatchCard({
  name,
  seasonNumber,
  episodeNumber,
  percentage,
}: RecentWatchCardProps) {
  return (
    <div
      className={`cursor-pointer flex items-end p-4 w-80 mx-4 bg-gray-600 aspect-video rounded-md before after:content-[''] after:w-[${percentage}] after:h-0.5 after:bg-primary after:absolute relative after:bottom-0 after:left-0`}
    >
      <div className="flex flex-col">
        <span className="">{name}</span>
        {(seasonNumber || episodeNumber) && (
          <span className="text-[0.9rem] text-gray-400">
            {calculateText(seasonNumber, episodeNumber)}
          </span>
        )}
      </div>
    </div>
  );
}

const calculateText = (
  seasonNumber: string | number | undefined,
  episodeNumber: string | number | undefined,
) => {
  let result: string = "";

  if (seasonNumber) {
    result += `Season ${seasonNumber} `;
  }
  if (episodeNumber) {
    result += `Episode ${episodeNumber}`;
  }

  return result;
};
