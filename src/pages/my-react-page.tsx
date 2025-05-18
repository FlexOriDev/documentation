import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function MyReactPage(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <h1>My React page</h1>
            <p>This is a React page</p>
        </Layout>
    );
}