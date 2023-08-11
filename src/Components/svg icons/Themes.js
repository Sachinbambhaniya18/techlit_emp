import React from 'react'

export const Light = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"  fill='#fafafa' 
            viewBox="0 -960 960 960" className='Dark-Mode'>
                <path d="m480.667-21.695-136.824-133.24H154.849v
                    -188.686L19.695-480l135.24-136.393v-189.323h188.686l137.046
                    -135.719 135.735 135.699h189.334v189.334L941.435-480 805.727
                    -343.843v188.994H616.379L480.667-21.695Zm.232-221.363q98.263 0
                    167.435-69.279 69.173-69.279 69.173-168.263 
                    0-98.429-69.239-167.668T480.6-717.507q-98.984 0-168.263
                    69.22-69.279 69.219-69.279 167.62 0 98.721 69.512 168.165
                    69.512 69.444 168.329 69.444Zm-.579-74.203q-67.647
                    0-115.353-47.638-47.706-47.638-47.706-115.434 0-68.108
                    47.638-115.634 47.638-47.525 115.434-47.525 68.108 0
                    115.634 47.529 47.525 47.53 47.525 115.643 0 67.647-47.529
                    115.353-47.53 47.706-115.643 47.706Zm.347 172.087
                    98.711-97.652h138.195v-138.19L816.724-480l-99.276
                    -99.433v-138.14h-137.92l-98.861-99.151-99.651
                    99.151h-138.19v138.045L143.841-480l99.217 
                    99.217v137.725h137.058l100.551
                    97.884Zm-.102-336.058Z"/>
            </svg>
        </>
    )

}
export const Dark = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" 
            className='Dark-Mode'>
                <path d="m480.667-21.695-136.824-133.24H154.849v-188.686L19.695
                    -480l135.24-136.393v-189.323h188.686l137.046-135.719 135.735
                    135.699h189.334v189.334L941.435-480 805.727
                    -343.843v188.994H616.379L480.667-21.695Zm-.102-459.537Zm.102
                    336.058 98.766-97.652h138.14v-138.19L816.724-480l-99.276
                    -99.433v-138.14h-137.92l-98.861-99.151-99.651 99.151h
                    -138.19v138.045L143.841-480l99.217 99.217v137.725h137.058l100.551
                    97.884Zm-.768-97.884q100.55 0 169.079-69.07 68.529-69.07
                    68.529-169.17 0-99.818-68.721-168.68-68.721-68.862-168.887
                    -68.862-22.396 0-43.459 4.297-21.063 4.297-44.483 13.616 
                    61.681 31.898 98.464 90.871 36.782 58.972 36.782 128.824 
                    0 70.145-36.782 128.971-36.783 58.826-98.464 91.391 20.087
                    8.362 42.275 13.087t45.667 4.725Z"/>
            </svg>
        </div>
    )
};
