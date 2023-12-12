import React, { forwardRef, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

/**
 * Tree 1 
 */
// const Tree1 = forwardRef((props, ref) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/trees/tree-1.glb")
//     return (
//         <RigidBody
//             ref={ ref }
//             gravityScale={ 0.5 }
//             friction={ 0.5 }
//             canSleep={ false }
//             colliders="hull"
//             // type="fixed"
//         >
//             <group {...props} dispose={null}>
//                 <group scale={ 10 }>
//                     <mesh
//                         castShadow
//                         receiveShadow
//                         geometry={nodes["Node-Mesh"].geometry}
//                         material={materials.mat21}
//                     />
//                     <mesh
//                         castShadow
//                         receiveShadow
//                         geometry={nodes["Node-Mesh_1"].geometry}
//                         material={materials.mat20}
//                     />
//                 </group>
//             </group>
//         </RigidBody>
//     )
// })

/**
 * Tree 1 
 */
// const Tree1 = (props) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/trees/tree-1.glb")
//     return (
//         <group {...props} dispose={null}>
//             <group scale={ 60 } rotation={[-Math.PI / 2, 0, 0]}>
//                 <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Tree_4_1.geometry}
//                 material={materials.Tree_Wood}
//                 />
//                 <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Tree_4_2.geometry}
//                 material={materials.Tree_Green}
//                 />
//             </group>
//         </group>
//     )
// }

/**
 * Tree 2
 */
// const Tree2 = (props) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/trees/tree-2.glb")
//     return (
//         <group {...props} dispose={null}>
//             <group rotation={[-Math.PI / 2, 0, 0]} scale={58.6}>
//                 <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Tree_1_1.geometry}
//                 material={materials.Tree_Green}
//                 />
//                 <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Tree_1_2.geometry}
//                 material={materials.Tree_Wood}
//                 />
//             </group>
//         </group>
//     )
// }

/**
 * Tree 3
 */
// const Tree3 = (props) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/trees/tree-3.glb")
//     return (
//         <group {...props} dispose={null}>
//             <group rotation={[-Math.PI / 2, 0, 0]} scale={51.843}>
//                 <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Tree_3_1.geometry}
//                 material={materials.Tree_Green}
//                 />
//                 <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Tree_3_2.geometry}
//                 material={materials.Tree_Wood}
//                 />
//             </group>
//         </group>
//     )
// }

/**
 * Tree 4
 */
// const Tree4 = (props) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/trees/tree-4.glb")
//     return (
//         <group {...props} dispose={null}>
//             <group rotation={[-Math.PI / 2, 0, 0]} scale={51.843}>
//                 <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Tree_2_1.geometry}
//                 material={materials.Tree_Wood}
//                 />
//                 <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Tree_2_2.geometry}
//                 material={materials.Tree_Green}
//                 />
//             </group>
//         </group>
//     )
// }

/**
 * Palm 1
 */
const PalmTree1 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-tree-1.glb")
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Environment_PalmTree_1.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </group>
    )
}

/**
 * Palm 2
 */
const PalmTree2 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-tree-2.glb")
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Environment_PalmTree_3.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </group>
    )
}

/**
 * Palm 3
 */
const PalmTree3 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-tree-3.glb")
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Environment_PalmTree_2.geometry}
                material={materials.Atlas}
                scale={100}
            />
        </group>
    )
}

export default function Trees()
{   
    return(
        <>
            <PalmTree1 scale={ 3.5 } position={ [ - 4, 0, 24 ] } rotation-y={ Math.PI * 1.2 } />
            <PalmTree2 scale={ 4 } position={ [ 53, 0, 20 ] } rotation-y={ Math.PI * 0.1 } />
            <PalmTree3 scale={ 4.2 } position={ [ - 69, 0, 16 ] } rotation-y={ Math.PI * 0.5 } />
            
            <PalmTree2 scale={ 4.2 } position={ [ - 69, 0, 98 ] } rotation-y={ Math.PI * 0.5 } />
            <PalmTree3 scale={ 4.2 } position={ [ - 69, 0, 83 ] } rotation-y={ Math.PI * 0.5 } />
            
            <PalmTree1 scale={ 3.5 } position={ [ - 102, 0, 27 ] } rotation-y={ Math.PI * 1.2 } />
            <PalmTree2 scale={ 4 } position={ [ - 102, 0, 12 ] } rotation-y={ Math.PI * 0.1 } />
        </>
    )
}

// useGLTF.preload("./assets/models/world/trees/tree-1.glb")
// useGLTF.preload("./assets/models/world/trees/tree-2.glb")
// useGLTF.preload("./assets/models/world/trees/tree-3.glb")
// useGLTF.preload("./assets/models/world/trees/tree-4.glb")
useGLTF.preload("./assets/models/world/trees/palm-tree-1.glb")
useGLTF.preload("./assets/models/world/trees/palm-tree-2.glb")
useGLTF.preload("./assets/models/world/trees/palm-tree-3.glb")