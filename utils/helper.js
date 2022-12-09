const resBuilder = (status, data, message, error = null) => {
    if (error) {
        return {
            error
        }
    }
    return {
        status, data, message
    }
}

const handleColumnName = (colName) => {
    const arr = colName.split('_');
    let str = '';
    arr.forEach((item) => {
        str += `${item} `;
    });
    return str[0].toUpperCase() + str.substring(1);
}

module.exports = { resBuilder, handleColumnName };