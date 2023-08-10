const rbacMiddleware = (role, permission) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        const userPermissions = req.user.permission;

        if (userRole === role && userPermissions.includes(permission)) {
            next()
        } else {
            res.status(403).json({error: 'Access denied'});
        }
    }

}

module.exports = rbacMiddleware;
