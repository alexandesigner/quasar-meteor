<template>
  <div class="hello">
    <img src="~assets/quasar-meteor-logo-full.svg" alt="Quasar + Meteor Starter kit" width="280">
    <h5>Welcome to your Quasar + Meteor Starter kit</h5>
    <div class="padding">
      <div class="authentication">

        <div class="auth-buttons" v-if="!loggedIn">
          <small>Basic authentication using <strong>Meteor.Accounts</strong></small>
          <div>
            <q-btn color="standard" text-color="dark" @click="loginModal = true">Login</q-btn>
            <q-btn color="primary" @click="registerModal = true">Register</q-btn>
          </div>
        </div>
        <div class="auth-profile" v-if="loggedIn">
          <strong>{{ this.email }}</strong>
          <q-btn @click="logout" color="negative" small>Logout</q-btn>
        </div>

        <q-modal class="auth-modal" v-model="loginModal">
          <div class="padding">
            <h4>Login</h4>
            <q-btn class="close" color="negative" flat @click="loginModal = false">
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

        <q-modal class="auth-modal" v-model="registerModal">
          <div class="padding">
            <h4>Register</h4>
            <q-btn class="close" color="negative" flat @click="registerModal = false">
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
      <q-card v-if="loggedIn" class="block-list">
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
            <q-item v-for="item in tasks" :key="item.id">
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
import { Tasks } from 'api/collections'

export default {
  name: 'PageIndex',
  data () {
    return {
      tasks: [],
      userData: [],
      newTask: '',
      registerModal: false,
      loginModal: false,
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
    this.$meteor.subscribe('tasks')
    this.$meteor.tracker.autorun(() => {
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
    this.userEmail()
  },
  methods: {
    userEmail () {
      this.$meteor.tracker.autorun(() => {
        if (this.$meteor.userId() !== null || this.$meteor.user() !== null) {
          const userEmail = this.$meteor.users.find({_id: this.$meteor.userId()}, {fields: {emails: 1}})
            .map((item) => {
              return item.emails[0].address
            })
          this.email = userEmail[0]
        }
      })
    },
    logout () {
      this.$q.notify('You logged out')
      this.$meteor.logout()
      this.loggedIn = false
    },
    loginStatus () {
      if (this.$meteor.userId() !== null || this.$meteor.user() !== null) this.loggedIn = true
    },
    addTask (item) {
      if (this.newTask) {
        this.$meteor.call('tasks.insert', this.newTask, (err) => {
          if (err) {
            this.$q.notify({
              message: err.reason,
              color: 'positive'
            })
          } else {
            this.newTask = ''
          }
        })
      }
    },
    editTask (item) {
      item.editing = true
      if (item.editing === true) this.changeTask = item.title
    },
    saveTask (item) {
      item.editing = false
      if (this.changeTask) {
        this.$meteor.call('tasks.update', item._id, this.changeTask, (err) => {
          if (err) {
            this.$q.notify({
              message: err.reason,
              color: 'negative'
            })
          } else {
            this.$q.notify('Changed' + this.changeTask)
          }
        })
      }
    },
    removeTask (item) {
      this.$q.dialog({
        title: 'Remove task',
        message: 'Are you sure you want to remove this task?',
        ok: {
          label: 'Remove',
          color: 'negative'
        },
        cancel: {
          label: 'Cancel',
          flat: true
        }
      }).then(() => {
        this.$meteor.call('tasks.remove', item._id, (err) => {
          if (err) {
            this.$q.notify({
              message: err.reason,
              color: 'negative'
            })
          } else {
            this.$q.notify({
              message: 'Task has removed',
              color: 'negative'
            })
          }
        })
      }).catch(() => {
        console.log('Removed...')
      })
    },
    login () {
      this.loginLoad = true
      this.$meteor.loginWithPassword(this.loginForm.email, this.loginForm.password, (err) => {
        if (err) {
          this.$q.notify({
            message: err.reason,
            color: 'negative'
          })
          this.loginLoad = false
        } else {
          this.$q.notify({
            message: 'Good to see you again, welcome',
            color: 'positive'
          })
          this.loginLoad = false
          this.loginForm.email = ''
          this.loginForm.password = ''
          this.loginModal = false
        }
      })
    },
    register () {
      this.registerLoad = true
      this.$meteor.accounts.createUser({
        createdAt: new Date(),
        email: this.registerForm.email,
        password: this.registerForm.password
      }, (err, res) => {
        if (err) {
          this.$q.notify({
            message: err.reason,
            color: 'negative'
          })
          this.registerLoad = false
        } else {
          this.$q.notify({
            message: 'You just signed up',
            color: 'positive'
          })
          this.registerLoad = false
          this.registerForm.email = ''
          this.registerForm.password = ''
          this.registerModal = false
        }
      })
    }
  }
}
</script>

<style lang="stylus">
body
  background #f1f1f1
.hello
  text-align center
.q-btn
  margin 0 5px
  background #fff
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
  background #fff
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
