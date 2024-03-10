import React from "react";
import YoutubeItem from "./YoutubeItem";
import { YoutubeData } from "../../data";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div className="youtube-list">
      {/* children components */}
      {props.children}

      {YoutubeData.map((item, index) => {
        {
          /* let newClass = "";
        if (index === 1) newClass = "abc"; */
        }

        const newClass = index === 1 ? "abc" : "";

        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
