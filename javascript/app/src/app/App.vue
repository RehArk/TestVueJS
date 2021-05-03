<template>

	<div id="app">
		<AppTitle msg="Profile App"/>
		<div class="w-100 bg-light d-flex" v-if="apiLoaded">
			<section class="text-center p-3 w-50">
				<h2>Liste des utilisateurs</h2>
				<!-- Creation des elements de la liste -->
				<article class="m-1" v-for="(profile, index) in profiles" :key="index" v-on:click="getIndex(index)">
					<ProfileForList :id="index" :profile="profile" :selectedProfileId="selectedProfileId"/>
				</article>
				<button class="p-2 btn btn-primary" v-on:click="addUser">Ajouter un utilisateur</button>
			</section>
			<section class="p-3 w-50">
				<!-- Zoom sur le profile de l'utilisateur selectionné -->
				<ProfileForZoom :selectedProfile="selectedProfile" :selectedProfileId="selectedProfileId" 
				@deleteUser="deleteUser" @copieUser="copieUser"/>
			</section>
		</div>
	</div>
	
</template>

<script src="./App.js"></script>