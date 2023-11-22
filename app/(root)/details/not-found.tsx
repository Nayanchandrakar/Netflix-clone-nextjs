import { FC } from "react";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <div className="w-full h-full min-h-[80vh] flex justify-center items-center">
      <h1 className="text-5xl font-semibold text-white">NotFound</h1>
    </div>
  );
};

export default NotFound;
