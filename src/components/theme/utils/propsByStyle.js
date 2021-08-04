import breakpointsMedia from "./breakpointsMedia";

export default function propsByStyle(propName) {
  return function (props) {
    const propValue = props[propName];

    if (typeof propValue === 'string') {
      return {
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName] : propValue.xs
        }, 
        sm: {
          [propName] : propValue.sm
        }, 
        md: {
          [propName] : propValue.md
        }, 
        lg: {
          [propName] : propValue.lg
        }, 
        xl: {
          [propName] : propValue.xl
        }, 
      })
    }

  };
}
