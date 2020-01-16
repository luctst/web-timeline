module.exports = req => {
    const methodAvailable = "GET";

    if (req.method !== methodAvailable) {
        return {
            status: false,
            data: "This route can only be access with a GET method."
       };
    }

    if (req.data) {
        return {
            status: false,
            data: "This route can receives data"
        }
    }

    
}