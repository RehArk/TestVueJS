<template>
	<div class="zoomProfile">
		<h2 class="text-center">Profile Utilisateur</h2>

		<div v-if="!selectedProfile">
			<p>Veuillez selectionner un profile dans la liste</p>
		</div>

		<div v-if="selectedProfile">
			<div class="d-flex">
				<div class="border-right p-3">
					<img v-bind:src="selectedProfile.picture.large">
					<p class="font-weight-bold">
						<u>
							{{ selectedProfile.name.title }} 
							{{ selectedProfile.name.first }} 
							{{ selectedProfile.name.last }}
						</u>
					</p>
				</div>
				<div class="p-3">
					<p>Nationalité : <span class="font-weight-bold">{{ selectedProfile.nat }}</span></p>
					<p>Date de naissance : <span class="font-weight-bold">{{ selectedProfile.dob.date }}</span></p>
					<p>Ville : <span class="font-weight-bold">{{ selectedProfile.location.city }}</span></p>
					<p>Pays : <span class="font-weight-bold">{{ selectedProfile.location.country }}</span></p>
					<p>Email : <span class="font-weight-bold">{{ selectedProfile.email }}</span></p>
					<p>Telephone : <span class="font-weight-bold">{{ selectedProfile.cell }}</span></p>
					<p>Portable : <span class="font-weight-bold">{{ selectedProfile.phone }}</span></p>
					<p>UserName : <span class="font-weight-bold">{{ selectedProfile.login.username }}</span></p>
					<p>UUID : <span class="font-weight-bold">{{ selectedProfile.login.uuid }}</span></p>
				</div>
			</div>
			<div>
				<button type="button" class="m-1 p-2 btn btn-primary" v-on:click="copieUser(selectedProfileId)">Copier un utilisateur</button>
				<button type="button" class="m-1 p-2 btn btn-danger" v-on:click="deleteUser(selectedProfileId)">Supprimer un utilisateur</button>
			</div>
		</div>
	</div>
</template>

<script src="./ZoomProfile.js"></script>