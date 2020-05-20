<template>
    <div id="app">
        <bookings-form :bookings="bookings"></bookings-form>
        <bookings-list :bookings="bookings">{{bookings}}</bookings-list>
    </div>
</template>

<script>
import BookingsForm from './components/BookingsForm'
import BookingsList from './components/BookingsList'
import BookingService from './services/BookingService'

export default {
  name: 'app',
  data() {
    return {
        bookings:[]
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-list': BookingsList
  },
  methods: {
      fetchData() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style>

</style>