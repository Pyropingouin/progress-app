import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, SetStatus] = useState(false);

  const toggle = () => {
    SetStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="#ff6b81" size="30" onClick={toggle} />;
  else {
    return <AiOutlineHeart size="30" onClick={toggle} />;
  }
};

export default Like;
