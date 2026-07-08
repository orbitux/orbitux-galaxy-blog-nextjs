export const vertexShader = `
attribute float aScale;
attribute float aBrightness;

varying vec3 vColor;
varying float vBrightness;

void main() {

    vColor = color;
    vBrightness = aBrightness;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    gl_PointSize = aScale * 50.0;
    gl_PointSize *= (1.0 / -viewPosition.z);
}
`;

export const fragmentShader = `
varying vec3 vColor;
varying float vBrightness;

void main() {

    float dist = distance(gl_PointCoord, vec2(0.5));
    if(dist > 0.5){
        discard;
    }
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);

    gl_FragColor = vec4(
        vColor * vBrightness,
        alpha
    );
}
`;