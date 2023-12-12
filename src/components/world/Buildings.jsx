import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"


/**
 *  Large building
 */
const LargeBuilding1 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/city/large-building-1.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 8.5, 0 ] }
                scale={ 10 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1.geometry}
                    material={materials.border}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1_1.geometry}
                    material={materials.window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1_2.geometry}
                    material={materials._defaultMat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1_3.geometry}
                    material={materials.door}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1_4.geometry}
                    material={materials.roof}
                />
            </group>
            <CuboidCollider 
                args={ [ 6.5, 8.5, 6.5 ] } 
                position={ [ 0, 0, 0 ] }
            />
        </RigidBody>
    )
}


/**
 *  Large building
 */
const LargeBuilding2 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/city/large-building-2.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 10, 0 ] }
                scale={ 10 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1.geometry}
                    material={materials._defaultMat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1_1.geometry}
                    material={materials.border}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1_2.geometry}
                    material={materials.window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1_3.geometry}
                    material={materials.door}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1_4.geometry}
                    material={materials.roof}
                />
            </group>
            <CuboidCollider 
                args={ [ 6.5, 10, 6.5 ] } 
                position={ [ 0, 0, 0 ] }
            />
        </RigidBody>
    )
}


/**
 *  Large building
 */
const LargeBuilding3 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/city/large-building-3.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 10, 0 ] }
                scale={ 10 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingG_1.geometry}
                    material={materials.door}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingG_1_1.geometry}
                    material={materials.window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingG_1_2.geometry}
                    material={materials._defaultMat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingG_1_3.geometry}
                    material={materials.border}
                />
            </group>
            <CuboidCollider 
                args={ [ 9, 10, 8 ] } 
                position={ [ - 1, 0, 0 ] }
            />
        </RigidBody>
    )
}



export default function Buildings()
{
    return(
        <>  
            <LargeBuilding1 
                position={ [ - 100, 10.5, 0 ] } 
                rotation-y={ Math.PI * 0 }
                scale={ 1 }
            />
            <LargeBuilding2 
                position={ [ - 80, 12, 0 ] } 
                rotation-y={ Math.PI * 0 }
                scale={ 1 }
            />
            <LargeBuilding3 
                position={ [ - 120, 12, 0 ] } 
                rotation-y={ Math.PI * 0 }
                scale={ 1 }
            />
        </>
    )
}

useGLTF.preload("./assets/models/city/large-building-1.glb")
useGLTF.preload("./assets/models/city/large-building-2.glb")
useGLTF.preload("./assets/models/city/large-building-3.glb")