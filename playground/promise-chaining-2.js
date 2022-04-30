require('../db/mongoose')
const Task = require('../models/task')

// Task.findByIdAndDelete('61feacb06756882e3e304646').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, completed) => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({
    completed: false,
  })
  return count
}

deleteTaskAndCount('61fead53daa8f63026a57e6b', false)
  .then((count) => {
    console.log(count)
  })
  .catch((e) => {
    console.log(e)
  })
