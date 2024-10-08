 export function toggleVisibility (callback, el)  {
    callback(prev => (prev === el ? null : el));
};
  
