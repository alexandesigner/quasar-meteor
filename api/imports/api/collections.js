import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
import { remote } from '../startup/remote'

export const Tasks = new Mongo.Collection('tasks')
// export const Tasks = new Mongo.Collection('tasks', remote)

if (Meteor.isServer) {
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find()
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
  'tasks.remove'(taskId) {
    check(taskId, String)
    Tasks.remove(taskId)
  }
})
