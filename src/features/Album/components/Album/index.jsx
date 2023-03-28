import React from "react";
import PropTypes from "prop-types";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <div className="album__thumbnailUrl">
        <img
          src={album.thumbnailUrl}
          alt={album.name}
          class="rounded-lg w-48"
        />
      </div>
      <p className="font-bold">{album.name}</p>
    </div>
  );
}

export default Album;
