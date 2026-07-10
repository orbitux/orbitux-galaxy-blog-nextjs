export const starVertexShader = `
attribute float aScale;
attribute float aRandom;
attribute float aTwinkleStrength;
uniform float uTime;

varying vec3 vColor;
varying float vAlpha;

void main() {

    vColor = color;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    float twinkle = sin(
        uTime * (1.2 + aTwinkleStrength)
        + aRandom
    ) * 0.5 + 0.5;

    vAlpha = mix(0.25, 1.0, twinkle);
    float pulse = sin(uTime * 0.7 + aRandom);
    gl_PointSize = aScale * 2.0;

    gl_PointSize *=  1.0 + pulse * 0.18;
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