export const handleError = (res, e) => {
    return res.status(500).json(e)
}

export const handleResponse = (req, res, todo) => {
    return todo
        ? res.status(200).json(todo)
        : res.status(404).json({
              message: `the requested operation could not be executed: ${req.params.id} not found`,
          })
}
