<template lanf="html">
  <div id="bookings">
      <ul v-for="(booking, index) in bookings" :key="index" :value="index">
          <li>Name:{{booking.name}}</li>
          <li>Email:{{booking.email}}</li>
      </ul>
  </div>
</template>

<script>
import {eventBus} from "@/main.js"
export default {
    name: "booking-list",
    props: ["bookings"]  
}
</script>

<style>

</style>


