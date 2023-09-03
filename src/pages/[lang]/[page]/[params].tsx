import React, { ReactNode } from 'react';
import PageNotFound from '../../404';
import { componentMap, routers } from '../../../router';

interface MasterPageProps {
    component: string;
    parameter: string;
}

export default function MasterPageParameter({ component, parameter }: MasterPageProps): ReactNode {
    const DynamicComponent = componentMap[component];
    if (!DynamicComponent) {
        return <PageNotFound></PageNotFound>;
    }
    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <DynamicComponent parameter={parameter} />
            </React.Suspense>
        </div>
    );
}


export const getServerSideProps = async ({ resolvedUrl = null }) => {
    const currentUrl: any = resolvedUrl ?? ""
    const multiParamsArray = currentUrl.split("/");
    const parameter = multiParamsArray.pop();
    const rootParams = multiParamsArray.join('/');
    return {
        props: {
            component: routers.filter((item) => item.path === `${rootParams}/:parameter`)[0]?.component ?? "404",
            parameter: parameter
        }
    }
}