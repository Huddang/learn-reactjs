import React from "react";
import Album from "../Album";

function AlbumList({ albumList }) {
  return (
    <ul className="flex flex-row flex-nowrap p-0 list-none">
      {albumList.map((album) => (
        <li key={album.id} class="px-20">
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
