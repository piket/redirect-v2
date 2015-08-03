module.exports = function(values) {
    var obj = {};
    for(var key in values) {
        if(values[key]) {
            switch(key) {
                case 'firstName':
                case 'lastName':
                case 'company':
                    if(typeof values[key] !== 'string' && values[key].length < 1) {
                        return false;
                    }
                    obj[key] = values[key];
                    break;
                case 'email':
                    if(typeof values[key] !== 'string' && values[key].match(/(.+)@(.+){2,}\.(.+){2,}/) === null) {
                        return false;
                    }
                    obj[key] = values[key];
                    break;
                case 'action':
                    if(values[key].indexOf('http') === -1) {
                        return false;
                    }
                    obj[key] = values[key];
                    break;
                case 'version':
                    if(values[key] !== 'skip' && values[key] !== 'no skip') {
                        return false;
                    }
                    obj[key] = values[key];
                    break;
                default: break;
            }
        }
    }
    return obj;
}