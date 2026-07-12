export const dustVertexShader = `

attribute float aScale;

uniform float uTime;

void main(){

    vec3 p = position;

    p.z += sin(uTime * 0.05 + position.x) * 0.4;

    vec4 modelPosition = modelMatrix * vec4(p,1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    gl_PointSize = aScale * 8.0;
    gl_PointSize *= (1.0 / -viewPosition.z);

}
`;
export const dustFragmentShader = `

void main(){

    vec2 uv = gl_PointCoord - 0.5;

    float d = length(uv);

    float alpha = smoothstep(0.5,0.0,d);

    gl_FragColor = vec4(1.0,1.0,1.0,alpha*0.12);

}
`;