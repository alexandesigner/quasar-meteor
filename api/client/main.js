import { Template } from 'meteor/templating';
import { Tasks } from '../imports/api/collections'

import './main.html';

Template.tasksList.onCreated(function tasksListOnCreated() {
  Meteor.subscribe('tasks')
})

Template.tasksList.helpers({
  tasks: function () {
    return Tasks.find({})
  }
})

Template.tasksList.events({
  'click #add-task': (event, instance) => {
    event.preventDefault()
    Meteor.call('tasks.insert', 'Task')
  }
})
