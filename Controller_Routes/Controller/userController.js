function getAllUsers(req, res) {
    res.send('Get all users');
  }
  
  function getUserById(req, res) {
    res.send(`Get user with ID ${req.params.id}`);
  }
  
  function createUser(req, res) {
    res.send(`Create user: ${req.body.name}`);
  }
  
  function deleteUser(req, res) {
    res.send(`Delete user with ID ${req.params.id}`);
  }
  
  // Export each function individually
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
  };
  