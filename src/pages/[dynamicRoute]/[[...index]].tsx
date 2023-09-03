import React, { ReactNode } from 'react';
import PageNotFound from '../404';
import { findRoute } from '../../router/helper';
import { componentMap } from '../../router/component.map';
interface MasterPageProps {
    component: string;
    parameter: string;
    query: string;
}

export default function MasterPage({ component, parameter, query }: MasterPageProps): ReactNode {
    const DynamicComponent = componentMap[component];
    if (!DynamicComponent) {
        return <PageNotFound></PageNotFound>;
    }

    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <DynamicComponent parameter={JSON.parse(parameter)} query={JSON.parse(query)} />
            </React.Suspense>
        </div>
    );
}


export const getServerSideProps = async ({ resolvedUrl }: { resolvedUrl: string }) => {
    const find = findRoute(resolvedUrl);
    return {
        props: {
            component: find?.route?.component ?? "404",
            parameter: JSON.stringify(find?.params ?? "{}"),
            query: JSON.stringify(find?.query ?? "{}")
        }
    }
}