import "iconify-icon";
import '@fontsource/host-grotesk';
import '@fontsource/space-grotesk';
import '@fontsource/major-mono-display';

document.querySelectorAll('.icon-container').forEach(container => {
    const src = container.getAttribute("data-src");
    fetch(src)
        .then(res => res.text())
        .then(svgText => {
            container.innerHTML = svgText;
            // Optional: remove width/height attributes to let CSS bestimmen
            const svg = container.querySelector("svg");
            svg.removeAttribute("width");
            svg.removeAttribute("height");
        })
        .catch(err => console.error("SVG load error:", err));
});
