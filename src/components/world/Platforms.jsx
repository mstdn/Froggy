import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"


/**
 *  World platform
 */
const Sand = (props) => 
{
    const ground = useTexture('./assets/textures/sand.jpg')
    ground.wrapS = ground.wrapT = THREE.RepeatWrapping
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <mesh receiveShadow position={ [ 0, - 3, 0 ] } rotation-x={ - Math.PI / 2 }>
                <boxGeometry args={ [ 100, 100, 10 ] } />
                <meshStandardMaterial map={ ground } map-repeat={ [ 16, 16  ] } color="green" />
            </mesh>
            <CuboidCollider 
                args={ [ 50, 2, 50 ] }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>
    )
}


/**
 *  Start block
 */
const BeachIsland = (props) => 
{
    const { texture, map, color, boxSize, colBox } = props
    const ground = useTexture( texture )
    ground.wrapS = ground.wrapT = THREE.RepeatWrapping
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <mesh receiveShadow position={ [ 0, 0, 0 ] }>
                <boxGeometry args={ boxSize } />
                <meshStandardMaterial map={ ground } map-repeat={ map } color={ color } />
            </mesh>
            <CuboidCollider 
                args={ colBox }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>
    )
}

/**
 *  Start block
 */
const Block = (props) => 
{
    const { texture, map, color, boxSize, colBox } = props
    const ground = useTexture( texture )
    ground.wrapS = ground.wrapT = THREE.RepeatWrapping
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <mesh receiveShadow position={ [ 0, 0, 0 ] }>
                <boxGeometry args={ boxSize } />
                <meshStandardMaterial map={ ground } map-repeat={ map } color={ color } />
            </mesh>
            <CuboidCollider 
                args={ colBox }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>
    )
}



export default function Platforms()
{
    return(
        <>  
            <BeachIsland 
                position={ [ 0, 0, 0 ] } 
                boxSize={ [ 250, 4, 250 ] }
                colBox={ [ 125, 2, 125 ] }
                texture={ './assets/textures/sand.jpg' }
                map={ [ 64, 64 ] }
                color={ "#c49308" }
                scale={ 1 }
            />
            <BeachIsland 
                position={ [ - 600, 0, - 150 ] } 
                boxSize={ [ 250, 4, 250 ] }
                colBox={ [ 125, 2, 125 ] }
                texture={ './assets/textures/sand.jpg' }
                map={ [ 64, 64 ] }
                color={ "#c49308" }
                scale={ 1 }
            />
            <BeachIsland 
                position={ [ 600, 0, 150 ] } 
                boxSize={ [ 250, 4, 250 ] }
                colBox={ [ 125, 2, 125 ] }
                texture={ './assets/textures/sand.jpg' }
                map={ [ 64, 64 ] }
                color={ "#c49308" }
                scale={ 1 }
            />
        </>
    )
}

useTexture.preload('./assets/textures/sand.jpg')
// useTexture.preload('./assets/textures/cobblestone_1.png')
// useTexture.preload('./assets/textures/sand_3.png')
// useTexture.preload('./assets/textures/mario.png')
// useTexture.preload('./assets/textures/grass.jpg')
// useTexture.preload('./assets/textures/grass2.jpg')
