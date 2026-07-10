export const starVertexShader = `
attribute float aScale;
attribute float aRandom;

uniform float uTime;

varying vec3 vColor;
varying float vAlpha;

void main() {

    vColor = color;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    float twinkle = sin(uTime * 1.5 + aRandom) * 0.5 + 0.5;

    vAlpha = 0.35 + twinkle * 0.65;

    gl_PointSize = aScale * 13.0;

    gl_PointSize *= (4.0 / -viewPosition.z);
}
`;

export const starFragmentShader = `
varying vec3 vColor;
varying float vAlpha;

void main(){

    vec2 uv = gl_PointCoord - 0.5;

    float d = length(uv);

    float alpha = smoothstep(0.5,0.0,d);

    alpha *= vAlpha;

    gl_FragColor = vec4(vColor, alpha);
}
`;