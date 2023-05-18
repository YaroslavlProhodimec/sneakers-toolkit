import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={375}
        viewBox="0 0 297 375"
        backgroundColor="#f0ebeb"
        foregroundColor="#ffffff"
    >
        <rect x="30" y="516" rx="0" ry="0" width="184" height="222" />
        <rect x="-1" y="7" rx="38" ry="38" width="297" height="375" />
    </ContentLoader>

)