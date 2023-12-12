import { Ground } from "./Ground"
import Structures from "./world/Structures"
import Ocean from "./world/Ocean"
import Environment from "./world/Environment"
import Trees from "./world/Trees"
import Collectables from "./Collectables"
import Teleports from "./world/Teleports"
import Platforms from "./world/Platforms"

import { Twitter } from "./world/models/TwitterLogo"
import { XLogo } from "./world/models/XLogo"
import { Elon } from "./world/models/Elon"


export default function World(props)
{
    const { char, downgradedPerformance } = props
    
    return(
    <>
        <group>
            <Platforms />
            {/* <Buildings /> */}
            {/* <Platforms /> */}
            <Structures />
        
            <Trees />


            <Teleports char={ char } />
            <Collectables char={ char } />

            <Twitter position={ [ - 92, 12.5, 27 ] } rotation-y={ Math.PI * 0 } />
            <XLogo position={ [ 46, 13, - 5 ] } rotation-y={ Math.PI * 1 } />
            <Elon rotation-y={ Math.PI * 0.5 } position={ [ - 102, 12.5, 20 ] } pos={ [ 10, 7.9, 22 ] } char={ char } />

            <Ocean />
            <Ground />
            <Environment />
        </group>
    </>
    )
}