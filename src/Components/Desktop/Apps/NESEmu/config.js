import React from "react";
import SM from './sm.nes'

const config = {
  ROMS: {
    owlia: {
      name: "The Legends of Owlia",
      description: (
        <span>
          <a
            href="http://www.gradualgames.com/p/the-legends-of-owlia_1.html"
            target="_blank"
          >
            Owlia by Gradual Games
          </a>{" "}
          /{" "}
          <a href="http://www.infiniteneslives.com/owlia.php" target="_blank">
            Buy the cartridge
          </a>
        </span>
      ),
      url: "https://cdn.jsdelivr.net/gh/bfirsh/jsnes-roms@master/owlia.nes"
    },

    superMario: {
      name: "Super Mario Bros.",
      description: (
        <span>
          Super Mario Bros.
          Does this even need a description?
        </span>
      ),
      url: SM
    },
  },
  GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
  SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;
