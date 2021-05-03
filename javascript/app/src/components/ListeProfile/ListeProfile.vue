<template>
	<div class="border">
		<p :id="id" v-bind:class="(id == selectedProfileId)?'bg-dark text-light':''" class="w-100 m-0 p-1">{{ profile.name.first }} {{ profile.name.last }}</p>
	</div>
</template>

<script src="./ListeProfile.js"></script>