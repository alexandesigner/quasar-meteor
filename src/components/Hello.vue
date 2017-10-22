<template>
  <div class="hello">
    
    <div class="padding">
      <div class="authentication">
        
        <div class="auth-buttons" v-if="!loggedIn">
          <small>Basic authentication using Meteor.Accounts</small>
          <div>
            <q-btn @click="$refs.loginModal.open()">Login</q-btn>
            <q-btn @click="$refs.registerModal.open()">Register</q-btn>
          </div>
        </div>
        <div class="auth-profile" v-if="loggedIn">
          <strong>{{ this.email }}</strong>
          <q-btn @click="logout" color="negative" small>Logout</q-btn>
        </div>

        <q-modal class="auth-modal" ref="loginModal">
          <div class="padding">
            <h4>Login</h4>
            <q-btn class="close" color="negative" flat @click="$refs.loginModal.close()">
              <q-icon name="close" />
            </q-btn>
            <div class="form">
              <div>
                <q-input
                  stack-label="Your email"
                  v-model="loginForm.email"
                  @keyup.enter="login"
                />
              </div>
              <div>
                <q-input
                  stack-label="Your password"
                  type="password"
                  v-model="loginForm.password"
                  @keyup.enter="login"
                />
              </div>
              <div>
                <q-btn loader v-model="loginLoad" @click="login" color="primary" class="full-width">Login</q-btn>
              </div>
            </div>
          </div>
        </q-modal>

        <q-modal class="auth-modal" ref="registerModal">
          <div class="padding">
            <h4>Register</h4>
            <q-btn class="close" color="negative" flat @click="$refs.registerModal.close()">
              <q-icon name="close" />
            </q-btn>
            <div class="form">
              <div>
                <q-input
                  stack-label="Your email"
                  v-model="registerForm.email"
                  @keyup.enter="register"
                />
              </div>
              <div>
                <q-input
                  stack-label="Your password"
                  type="password"
                  v-model="registerForm.password"
                  @keyup.enter="register"
                />
              </div>
              <div>
                <q-btn loader v-model="registerLoad" @click.prevent="register" color="positive" class="full-width">Confirm</q-btn>
              </div>
            </div>
          </div>
        </q-modal>

      </div>
      <q-card class="block-list">
        <div class="block-field">
          <q-input v-model="newTask" stack-label="Insert your task title" />
          <q-btn :disabled="this.newTask.length < 3" color="primary" small @click.prevent="addTask" class="add-button">Add Task</q-btn>
        </div>
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
                <q-btn v-if="!item.editing" color="warning" outline @click.prevent="editTask(item)" small>
                  <q-icon name="edit" />
                </q-btn>
                <q-btn v-if="item.editing" color="positive" @click.prevent="saveTask(item)" small>
                  <q-icon name="check" />
                </q-btn>
                <q-btn color="negative" outline @click.prevent="removeTask(item)" small>
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
  QModal,
  Dialog,
  Alert,
  Toast
} from 'quasar'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
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
    QModal,
    QCard
  },
  data () {
    return {
      tasks: [],
      userData: [],
      newTask: '',
      registerLoad: false,
      loginLoad: false,
      loggedIn: false,
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        email: '',
        password: ''
      },
      email: ''
    }
  },
  created () {
    Meteor.subscribe('tasks')
    Tracker.autorun(() => {
      this.loginStatus()
      this.tasks = Tasks.find({}, {sort: { createdAt: -1 }})
        .map((item) => {
          return {
            _id: item._id,
            title: item.title,
            editing: false
          }
        })
    })
  },
  mounted () {
    Tracker.autorun(() => {
      if (Meteor.userId() !== null || Meteor.user() !== null) {
        const userEmail = Meteor.users.find({_id: Meteor.userId()}, {fields: {emails: 1}})
          .map((item) => {
            return item.emails[0].address
          })
        this.email = userEmail[0]
      }
    })
  },
  methods: {
    logout () {
      Alert.create({html: 'You logged out'})
      Meteor.logout()
      this.loggedIn = false
    },
    loginStatus () {
      if (Meteor.userId() !== null || Meteor.user() !== null) this.loggedIn = true
    },
    addTask (item) {
      if (this.newTask) {
        Toast.create({
          html: this.newTask,
          timeout: 2500,
          color: '#fff',
          button: {
            color: 'yellow',
            handler () {
              console.log(item)
            }
          }
        })
        Meteor.call('tasks.insert', this.newTask)
        this.newTask = ''
      }
    },
    editTask (item) {
      item.editing = true
      if (item.editing === true) this.changeTask = item.title
    },
    saveTask (item) {
      item.editing = false
      if (this.changeTask) Meteor.call('tasks.update', item._id, this.changeTask)
    },
    removeTask (item) {
      Dialog.create({
        title: 'Remove task',
        message: 'Are you sure you want to remove this task?',
        buttons: [
          {
            label: 'Cancel',
            handler () {
              Alert.create({html: 'Canceled...'})
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
    },
    login () {
      this.loginLoad = true
      Meteor.loginWithPassword(this.loginForm.email, this.loginForm.password, (err) => {
        if (err) {
          Alert.create({html: err})
          this.loginLoad = false
        }
        else {
          Alert.create({html: 'Good to see you again, welcome!', color: 'primary', icon: 'check'})
          this.loginLoad = false
          this.loginForm.email = ''
          this.loginForm.password = ''
          this.$refs.loginModal.close()
        }
      })
    },
    register () {
      this.registerLoad = true
      Accounts.createUser({
        createdAt: new Date(),
        email: this.registerForm.email,
        password: this.registerForm.password
      }, (err, res) => {
        if (err) {
          Alert.create({html: err})
          this.registerLoad = false
        }
        else {
          Alert.create({html: 'You just signed up', color: 'positive', icon: 'check'})
          this.registerLoad = false
          this.registerForm.email = ''
          this.registerForm.password = ''
          this.$refs.registerModal.close()
        }
      })
    }
  }
}
</script>

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
  padding 20px
.add-button
  position absolute
  right 20px
  top 35px
.block-list
  max-width 480px
  margin 30px auto
.q-if-label
  text-align left
.auth-buttons
  display flex
  justify-content center
  align-items center
  flex-direction column
  small
    margin-bottom 20px
.auth-modal
  .form
    margin-top 30px
    .q-btn
      margin-top 10px
  .modal-content
    border-radius 4px
    .close
      position absolute
      right 0
      top 0
      padding 0 10px
</style>
