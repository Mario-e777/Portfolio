import PageStyles from './mdx-components.module.css';

const COMPONENTS = {
  H1: (props: any) => <h1 {...props} className={PageStyles.title} />,
  H2: (props: any) => <h2 {...props} className={PageStyles.title} />,
  H3: (props: any) => <h3 {...props} className={PageStyles.title} />,
  H4: (props: any) => <h4 {...props} className={PageStyles.title} />,
  H5: (props: any) => <h5 {...props} className={PageStyles.title} />,
};

export default COMPONENTS;