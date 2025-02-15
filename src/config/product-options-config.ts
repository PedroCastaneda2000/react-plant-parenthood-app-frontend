import agloCamelCanvas from "../assets/Canvases/Aglo-Camel-Canvas.png";
import agloCharcoalCanvas from "../assets/Canvases/Aglo-Charcoal-Canvas.png";
import agloCobaltCanvas from "../assets/Canvases/Aglo-Cobalt-Canvas.png";
import agloEmeraldCanvas from "../assets/Canvases/Aglo-Emerald-Canvas.png";
import agloTangerineCanvas from "../assets/Canvases/Aglo-Tangerine-Canvas.png";

import anthCanvas from "../assets/Canvases/anth_canvas.png";
import moneCanvas from "../assets/Canvases/mone_canvas.png";

export const colorToCanvasMap: Record<string, string> = {
  emerald: agloEmeraldCanvas,
  tangerine: agloTangerineCanvas,
  cobalt: agloCobaltCanvas,
  camel: agloCamelCanvas,
  charcoal: agloCharcoalCanvas,
};

export const canvasArray = [
  { color: "emerald", image: agloEmeraldCanvas },
  { color: "tangerine", image: agloTangerineCanvas },
  { color: "cobalt", image: agloCobaltCanvas },
  { color: "camel", image: agloCamelCanvas },
  { color: "charcoal", image: agloCharcoalCanvas },
];

export const colorMap: Record<string, string> = {
  emerald: "#455C4C",
  tangerine: "#A3523A",
  cobalt: "#505E6D",
  camel: "#A58B70",
  charcoal: "#232324",
};

export const recommendationsArray = [
  { id: 1, name: "Anthurium", price: 125, image: anthCanvas },
  { id: 2, name: "Malabar chestnut", price: 155, image: moneCanvas },
];
