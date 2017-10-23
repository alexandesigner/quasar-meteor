<template>
  <div class="hello">
    <img src="~assets/quasar-meteor-logo-full.svg" alt="Quasar + Meteor" width="280">
    <h5>Welcome to your Quasar + Meteor</h5>
    <div class="padding">
      <div class="block-field">
        <q-input v-model="newTask" stack-label="Insert your task title" />
        <q-btn color="primary" small @click="addTask" class="add-button">Add Task</q-btn>
      </div>
      <q-card class="block-list">
        <q-list>
          <div v-if="this.tasks.length === 0">
            <span class="notFound">
              <q-icon name="not_interested" />
              <span>No registration for tasks</span>
            </span>
          </div>
          <div v-else>
            <q-list-header class="title">Tasks <strong>({{ this.tasks.length }})</strong></q-list-header>
            <q-item v-for="(item, index) in tasks" :key="item.id">
              <q-item-main>
                <span v-if="!item.editing">{{ item.title }}</span>
                <q-input v-if="item.editing" v-model="changeTask" />
              </q-item-main>
              <q-item-side>
                <q-btn v-if="!item.editing" color="warning" outline @click="editTask(item)" small>
                  <q-icon name="edit" />
                </q-btn>
                <q-btn v-if="item.editing" color="positive" @click="saveTask(item)" small>
                  <q-icon name="check" />
                </q-btn>
                <q-btn color="negative" outline @click="removeTask(item)" small>
                  <q-icon name="delete" />
                </q-btn>
              </q-item-side>
            </q-item>
          </div>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<script>
import {
  QBtn,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QInput,
  QIcon,
  QCard,
  Dialog
} from 'quasar'
import { Meteor } from 'meteor/meteor'
import { Tasks } from 'api/collections'
import { Tracker } from 'meteor/tracker'

export default {
  name: 'hello',
  components: {
    QBtn,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QInput,
    QIcon,
    QCard
  },
  data () {
    return {
      tasks: [],
      newTask: ''
    }
  },
  created () {
    Meteor.subscribe('tasks')
    Tracker.autorun(() => {
      this.tasks = Tasks.find({}, {sort: { createdAt: -1 }})
        .map(function (item) {
          return {
            _id: item._id,
            title: item.title,
            editing: false
          }
        })
    })
  },
  methods: {
    addTask () {
      if (this.newTask) return Meteor.call('tasks.insert', this.newTask)
    },
    editTask (item) {
      item.editing = true
      if (item.editing === true) {
        this.changeTask = item.title
      }
    },
    saveTask (item) {
      item.editing = false
      if (this.changeTask) return Meteor.call('tasks.update', item._id, this.changeTask)
    },
    removeTask (item) {
      Dialog.create({
        title: 'Remove task',
        message: 'Are you sure you want to remove this task?',
        buttons: [
          {
            label: 'Cancel',
            handler () {
              console.log('Canceled...')
            }
          },
          {
            label: 'Remove',
            color: 'negative',
            outline: true,
            handler () {
              Meteor.call('tasks.remove', item._id)
            }
          }
        ]
      })
    }
  }
}
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.hello
  text-align center
.padding
  padding 30px
.title
  text-align left
.notFound
  margin 20px auto
  display flex
  justify-content center
  align-items center
  flex-direction column
  color #888
  .q-icon
    font-size: 40px;
    margin-bottom: 15px;
.block-field
  max-width 480px
  margin 0 auto
  position relative
.add-button
  position absolute
  right 0
  top 5px
.block-list
  max-width 480px
  margin 30px auto
.q-if-label
  text-align left
</style>
