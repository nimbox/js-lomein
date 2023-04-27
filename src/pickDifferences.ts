import _ from 'lodash';


/**
 * Creates an object composed of the paths properties of current and 
 * the comparables properties where the values associated in current 
 * and original are different. The paths properties are picked
 * if the comparables properties have at least one difference.
 * The values null and undefined are treated as equals. The rest of
 * the values are compared strictly.
 * 
 * @param {Object} current The current object from which to pick.
 * @param {Object} original The original object to use when comparing the values associated to comparables.
 * @param {string[]} [paths] The property paths to pick.
 * @param {string[]} comparables The property paths to use for comparison and pick. 
 */
export const pickDifferences = (current: any, original: any, paths: any, comparables: any) => {
    
    if (!comparables) {
        comparables = paths;
        paths = [];
    }
    
    const different = _.pick(current, _.filter(comparables, function (p) {
        if ((original[p] == null) && (current[p] == null)) {
            return false;
        }
        return !(original[p] === current[p]);
    }));
    
    if (_.isEmpty(different)) {
        return different;
    }
    
    return Object.assign({}, _.pick(current, paths), different);
    
}