import Head from 'next/head';
import path from 'path';

interface MetadataProps {
    title: string;
    description: string;
    icon: string;
}

const Metadata = ({ title, description, icon }: MetadataProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href={icon} />

        </Head>
    );
};

export default Metadata;
