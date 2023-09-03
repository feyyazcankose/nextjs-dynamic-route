import React, { ReactNode, useEffect } from 'react';
import PageNotFound from '../404';
import { componentMap, routers } from '../../router';

interface MasterPageProps {
    component: string;
}

export default function MasterLang({ component }: MasterPageProps): ReactNode {
    const DynamicComponent = componentMap[component];
    if (!DynamicComponent) {
        return <PageNotFound></PageNotFound>;
    }

    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <DynamicComponent />
            </React.Suspense>
        </div>
    );
}


export const getServerSideProps = async ({ resolvedUrl = null }) => {
    let currentUrl: any = resolvedUrl ?? ""
    return {
        props: {
            component: routers.filter((item) => item.path === currentUrl)[0]?.component ?? "404"
        }
    }
}