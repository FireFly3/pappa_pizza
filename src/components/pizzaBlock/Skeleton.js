import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={490}
        viewBox="0 0 280 490"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="285" rx="10" ry="10" width="280" height="30" />
        <rect x="0" y="340" rx="10" ry="10" width="280" height="86" />
        <rect x="0" y="439" rx="10" ry="10" width="90" height="45" />
        <rect x="112" y="439" rx="10" ry="10" width="165" height="45" />
    </ContentLoader>
)

export default Skeleton