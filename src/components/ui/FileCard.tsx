import { FC } from "react";

interface FileCardProps {}

const FileCard: FC<FileCardProps> = ({}) => {
  return (
    <div className="flex flex-col rounded-xl gap-1 p-3 bg-neutral-100 hover:bg-neutral-200 cursor-pointer">
      <h3 className="font-bold text-base truncate">
        Age of the roman empire part 2
      </h3>
      <p className="italic text-sm text-neutral-500 truncate">
        Age_of_the_roman_empire.pdf
      </p>
    </div>
  );
};

export default FileCard;
