<template lang="html">
    <form class="" v-on:submit="addBooking" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required/>

        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required/>

        <label for="booked_in">Booked in:</label>
        <input type="checkbox" id="booked_in" v-model="booked_in" required/>

        <input type="submit" valu="Save" id="save"/>

    </form>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'
export default {
    name: 'booking-form',
    data(){
        return {
            name: '',
            email: '',
            booked_in: false
        }
    },
    methods: {
        addBooking(evt){
            evt.preventDefault();
            
            const booking = {
                name: this.name,
                email: this.email,
                booked_in: this.booked_in
            }
        BookingService.postBooking(booking)
        .then(res => eventBus.$emit('booking-added', res))    
        }
    }
}
</script>

<style>

</style>