import React, { ReactNode } from 'react';
import PageNotFound from '../../404';
import { componentMap, routers } from '../../../router';
import { defaultLang, languages } from '../../../language';

interface MasterPageProps {
    component: string;
    parameter: string;
}

export default function MasterPage({ component, parameter }: MasterPageProps): ReactNode {
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
    let currentUrl: any = resolvedUrl ?? ""
    let parameter = "";
    const multiParamsArray = currentUrl.split("/");
    if (!languages.includes(multiParamsArray[1])) {
        parameter = multiParamsArray.pop();
        let rootParams = multiParamsArray.join('/');
        if (parameter) {
            currentUrl = rootParams + "/:parameter";
        }
    }
    else if (multiParamsArray[1] === defaultLang) {
        multiParamsArray.splice(1, 1);
        currentUrl = multiParamsArray.join('/');
    }
    return {
        props: {
            component: routers.filter((item) => item.path === currentUrl)[0]?.component ?? "404",
            parameter: parameter
        }
    }
}