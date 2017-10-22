import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const Tasks = new Mongo.Collection('tasks')

if (Meteor.isServer) {
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find()
  })
  Meteor.publish('userData', function() {
      var currentUser
      currentUser = this.userId
      if (currentUser) {
        return Meteor.users.find({
          _id: currentUser
        }, {
        fields: {
          'emails': 1
        }
      })
    } else {
      return this.ready()
    }
  })
}

Meteor.methods({
  'tasks.insert'(title) {
    check(title, String)
    Tasks.insert({
      title,
      createdAt: new Date()
    })
  },
  'tasks.update'(taskId, task) {
    check(taskId, String)
    check(task, String)
    Tasks.update(taskId, {
      $set: {
        _id: taskId,
        updatedAt: new Date(),
        title: task
      }
    })
  },
  'tasks.remove'(taskId) {
    check(taskId, String)
    Tasks.remove(taskId)
  }
})
