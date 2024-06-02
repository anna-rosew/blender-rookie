import React from "react";
import ExplorationButton from "./ExplorationButton";
import "./styles/Exploration.css";
import "./styles/Section.css";
import "./styles/App.css";
import render from "./imgs/pc.png";
import rigging from "./imgs/rigging.png";
import retopologising from "./imgs/retopologise.png";
import effects from "./imgs/effects.png";
import cloth from "./imgs/cloth-sim.png";

// Render optimisation
//rigging
//retopologising
//Simulation and effects
//Soft body and cloth simulation

const buttonsData = [
  {
    buttonLabel: "Topic 1",
    buttonImageSrc: render,
    buttonHeading: "Optimisation",
    modalHeading: "01",
    modalSubHeading: "UI/Navigation",
    modalContent1: `Render optimization in Blender involves techniques to reduce render times and improve efficiency without compromising visual quality. Key strategies include adjusting sample rates to find a balance between speed and noise, optimizing lighting and shadows, using denoising tools, and leveraging GPU rendering if available. Additionally, optimizing scene geometry, reducing texture resolutions where possible, and utilizing efficient render settings such as adaptive sampling and simplified materials for distant objects can significantly enhance performance. Utilizing these methods helps achieve faster renders while maintaining high-quality outputs.`,
    modalContent2:
      "TIP: Use GPU Rendering if you can! If you hav a compatibel device, GPU rendering will allow for for faster performance.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://docs.blender.org/manual/en/latest/render/cycles/optimizations/index.html",
    modalSecondaryButton: "Recommended Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=8gSyEpt4-60&t=2387s",
  },
  {
    buttonLabel: "Topic 2",
    buttonImageSrc: rigging,
    buttonHeading: "Rigging",
    modalHeading: "2",
    modalSubHeading: "Rigging",
    modalContent1:
      "Rigging in Blender is the process of creating a skeleton for a 3D model so it can be animated. This involves setting up a series of bones, or armature, that act as a framework for the model. Each bone is linked to specific parts of the mesh, allowing for realistic movements when the bones are manipulated. Rigging also includes defining constraints and controls to simplify animation tasks. It is essential for bringing characters and objects to life, enabling movements like walking, bending, and facial expressions.",
    modalContent2:
      "TIP: Clean Topology.Ensure your model has a clean, evenly distributed mesh topology for smoother deformations.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://www.blender.org/features/animation/#rigging",
    modalSecondaryButton: "Recommended Tutorial >>",
    modalSecondaryButtonLink: "https://www.youtube.com/watch?v=srpOeu9UUBU",
  },
  {
    buttonLabel: "Topic 3",
    buttonImageSrc: retopologising,
    buttonHeading: "Retopologising",
    modalHeading: "3",
    modalSubHeading: "Retopologising",
    modalContent1:
      "Retopologizing in Blender is the process of recreating the mesh of a 3D model to improve its topology, making it cleaner and more efficient for animation and rendering. This involves manually or semi-automatically drawing new geometry over the original high-poly model to create a low-poly version with optimized edge flow and fewer polygons. Retopologizing ensures that the model deforms correctly during animation, reduces computational load, and enhances texturing and shading. It's essential for transforming sculpted models or scanned data into usable assets in animation and game design.",
    modalContent2:
      "TIP: Use Proper Tools. Utilize Blender's RetopoFlow add-on or tools like the Shrinkwrap modifier and the BSurface add-on to simplify the process.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://docs.blender.org/manual/en/latest/modeling/meshes/retopology.html",
    modalSecondaryButton: "Recommended Tutorial >>",
    modalSecondaryButtonLink: "https://www.youtube.com/watch?v=X2GNyEUvpD4",
  },
  {
    buttonLabel: "Topic 4",
    buttonImageSrc: effects,
    buttonHeading: "Effects",
    modalHeading: "4",
    modalSubHeading: "Effects",
    modalContent1:
      "Simulation and effects in Blender refer to the creation of realistic physical phenomena and dynamic interactions within a 3D scene. This includes fluid dynamics, smoke, fire, cloth, hair, soft bodies, and rigid body dynamics. By configuring various physics properties and using Blender's built-in simulation engines, artists can mimic real-world behaviors, such as water flowing, cloth draping, or hair moving with the wind. These simulations enhance the realism of scenes and are crucial for visual effects in animations and films. Additionally, Blender's particle system allows for creating complex effects like explosions, rain, or swarms.",
    modalContent2:
      "TIP: Start Simple. Begin with basic setups and gradually increase complexity to understand how each parameter affects the simulation.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://docs.blender.org/manual/en/latest/grease_pencil/visual_effects/index.html",
    modalSecondaryButton: "Recommended Tutorial >>",
    modalSecondaryButtonLink: "https://www.youtube.com/watch?v=CrOboutVHH8",
  },
  {
    buttonLabel: "Topic 5",
    buttonImageSrc: cloth,
    buttonHeading: "Cloth Simulation",
    modalHeading: "5",
    modalSubHeading: "Cloth Simulation",
    modalContent1:
      "Soft body and cloth simulation in Blender enable the realistic animation of objects that deform and interact with forces like gravity, wind, and collisions. Soft body simulation is used for objects that maintain volume but have flexible surfaces, such as jelly or rubber. Cloth simulation, on the other hand, is tailored for fabrics, allowing them to drape, fold, and react to environmental influences like wind or collisions with other objects. Both simulations involve configuring physics properties like stiffness, damping, and collision settings to achieve natural and believable motions, enhancing the realism of animated scenes.",
    modalContent2:
      "TIP: Set Up Collision Objects. Define collision objects to interact with soft bodies or cloth, ensuring realistic behavior when they come into contact.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://docs.blender.org/manual/en/latest/physics/soft_body/introduction.html",
    modalSecondaryButton: "Recommended Tutorial >>",
    modalSecondaryButtonLink: "https://www.youtube.com/watch?v=LtgSuRTeh_g",
  },
];

export default function Exploration() {
  return (
    <div className="exploration-section">
      <div className="explore-centered-line"></div>
      <h1>Exploration</h1>
      <p className="description">
        Now you're on you're well on your way to mastering Blender, here are
        some areas you can explore to <strong>broaden your skills.</strong>{" "}
        These are just 5 areas of interest of many that you can venture into to
        challenge yourself and push your designs further.
      </p>
      <div className="grid-container">
        <div className="grid grid-5-columns">
          {buttonsData.map((data, index) => (
            <ExplorationButton
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
