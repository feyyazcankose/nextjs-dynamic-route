import React from 'react'

interface BlogDetailPageProps {
    parameter: string;
}

export default function BlogDetailPage({ parameter }: BlogDetailPageProps) {
    return (
        <div>{parameter}</div>
    )
}
