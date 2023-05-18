import React from "react";
import "./story.css";
import { story } from "../../../data";
import Stories from "../story/Stories";
function Story() {
  return (
    <div className="Storys__container">
      <h2 className="storys__container-title">
        Travel <span>Stories</span>
      </h2>
      <div className="storys__container-content">
        {story.map((data) => (
          <Stories key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Story;
