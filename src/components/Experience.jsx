import World from './World.jsx'
import Lights from '../Lights.jsx'
import Player from './Player.jsx'
import Effects from './Effects.jsx'
import { useRef, useState } from 'react'
// import Texts from './world/Texts.jsx'
// import { RigidBody } from '@react-three/rapier'
// import { Rock } from './world/Rocks.jsx'

// export function Rocked()
// {
//     const rocksRef = useRef([])
//     const rock = 
//     [...Array(2)].map((value, index) => 
//         <RigidBody
//             ref={ (element) => rocksRef.current[index] = element }
//             key={ index }
//             position={ [ 
//                 index * 16,
//                 12,
//                 - 5
//             ] }
//             scale={ 60 }
//             colliders="hull"
//             gravityScale={ 0.5 }
//             friction={ 0.5 }
//             canSleep={ false }
//         >
//             <Rock />
//         </RigidBody>
//     )
//     return(
//         <>
//             { rock }
//         </>
//     )
// }

export default function Experience({ downgradedPerformance = false })
{
    const ref = useRef()

    return(
    <>
        <Player ref={ ref } />

        {/* <Rocked position={ [0, 10, 0] } /> */}

        <World char={ ref } />
        <Lights 
            char={ ref }
            downgradedPerformance={ downgradedPerformance } 
        />
        { !downgradedPerformance && (
            <Effects />
        )}
    </>
    )
}