import React from "react";
import LearningButton from "./LearningButton";
import "./styles/Foundation.css";
import "./styles/Section.css";
import "./styles/App.css";
import ui from "./imgs/UI.png";
import modelling from "./imgs/modelling.png";
import sculpting from "./imgs/sculpting.png";
import shading from "./imgs/shading.png";
import geometry from "./imgs/geometry-nodes.png";
import layout from "./imgs/layout.png";
import compositing from "./imgs/compositing.png";
import lighting from "./imgs/lighting.png";
import animating from "./imgs/animation.png";
import rendering from "./imgs/rendering.png";

// Sample image URL for demonstration purposes

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
      "TIP: Learning the basic keyboard shortcuts is the key to fast workflow.",
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
  {
    buttonLabel: "Step 5",
    buttonImageSrc: geometry,
    buttonHeading: "Geometry",
    modalHeading: "5",
    modalSubHeading: "Geometry Nodes",
    modalContent1:
      "Geometry nodes in Blender enable procedural modeling through a node-based workflow, offering efficient and flexible design processes. By connecting nodes, users can generate, modify, and manipulate geometry, facilitating the creation of intricate structures and procedural animations. Blenders geometry nodes streamline modeling tasks, empowering artists to explore diverse design possibilities and create dynamic, customizable 3D assets. This intuitive workflow encourages creativity, providing a powerful toolset for efficient and versatile 3D modeling in Blender.",
    modalContent2:
      "TIP: Start simple. Begin with basic setups and gradually explore more complex node networks. This helps in understanding how nodes interact and affect geometry.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/index.html",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=TLrA6eJOfqk&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=6",
  },
  {
    buttonLabel: "Step 6",
    buttonImageSrc: layout,
    buttonHeading: "Layout",
    modalHeading: "6",
    modalSubHeading: "Layout",
    modalContent1:
      "Layout in Blender is the cornerstone of organizing and structuring elements within a scene, facilitating efficient workflows and clear visualization. By arranging objects, cameras, and lights, users can control the composition and presentation of their 3D scenes. Blender's layout tools empower artists to create intricate scenes and animations, offering a flexible and intuitive interface for positioning, grouping, and controlling elements. This seamless workflow encourages creativity and experimentation, enabling artists to explore diverse design possibilities and bring their visions to life with precision and clarity.",
    modalContent2:
      "TIP: Organisation is key. Keep your scene organized by using layers, collections, and naming conventions. This makes it easier to locate and manage objects, cameras, and lights within your scene.",
    modalPrimaryButton: "Principals of Composition >>",
    modalPrimaryButtonLink:
      "https://www.studiobinder.com/blog/rules-of-shot-composition-in-film/#:~:text=Shot%20composition%20is%20more%20than,engaged%20from%20beginning%20to%20end.",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=iv9p3x85Ty0&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=9",
  },
  {
    buttonLabel: "Step 7",
    buttonImageSrc: compositing,
    buttonHeading: "Compositing",
    modalHeading: "7",
    modalSubHeading: "Compositing",
    modalContent1:
      "Compositing in Blender merges multiple elements like renders and images into a cohesive final result using the node-based Compositor. Through precise manipulation and blending, users enhance visuals, correct imperfections, and add effects. Blender's Compositor offers diverse nodes for color correction, masking, and more, enabling fine control over the image. Features like render layers and passes allow for precise adjustments before compositing, ensuring polished and professional renders.",
    modalContent2:
      "TIP: Plan ahead. Before starting compositing, have a clear vision of the final result you want to achieve. This helps in organizing your workflow and selecting the necessary elements for compositing.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://docs.blender.org/manual/en/latest/compositing/index.html",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=nxrEV-OUTEg&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=11",
  },
  {
    buttonLabel: "Step 8",
    buttonImageSrc: lighting,
    buttonHeading: "Lighting",
    modalHeading: "8",
    modalSubHeading: "Lighting",
    modalContent1:
      "Lighting in Blender is crucial for creating atmosphere, mood, and realism in 3D scenes. By skillfully placing and adjusting lights, users can highlight key elements, evoke emotions, and enrich storytelling. Blender offers various light types, like point, spot, area, and sun lamps, each serving distinct purposes. Advanced features such as HDRi environment lighting and light probes further enhance lighting realism. Mastering lighting techniques empowers artists to elevate their renders, infusing depth and dimension into their 3D creations.",
    modalContent2:
      "TIP: Understand light properties. Familiarise yourself with the properties of different light types in Blender, such as intensity, color, and falloff. Understanding these properties helps in creating realistic lighting setups.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink:
      "https://docs.blender.org/manual/en/latest/render/lights/light_object.html",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=KO29y5eW61g&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=10",
  },
  {
    buttonLabel: "Step 9",
    buttonImageSrc: animating,
    buttonHeading: "Animation",
    modalHeading: "9",
    modalSubHeading: "Animation",
    modalContent1:
      "Animation in Blender brings 3D scenes and characters to life through movement and storytelling. Using Blender's animation tools, users create keyframes, animate objects, and fine-tune motion curves for desired movement. The timeline editor provides a visual representation of keyframes, allowing for precise timing adjustments. Features like rigging and inverse kinematics enable complex character animations with realistic movement. With Blender's powerful animation capabilities, artists express their ideas through dynamic and engaging animations.",
    modalContent2:
      "TIP: Storyboarding. Plan your animation by creating storyboards or animatics to visualize the sequence of shots and key moments. This helps in organizing your ideas and ensuring a coherent narrative.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink: "https://www.blender.org/features/animation/",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=4-tCn4-GfM4&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=12",
  },
  {
    buttonLabel: "Step 10",
    buttonImageSrc: rendering,
    buttonHeading: "Rendering",
    modalHeading: "10",
    modalSubHeading: "Rendering",
    modalContent1:
      "Rendering in Blender converts 3D scenes and models into 2D images or animations using two main engines: Cycles and Eevee. Cycles achieves photorealistic results by simulating light behavior for accurate reflections, refractions, and global illumination effects. Eevee provides quick feedback during interactive viewport rendering. Users adjust rendering parameters like resolution, sampling, and output format. Blender's render layers and passes allow precise control during post-production compositing, enabling artists to produce high-quality renders.",
    modalContent2:
      "TIP: Choose the right engine. Decide whether to use Cycles or Eevee based on your project requirements. Cycles is best for photorealistic renders, while Eevee offers faster rendering times and real-time feedback.",
    modalPrimaryButton: "Blender Documentation >>",
    modalPrimaryButtonLink: "https://www.blender.org/features/animation/",
    modalSecondaryButton: "Doughnut Tutorial >>",
    modalSecondaryButtonLink:
      "https://www.youtube.com/watch?v=4-tCn4-GfM4&list=PLjEaoINr3zgEPv5y--4MKpciLaoQYZB1Z&index=12",
  },
  // Add more buttons as needed
];

export default function Foundation({ id }) {
  return (
    <div className="foundation-section" id={id}>
      <h1>Foundation</h1>
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
