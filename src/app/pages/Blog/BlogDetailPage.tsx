import React from 'react'
import { IDynamicParameters } from '../../../router/router';

interface BlogDetailPageProps {
    parameter: IDynamicParameters;
    query: IDynamicParameters;
}

export default function BlogDetailPage({ parameter, query }: BlogDetailPageProps) {
    return (
        <div>
            {parameter && parameter["parameter"]}
        </div>
    )
}
