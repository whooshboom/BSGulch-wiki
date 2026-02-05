import { lazy } from "react";
import { Link } from "react-router";

// import './Common.css'

//RSBuild method for grabbing the pages we need.
const contextualPages = require.context('./wiki-pages', true, /\.tsx$/);

export const pageLinks = contextualPages.keys().reduce((acc, key) => {
  //Clean up the key in order to form the required path.
  const pageLink = key.replace('./', '').replace('.tsx', '');

  //Assign the dynamic import fucntion to the key.
  acc[pageLink] = lazy(() => import(`./wiki-pages/${pageLink}`));
  return acc;
}, {} as Record<string, React.LazyExoticComponent<React.ComponentType<any>>>);

export const getLinkTree = () => {
  const tree: Record<string, string[]> = {};

  Object.keys(pageLinks).forEach((path) => {
    //Split 'species/skrell' into ['species', 'skrell']
    const parts = path.split('/');
    
    //Check to make sure the 
    if (parts.length > 1) {
      const category = parts[0];
      if (!tree[category]) tree[category] = [];
      tree[category].push(path);
    } 
    else {} //Any top-level files are assumed to be hard-navved.
  });
  return tree;
};

//JSX Navigation Tree, placed in the sidebar.
export const NavTree = () => {
  const tree = getLinkTree();
  
  return (
    <div className="navtree">
      {Object.entries(tree).map(([category, pagepaths]) => (
        <div key={category} className="sidebar-category" >
          <div className="nav-category">{formatTreeName(category)}</div>
          <div className="nav-link-container">
            {pagepaths.map((fullPath) => (
              <Link className="nav-link" key={fullPath} to={`/${fullPath}`}>
                {formatTreeName(fullPath.split('/').pop()!)}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export const formatTreeName = (name: string): string => {
  return name
    .split(/-+/) //All categories are split by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};