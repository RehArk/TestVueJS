<template>
  <div class="text-center bg-color-black p-4">
    <h1 class="text-light">{{ msg }}</h1>
	<p class="text-muted">Datalumni Javascript coding test</p>
  </div>
</template>

<script>

export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	data () {
		return {}
    }
}

</script>

<style>

	.bg-color-black{
		background-color: #0f0f0f;
	}

</style>