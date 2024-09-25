import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import "./styles/App.css";
import "./styles/Inspiration.css";

export default function Inpiration({ id }) {
  return (
    <div className="inspiration-section" id={id}>
      <div className="communities">
        <div className="inspiration-centered-line"></div>
        <h1>Inspiration</h1>
        <h2>COMMUNITIES</h2>
        <p>
          Inspiration and a creative community are essential for 3D artists as
          they provide <strong>motivation</strong>,{" "}
          <strong>learning opportunities</strong>, and valuable{" "}
          <strong>feedback</strong>. Being part of a community exposes artists
          to diverse techniques, styles, and workflows, fostering{" "}
          <strong>continuous growth</strong> in their craft. Feedback and
          critique from peers help identify areas for improvement, while
          networking opens doors for collaboration and career opportunities.
          Additionally, sharing work within the community offers validation and
          encouragement, <strong>boosting confidence and morale</strong>.
          Ultimately, inspiration and a supportive community serve as catalysts
          for growth, collaboration, and personal development in the journey of
          every 3D artist. So we think it's a pretty good idea to{" "}
          <strong>get plugged in!</strong>
        </p>
        <p>So, here are some places you can find other Blender enthusiasts:</p>

        <ul>
          <li>
            <a
              href="https://blender.chat/home"
              alt="Blender Chat Link"
              target="_blank"
              rel="noreferrer"
            >
              Blender Chat
            </a>
          </li>
          <li>
            <a
              href="https://blenderartists.org/"
              alt="Blender Artists Link"
              target="_blank"
              rel="noreferrer"
            >
              Blender Artists
            </a>
          </li>
          <li>
            <a
              href="https://www.artstation.com/learning/blender"
              alt="Art Station Link"
              target="_blank"
              rel="noreferrer"
            >
              Art Station
            </a>
          </li>
          <li>
            <a
              href="https://www.blendernation.com/"
              alt="Blender Nation Link"
              target="_blank"
              rel="noreferrer"
            >
              Blender Nation
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/blender/"
              alt="Reddit"
              target="_blank"
              rel="noreferrer"
            >
              Blender on Reddit
            </a>
          </li>
        </ul>
        <p>
          <strong>Other helpful resources: </strong>
        </p>
        <ul>
          <li>
            <a
              href="https://blender.stackexchange.com/"
              alt="Blender StackExchange"
              target="_blank"
              rel="noreferrer"
            >
              Blender StackExchange
            </a>
          </li>
          <li>
            <a
              href="https://www.cgtrader.com/"
              alt="CG Trader Link"
              target="_blank"
              rel="noreferrer"
            >
              CG Trader (Assets)
            </a>
          </li>
          <li>
            <a
              href="https://ambientcg.com/"
              alt="Ambient CG"
              target="_blank"
              rel="noreferrer"
            >
              Ambient CG (Texture Assets)
            </a>
          </li>
        </ul>
      </div>
      <div className="artists">
        <h2>Artists</h2>
        <div className="grid grid-4-columns">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/CxJoKMrvqLM/?img_index=1"
              width={328}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/Cz0NGuwPAiE/"
              width={328}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/C6foZOArJ1x/"
              width={328}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/C2sd_XoNVgJ/"
              width={328}
            />
          </div>
        </div>
        <div className="centered-line-bottom"></div>
      </div>
    </div>
  );
}
