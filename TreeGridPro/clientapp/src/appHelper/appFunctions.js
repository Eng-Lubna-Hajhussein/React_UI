export const setChildren = (row, orderedTree) => {
    let parent = orderedTree[row.hierarchy[0]];
    for (let i = 1; i < row.hierarchy.length; i++) {
      if(!parent.children[row.hierarchy[i]]){
        parent.children[row.hierarchy[i]] = { info: row, children: {} };
      }
      parent = parent.children[row.hierarchy[i]];
    }
  };
  
  export const orderTree = (info) => {
    const orderedTree = {};
    info.forEach((row) => {
      if (row.hierarchy.length === 1) {
        orderedTree[row.hierarchy[0]] = { info: row , children: {} };
      }
      setChildren(row, orderedTree);
    });
    return orderedTree;
  };