import { Bloom, EffectComposer } from '@react-three/postprocessing'
import React from 'react'

const Effects = () => {
    return (
        <EffectComposer>
            <Bloom
                intensity={0.1}
                luminanceThreshold={0.15}
                luminanceSmoothing={0.9}
                mipmapBlur
            />
        </EffectComposer>
    )
}

export default Effects