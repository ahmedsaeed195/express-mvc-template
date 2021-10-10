const { check, validationResult } = require('express-validator')

module.exports = [
    check('title').isString().isLength({ min: 3 }).withMessage('Title should be at least 3 chars long').optional(),
    check('description').isString().isLength({ min: 7 }).withMessage('Description should be at least 7 chars long').optional(),
    check('user_id').isInt().toInt().withMessage('Invalid ID').optional(),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.mapped() })
        return next();
    }
]