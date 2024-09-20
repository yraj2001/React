import React, { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

interface Props {
  onClick: (likeState: boolean) => void;
}

const Like = ({ onClick }: Props) => {
  const [likeState, setLikeState] = useState(false);
  const toggle = () => {
    setLikeState(!likeState);

    onClick(!likeState);
  };
  if (likeState)
    return <IoHeartSharp size={220} color="Red" onClick={toggle} />;
  return <IoHeartOutline size={220} onClick={toggle} />;
  //   return <div>{likeState ? "Dislike" : <IoHeartOutline size={220} />}</div>;
};

export default Like;
