<template>
  <div class="hello">
    <img src="~assets/quasar-meteor-logo-full.svg" alt="Quasar + Meteor" width="280">
    <h5>Welcome to your Quasar + Meteor</h5>
    <div class="padding">
      <div class="block-field">
        <q-input v-model="newTask" stack-label="Add Task" />
        <q-btn color="primary" @click="addTask">Add</q-btn>
      </div>
      <q-card class="block-list">
        <q-list>
          <div v-if="this.tasks.length === 0">
            <span class="margin">
              No registration for tasks
            </span>
          </div>
          <q-item v-else v-for="(item, index) in tasks" :key="item.id">
            <q-item-main>
              {{ item.title }}
            </q-item-main>
            <q-item-side>
              <q-btn color="negative" @click="removeTask(item)">Remove</q-btn>
            </q-item-side>
          </q-item>
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
  QCard
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
            title: item.title
          }
        })
    })
  },
  methods: {
    addTask () {
      if (this.newTask) return Meteor.call('tasks.insert', this.newTask)
    },
    removeTask (item) {
      Meteor.call('tasks.remove', item._id)
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
.margin
  margin 20px auto
  display table
.block-field
  max-width 480px
  margin 0 auto
.block-list
  max-width 480px
  margin 30px auto
.q-if-label
  text-align left
</style>
