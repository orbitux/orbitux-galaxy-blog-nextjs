export const vertexShader = `
attribute float aScale;
attribute float aBrightness;
attribute float aCoreStrength;

varying vec3 vColor;
varying float vBrightness;
varying float vCoreStrength;
void main() {

    vColor = color;
    vBrightness = aBrightness;
    vCoreStrength = aCoreStrength;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    float finalSize = mix(
       aScale,
       aScale * 2.2,
       aCoreStrength
    );
    gl_Position = projectedPosition;

    gl_PointSize = finalSize * 50.0;
    gl_PointSize *= (1.0 / -viewPosition.z);
}
`;

export const fragmentShader = `
varying vec3 vColor;
varying float vBrightness;
varying float vCoreStrength;
void main() {

    float dist = distance(gl_PointCoord, vec2(0.5));
    if(dist > 0.5){
        discard;
    }
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    vec3 coreColor = mix(
    vColor,
    vec3(1.0, 0.96, 0.92),
    vCoreStrength * 0.6
);

float finalBrightness =
    vBrightness + vCoreStrength * 0.5;

gl_FragColor = vec4(
    coreColor * finalBrightness,
    alpha
);
}
`;