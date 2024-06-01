import React from "react";
import LearningButton from "./LearningButton";
import "./styles/Exploration.css";
import "./styles/Section.css";
import "./styles/App.css";
import ui from "./imgs/Ui.png";
import modelling from "./imgs/modelling.png";
import sculpting from "./imgs/sculpting.png";
import shading from "./imgs/shading.png";

// Render optimisation
//rigging
//retopologising
//Simulation and effects
//Soft body and cloth simulation

const buttonsData = [
  {
    buttonLabel: "Step 1",
    buttonImageSrc: ui,
    buttonHeading: "UI/Navigation",
    modalHeading: "01",
    modalSubHeading: "UI/Navigation",
    modalContent1: `To effectively navigate the three-dimensional space in Blender, you need to be able to alter both your viewpoint and the viewing direction of the scene. While we will focus on the 3D Viewport editor, it's worth noting that many other editors in Blender offer similar capabilities. For instance, you can pan and zoom in the Image editor as well.The simplest way to get your head around this is to watch a few tutorials and just start building. Below you will find the link to the Blender site as well as the all-famous BlenderGuru Doughut Tutorial. It's recommended that you start with understanding the Navigation Gizmo.`,
    modalContent2:
      "TIP: Some navigation tools require a middle mouse button or numpad. If you don’t have one of these, see the Keyboard and Mouse page of the manual to learn how to work around this.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://docs.blender.org/manual/en/latest/editors/3dview/navigate/index.html",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=B0J27sf9N1Y&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z",
  },
  {
    buttonLabel: "Step 2",
    buttonImageSrc: modelling,
    buttonHeading: "Modelling",
    modalHeading: "2",
    modalSubHeading: "Modelling",
    modalContent1:
      "Modeling in Blender involves creating and manipulating 3D objects and scenes using the powerful tools and features provided by the software. When you open the editor you will always be presented with a square - this square, like every object in Blender, has a mesh and which consists of vertices ( points in 3D space), edges (connect vertices(), and faces (formed by edges). By adjusting the different parts of a mesh you can create a world of different shapes and getting used these three elements as the basis of any shape will impact all future creative decisions.",
    modalContent2:
      "TIP: Learning the basic keyboard shortcuts is the key to fast workdlow.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://www.blender.org/features/modeling/https://www.youtube.com/watch?v=tBpnKTAc5Eo&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=2",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=B0J27sf9N1Y&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z",
  },
  {
    buttonLabel: "Step 3",
    buttonImageSrc: sculpting,
    buttonHeading: "Sculpting",
    modalHeading: "3",
    modalSubHeading: "Sculpting",
    modalContent1:
      "Digital sculpting tools provide essential power and flexibility for various stages in the digital production pipeline, including character and environment design. Blender enhances this process by seamlessly integrating sculpting and polygonal modeling toolsets, allowing artists to transition smoothly from initial concept exploration to final model production. This way you can create detailed, organic shapes and precise structural modifications. Additionally, Blender's dynamic topology and powerful modifiers support non-destructive workflows.",
    modalContent2:
      "TIP: Create an 'Archive' collection and move a duplicate of your model before you begin sculpting.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink: "https://www.blender.org/features/sculpting/",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=--GVNZnSROc&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=4",
  },
  {
    buttonLabel: "Step 4",
    buttonImageSrc: shading,
    buttonHeading: "Shading",
    modalHeading: "4",
    modalSubHeading: "Shading",
    modalContent1:
      "Shading in Blender involves creating materials and textures to define how surfaces interact with light using the node-based Shader Editor. This allows for the creation of complex, realistic, or stylized materials by connecting various shader nodes. Artists can use shaders like diffuse, glossy, and emission to achieve specific effects, while texture maps such as bump, normal, and displacement add surface detail without increasing geometry. Blender’s PBR (Physically Based Rendering) shaders ensure materials behave realistically under different lighting conditions, enhancing the realism and visual appeal of 3D models.",
    modalContent2:
      "TIP: Before shading, understand how light interacts with surfaces. This knowledge helps in creating more realistic materials.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://docs.blender.org/manual/en/2.79/editors/3dview/properties/shading.html",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=fsLO1F5x7yM&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=5",
  },
];

export default function Exploration() {
  return (
    <div className="exploration-section">
      <h1>Exploration</h1>
      <div className="centered-line"></div>
      <a
        href="https://www.blender.org/download/"
        className="download-button"
        target="_blank"
        rel="noreferrer"
        alt="Download Blender Link"
      >
        DOWNLOAD BLENDER
      </a>
      <div className="grid-container">
        <div className="grid grid-5-columns">
          {buttonsData.map((data, index) => (
            <LearningButton
              key={index}
              buttonLabel={data.buttonLabel}
              buttonImageSrc={data.buttonImageSrc}
              buttonHeading={data.buttonHeading}
              modalHeading={data.modalHeading}
              modalSubHeading={data.modalSubHeading}
              modalContent1={data.modalContent1}
              modalContent2={data.modalContent2}
              modalPrimaryButtonLink={data.modalPrimaryButtonLink}
              modalSecondaryButtonLink={data.modalSecondaryButtonLink}
              modalPrimaryButton={data.modalPrimaryButton}
              modalSecondaryButton={data.modalSecondaryButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
